import { z } from "zod";

import { getServerEnv, isProduction } from "@/lib/env";

const DEFAULT_REVALIDATE_SECONDS = 60;

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type ApiGetOptions<T extends z.ZodType> = {
  schema: T;
  tags: string[];
  revalidate?: number;
};

/** The only wrapper around `fetch` to the backend. Validates the JSON with `schema`. */
export async function apiGet<T extends z.ZodType>(
  path: string,
  { schema, tags, revalidate = DEFAULT_REVALIDATE_SECONDS }: ApiGetOptions<T>,
): Promise<z.infer<T>> {
  const base = getServerEnv().API_BASE_URL.replace(/\/+$/, "");
  const url = `${base}/${path.replace(/^\/+/, "")}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    // Production caches per entity tag and revalidates in the background.
    // Development always reads fresh so CMS edits show up on the next reload
    // (the dev fetch cache can otherwise keep serving an old response).
    ...(isProduction ? { next: { revalidate, tags } } : { cache: "no-store" }),
  });

  if (!response.ok) {
    throw new ApiError(`GET ${url} failed with ${response.status}`, response.status);
  }

  const json: unknown = await response.json();
  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    throw new ApiError(
      `GET ${url} returned an unexpected shape: ${z.prettifyError(parsed.error)}`,
      502,
    );
  }

  return parsed.data;
}
