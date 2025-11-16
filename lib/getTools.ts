import tools from "@/data/ai-tools.json" assert { type: "json" };

export type Tool = {
  id: string;
  name: string;
  category: string;
  pricing: string;
  description: string;
  logo: string;
  website: string;
};

export function getAllTools(): Tool[] {
  return tools as Tool[];
}

export function getToolById(id: string): Tool | undefined {
  return (tools as Tool[]).find((t) => t.id === id);
}
