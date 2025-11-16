import { getAllTools, getToolById } from "@/lib/getTools";
import Link from "next/link";

// Generate dynamic routes
export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({ id: tool.id }));
}

export default async function ToolDetailPage({ params }: any) {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) {
    return (
      <main className="py-20 bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-3xl font-bold">Tool Not Found</h1>
      </main>
    );
  }

  return (
    <main
      className="py-20 max-w-4xl mx-auto px-4 
                      text-[var(--foreground)] transition-colors"
    >
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight">{tool.name}</h1>

      <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
        {tool.category}
      </p>

      {/* Description */}
      <p className="mt-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {tool.description}
      </p>

      {/* Button */}
      <a
        href={tool.website}
        target="_blank"
        className="inline-block mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg 
                   font-medium hover:bg-blue-700 transition"
      >
        Visit Website →
      </a>

      {/* Related Tools */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Related Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {getAllTools()
            .filter((t) => t.category === tool.category && t.id !== tool.id)
            .map((related) => (
              <Link
                key={related.id}
                href={`/tools/${related.id}`}
                className="p-4 rounded-xl border 
                           bg-white dark:bg-gray-900 
                           border-gray-200 dark:border-gray-700 
                           shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {related.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {related.category}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
