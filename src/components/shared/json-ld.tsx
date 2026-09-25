type JsonLdProps = {
  data: Record<string, unknown>;
};

/** schema.org structured data. A plain <script> is correct here (not next/script). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so CMS content cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
