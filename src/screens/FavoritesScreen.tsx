import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { commands } from "../data/commands";
import { technologies } from "../data/technologies";
import {
  getFavorites,
  removeFavorite,
} from "../utils/favorites";
import TechnologyIcon from "../components/TechnologyIcon";
import type { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function FavoritesScreen() {
  const navigation =
    useNavigation<NavigationProp>();

  const [favoriteIds, setFavoriteIds] = useState<
    string[]
  >([]);

  const loadFavorites = async () => {
    const favorites = await getFavorites();

    setFavoriteIds(favorites);
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  const favoriteCommands = commands.filter(
    (command) =>
      favoriteIds.includes(command.id),
  );

  const getTechnology = (
    technologyId: string,
  ) => {
    return technologies.find(
      (technology) =>
        technology.id === technologyId,
    );
  };

  const getIconColor = (
    technologyId: string,
  ) => {
    return technologyId === "react-native"
      ? "#17202A"
      : "#FFFFFF";
  };

  const handleRemove = async (
    commandId: string,
  ) => {
    await removeFavorite(commandId);

    setFavoriteIds((current) =>
      current.filter(
        (id) => id !== commandId,
      ),
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            YOUR COLLECTION
          </Text>

          <Text style={styles.title}>
            Favorites
          </Text>
        </View>

        <View style={styles.countCard}>
          <View style={styles.starCircle}>
            <Text style={styles.star}>
              ★
            </Text>
          </View>

          <View>
            <Text style={styles.countNumber}>
              {favoriteCommands.length}
            </Text>

            <Text style={styles.countText}>
              saved commands
            </Text>
          </View>
        </View>

        {favoriteCommands.length > 0 ? (
          <View style={styles.list}>
            {favoriteCommands.map((command) => {
              const technology =
                getTechnology(
                  command.technologyId,
                );

              if (!technology) {
                return null;
              }

              return (
                <Pressable
                  key={command.id}
                  style={({ pressed }) => [
                    styles.commandCard,
                    pressed &&
                      styles.cardPressed,
                  ]}
                  onPress={() =>
                    navigation.navigate(
                      "CommandDetails",
                      {
                        commandId:
                          command.id,
                        technologyName:
                          technology.name,
                        color:
                          technology.color,
                      },
                    )
                  }
                >
                  <View
                    style={[
                      styles.icon,
                      {
                        backgroundColor:
                          technology.color,
                      },
                    ]}
                  >
                    <TechnologyIcon
                      technologyId={
                        technology.id
                      }
                      size={26}
                      color={getIconColor(
                        technology.id,
                      )}
                    />
                  </View>

                  <View
                    style={
                      styles.commandContent
                    }
                  >
                    <View
                      style={
                        styles.commandHeader
                      }
                    >
                      <View
                        style={
                          styles.titleContainer
                        }
                      >
                        <Text
                          style={
                            styles.commandTitle
                          }
                          numberOfLines={1}
                        >
                          {command.title}
                        </Text>

                        <Text
                          style={
                            styles.technology
                          }
                        >
                          {technology.name}
                        </Text>
                      </View>

                      <Pressable
                        hitSlop={10}
                        onPress={() =>
                          handleRemove(
                            command.id,
                          )
                        }
                      >
                        <Text
                          style={
                            styles.removeStar
                          }
                        >
                          ★
                        </Text>
                      </Pressable>
                    </View>

                    <View
                      style={
                        styles.codeBox
                      }
                    >
                      <Text
                        style={styles.code}
                        numberOfLines={1}
                      >
                        {command.command}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Text
                style={styles.emptyStar}
              >
                ☆
              </Text>
            </View>

            <Text style={styles.emptyTitle}>
              No favorites yet
            </Text>

            <Text style={styles.emptyText}>
              Save commands you use frequently
              and they'll appear here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  content: {
    padding: 22,
    paddingTop: 30,
    paddingBottom: 50,
  },

  header: {
    marginBottom: 24,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#777A86",
  },

  title: {
    marginTop: 3,
    fontSize: 28,
    fontWeight: "800",
    color: "#17181D",
  },

  countCard: {
    padding: 17,
    borderRadius: 18,
    backgroundColor: "#EDE9FF",
    flexDirection: "row",
    alignItems: "center",
  },

  starCircle: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  star: {
    fontSize: 22,
    color: "#F2A900",
  },

  countNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#3E3760",
  },

  countText: {
    marginTop: 1,
    fontSize: 12,
    color: "#716A8B",
  },

  list: {
    marginTop: 20,
    gap: 12,
  },

  commandCard: {
    padding: 14,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  commandContent: {
    flex: 1,
    marginLeft: 12,
  },

  commandHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
  },

  commandTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#202127",
  },

  technology: {
    marginTop: 2,
    fontSize: 11,
    color: "#858792",
  },

  removeStar: {
    fontSize: 21,
    color: "#F2A900",
    paddingLeft: 8,
  },

  codeBox: {
    marginTop: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 9,
    backgroundColor: "#1D1E24",
  },

  code: {
    fontSize: 11,
    fontFamily: "monospace",
    color: "#FFFFFF",
  },

  emptyState: {
    marginTop: 40,
    padding: 28,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: "#EDE9FF",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyStar: {
    fontSize: 32,
    color: "#6C4CF1",
  },

  emptyTitle: {
    marginTop: 16,
    fontSize: 19,
    fontWeight: "700",
    color: "#202127",
  },

  emptyText: {
    marginTop: 7,
    maxWidth: 270,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    color: "#858792",
  },
});