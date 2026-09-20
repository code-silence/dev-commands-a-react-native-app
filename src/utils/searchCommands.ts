import { Command } from "../data/commands";

export function searchCommands(
  commands: Command[],
  searchText: string,
): Command[] {
  const query = searchText.trim().toLowerCase();

  if (!query) {
    return [];
  }

  return commands.filter((command) => {
    const searchableText = [
      command.title,
      command.command,
      command.description,
      command.category,
      ...command.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });
}
