import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@devcommands_favorites";

export async function getFavorites(): Promise<string[]> {
  try {
    const storedFavorites =
      await AsyncStorage.getItem(FAVORITES_KEY);

    if (!storedFavorites) {
      return [];
    }

    return JSON.parse(storedFavorites);
  } catch {
    return [];
  }
}

export async function addFavorite(
  commandId: string,
): Promise<void> {
  const favorites = await getFavorites();

  if (favorites.includes(commandId)) {
    return;
  }

  favorites.push(commandId);

  await AsyncStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites),
  );
}

export async function removeFavorite(
  commandId: string,
): Promise<void> {
  const favorites = await getFavorites();

  const updatedFavorites = favorites.filter(
    (id) => id !== commandId,
  );

  await AsyncStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites),
  );
}

export async function toggleFavorite(
  commandId: string,
): Promise<boolean> {
  const favorites = await getFavorites();

  if (favorites.includes(commandId)) {
    await removeFavorite(commandId);
    return false;
  }

  await addFavorite(commandId);
  return true;
}
