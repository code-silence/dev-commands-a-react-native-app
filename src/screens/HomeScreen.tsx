import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { technologies } from "../data/technologies";
import { commands } from "../data/commands";
import { searchCommands } from "../utils/searchCommands";
import { getRecentCommands } from "../utils/recentCommands";
import TechnologyIcon from "../components/TechnologyIcon";
import type { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation =
    useNavigation<NavigationProp>();

  const [searchText, setSearchText] = useState("");
  const [recentIds, setRecentIds] = useState<
    string[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      const loadRecentCommands = async () => {
        const recent = await getRecentCommands();

        setRecentIds(recent);
      };

      loadRecentCommands();
    }, []),
  );

  const searchResults = searchCommands(
    commands,
    searchText,
  );

  const recentCommands = recentIds
    .map((id) =>
      commands.find(
        (command) => command.id === id,
      ),
    )
    .filter(
      (
        command,
      ): command is NonNullable<typeof command> =>
        command !== undefined,
    );

  const isSearching =
    searchText.trim().length > 0;

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

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              DEVELOPER TOOLKIT
            </Text>

            <Text style={styles.title}>
              DevCommands
            </Text>
          </View>

          <View style={styles.logo}>
            <Text style={styles.logoText}>
              {"</>"}
            </Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Find commands, understand them, and get
          back to coding.
        </Text>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search commands..."
            placeholderTextColor="#9A9A9A"
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
          />

          {isSearching && (
            <Pressable
              onPress={() => setSearchText("")}
              hitSlop={8}
            >
              <Text style={styles.clearText}>
                ×
              </Text>
            </Pressable>
          )}
        </View>

        {isSearching ? (
          <View style={styles.resultsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Search Results
              </Text>

              <Text style={styles.resultCount}>
                {searchResults.length}
              </Text>
            </View>

            {searchResults.map((command) => {
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
                    styles.resultCard,
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
                      styles.resultIcon,
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
                      size={24}
                      color={getIconColor(
                        technology.id,
                      )}
                    />
                  </View>

                  <View
                    style={styles.resultContent}
                  >
                    <View
                      style={
                        styles.resultTitleRow
                      }
                    >
                      <Text
                        style={styles.resultTitle}
                        numberOfLines={1}
                      >
                        {command.title}
                      </Text>

                      <Text
                        style={styles.arrow}
                      >
                        ›
                      </Text>
                    </View>

                    <Text
                      style={
                        styles.resultTechnology
                      }
                    >
                      {technology.name} ·{" "}
                      {command.category}
                    </Text>

                    <View
                      style={
                        styles.resultCodeBox
                      }
                    >
                      <Text
                        style={styles.resultCode}
                        numberOfLines={1}
                      >
                        {command.command}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}

            {searchResults.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyIcon}>
                  ?
                </Text>

                <Text style={styles.emptyTitle}>
                  No commands found
                </Text>

                <Text style={styles.emptyText}>
                  Try searching for something
                  like "apk", "branch", or
                  "package".
                </Text>
              </View>
            )}
          </View>
        ) : (
          <>
            {/* Technologies */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Technologies
              </Text>

              <Text style={styles.sectionCount}>
                {technologies.length}
              </Text>
            </View>

            <View style={styles.grid}>
              {technologies.map(
                (technology) => (
                  <Pressable
                    key={technology.id}
                    style={({ pressed }) => [
                      styles.card,
                      pressed &&
                        styles.cardPressed,
                    ]}
                    onPress={() =>
                      navigation.navigate(
                        "CommandList",
                        {
                          technologyId:
                            technology.id,
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
                        styles.iconContainer,
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
                        size={30}
                        color={getIconColor(
                          technology.id,
                        )}
                      />
                    </View>

                    <View
                      style={styles.cardText}
                    >
                      <Text
                        style={
                          styles.cardTitle
                        }
                      >
                        {technology.name}
                      </Text>

                      <Text
                        style={
                          styles.cardDescription
                        }
                      >
                        {technology.description}
                      </Text>
                    </View>

                    <Text
                      style={styles.arrow}
                    >
                      ›
                    </Text>
                  </Pressable>
                ),
              )}
            </View>

            {/* Recently Used */}
            {recentCommands.length > 0 && (
              <View style={styles.recentSection}>
                <View
                  style={
                    styles.sectionHeader
                  }
                >
                  <Text
                    style={
                      styles.sectionTitle
                    }
                  >
                    Recently Used
                  </Text>

                  <Text
                    style={
                      styles.recentCount
                    }
                  >
                    {recentCommands.length}
                  </Text>
                </View>

                <View
                  style={styles.recentList}
                >
                  {recentCommands
                    .slice(0, 5)
                    .map((command) => {
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
                          style={({
                            pressed,
                          }) => [
                            styles.recentCard,
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
                              styles.recentIcon,
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
                              size={22}
                              color={getIconColor(
                                technology.id,
                              )}
                            />
                          </View>

                          <View
                            style={
                              styles.recentContent
                            }
                          >
                            <Text
                              style={
                                styles.recentTitle
                              }
                              numberOfLines={1}
                            >
                              {command.title}
                            </Text>

                            <Text
                              style={
                                styles.recentTechnology
                              }
                            >
                              {
                                technology.name
                              }
                            </Text>

                            <View
                              style={
                                styles.recentCodeBox
                              }
                            >
                              <Text
                                style={
                                  styles.recentCode
                                }
                                numberOfLines={
                                  1
                                }
                              >
                                {
                                  command.command
                                }
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={styles.arrow}
                          >
                            ›
                          </Text>
                        </Pressable>
                      );
                    })}
                </View>
              </View>
            )}
          </>
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
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  greeting: {
    fontSize: 11,
    fontWeight: "700",
    color: "#777A86",
    marginBottom: 4,
    letterSpacing: 1.2,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#17181D",
  },

  logo: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#6C4CF1",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#747783",
    maxWidth: 340,
  },

  searchBox: {
    height: 56,
    marginTop: 26,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  searchIcon: {
    fontSize: 26,
    color: "#737682",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#17181D",
  },

  clearText: {
    fontSize: 28,
    color: "#8A8C96",
    paddingLeft: 8,
  },

  sectionHeader: {
    marginTop: 30,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#17181D",
  },

  sectionCount: {
    marginLeft: 8,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#E9E5FF",
    color: "#6C4CF1",
    fontSize: 12,
    fontWeight: "700",
  },

  resultCount: {
    marginLeft: 8,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#E9E5FF",
    color: "#6C4CF1",
    fontSize: 12,
    fontWeight: "700",
  },

  grid: {
    gap: 12,
  },

  card: {
    minHeight: 92,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  cardText: {
    flex: 1,
    marginLeft: 14,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#202127",
  },

  cardDescription: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: "#858792",
  },

  arrow: {
    marginLeft: 8,
    fontSize: 28,
    color: "#B4B5BC",
  },

  resultsSection: {
    marginTop: 2,
  },

  resultCard: {
    marginBottom: 12,
    padding: 14,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },

  resultIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  resultContent: {
    flex: 1,
    marginLeft: 12,
  },

  resultTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  resultTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#202127",
  },

  resultTechnology: {
    marginTop: 3,
    fontSize: 12,
    color: "#858792",
  },

  resultCodeBox: {
    marginTop: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 9,
    backgroundColor: "#1D1E24",
  },

  resultCode: {
    fontSize: 12,
    fontFamily: "monospace",
    color: "#FFFFFF",
  },

  emptyState: {
    marginTop: 20,
    padding: 28,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  emptyIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EDE9FF",
    color: "#6C4CF1",
    textAlign: "center",
    lineHeight: 42,
    fontSize: 20,
    fontWeight: "800",
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: "700",
    color: "#202127",
  },

  emptyText: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    color: "#858792",
  },

  recentSection: {
    marginTop: 6,
  },

  recentCount: {
    marginLeft: 8,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#EDE9FF",
    color: "#6C4CF1",
    fontSize: 12,
    fontWeight: "700",
  },

  recentList: {
    gap: 10,
  },

  recentCard: {
    padding: 13,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },

  recentIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  recentContent: {
    flex: 1,
    marginLeft: 11,
  },

  recentTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#202127",
  },

  recentTechnology: {
    marginTop: 2,
    fontSize: 11,
    color: "#858792",
  },

  recentCodeBox: {
    marginTop: 7,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#1D1E24",
  },

  recentCode: {
    fontSize: 10,
    fontFamily: "monospace",
    color: "#FFFFFF",
  },
});