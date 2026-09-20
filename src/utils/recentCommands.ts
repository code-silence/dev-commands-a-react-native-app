import AsyncStorage from "@react-native-async-storage/async-storage";

const RECENT_COMMANDS_KEY = "@devcommands_recent_commands";

const MAX_RECENT_COMMANDS = 10;

export async function getRecentCommands(): Promise<string[]> {
  try {
    const stored =
      await AsyncStorage.getItem(RECENT_COMMANDS_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export async function addRecentCommand(
  commandId: string,
): Promise<void> {
  const recentCommands =
    await getRecentCommands();

  const updatedCommands = [
    commandId,
    ...recentCommands.filter(
      (id) => id !== commandId,
    ),
  ].slice(0, MAX_RECENT_COMMANDS);

  await AsyncStorage.setItem(
    RECENT_COMMANDS_KEY,
    JSON.stringify(updatedCommands),
  );
}

export async function clearRecentCommands(): Promise<void> {
  await AsyncStorage.removeItem(
    RECENT_COMMANDS_KEY,
  );
}
