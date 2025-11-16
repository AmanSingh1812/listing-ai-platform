export default function Home() {
  return (
    <section className="text-center py-28">
      <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
        Discover the Best{" "}
        <span className="text-blue-600">
          AI Tools
        </span>
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
        Explore a curated directory of 60+ AI tools. Search, filter, and explore
        categories to find the perfect tools for your workflow.
      </p>

      <a
        href="/tools"
        className="inline-block mt-10 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
      >
        Browse Tools →
      </a>
    </section>
  );
}
