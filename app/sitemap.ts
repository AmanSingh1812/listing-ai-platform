import { getAllTools } from "@/lib/getTools";

export default function sitemap() {
  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `https://your-vercel-domain.vercel.app/tools/${tool.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://your-vercel-domain.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://your-vercel-domain.vercel.app/tools",
      lastModified: new Date(),
    },
    ...toolUrls,
  ];
}
