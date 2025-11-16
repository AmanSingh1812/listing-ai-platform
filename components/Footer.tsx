export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
      <p>© {new Date().getFullYear()} AIHub Directory</p>
      <p className="text-sm mt-2">Built by Aman Singh • Internship Project</p>
    </footer>
  );
}
