import { isProduction } from "@/lib/env";

/**
 * Loads a collection for a landing-page section without letting one failing
 * endpoint break the whole page.
 *
 * - API has data → API data.
 * - API empty or failing → mock data in development, `[]` in production
 *   (the section then renders its empty state). Production never shows mocks.
 */
export async function withDevFallback<T>(
  label: string,
  load: () => Promise<T[]>,
  mock: T[],
): Promise<T[]> {
  try {
    const data = await load();
    if (data.length > 0 || isProduction) return data;
  } catch (error) {
    console.error(`[${label}] API request failed:`, error);
    if (isProduction) return [];
  }

  return mock;
}
