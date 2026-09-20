export type Command = {
  id: string;
  technologyId: string;

  title: string;
  command: string;

  category: string;
  description: string;

  whenToUse?: string;
  example?: string;

  tips?: string[];
  notes?: string;

  relatedCommands?: string[];
};
