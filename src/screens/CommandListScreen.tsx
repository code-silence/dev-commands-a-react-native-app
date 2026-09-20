import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { commands } from "../data/commands";
import { searchCommands } from "../utils/searchCommands";
import TechnologyIcon from "../components/TechnologyIcon";
import type { RootStackParamList } from "../navigation/AppNavigator";

type Route = RouteProp<
  RootStackParamList,
  "CommandList"
>;

type Navigation =
  NativeStackNavigationProp<RootStackParamList>;

export default function CommandListScreen() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const {
    technologyId,
    technologyName,
    color,
  } = route.params;

  const [searchText, setSearchText] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const technologyCommands = useMemo(() => {
    return commands.filter(
      (command) =>
        command.technologyId === technologyId,
    );
  }, [technologyId]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        technologyCommands.map(
          (command) => command.category,
        ),
      ),
    );

    return ["All", ...uniqueCategories];
  }, [technologyCommands]);

  const filteredCommands = useMemo(() => {
    let result = technologyCommands;

    if (selectedCategory !== "All") {
      result = result.filter(
        (command) =>
          command.category === selectedCategory,
      );
    }

    if (searchText.trim()) {
      result = searchCommands(
        result,
        searchText,
      );
    }

    return result;
  }, [
    technologyCommands,
    selectedCategory,
    searchText,
  ]);

  const getIconColor = (
    id: string,
  ) => {
    return id === "react-native"
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
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>
              ‹
            </Text>
          </Pressable>

          <View style={styles.headerText}>
            <Text style={styles.eyebrow}>
              TECHNOLOGY
            </Text>

            <Text style={styles.title}>
              {technologyName}
            </Text>
          </View>

          <View
            style={[
              styles.technologyIcon,
              {
                backgroundColor: color,
              },
            ]}
          >
            <TechnologyIcon
              technologyId={technologyId}
              size={26}
              color={getIconColor(
                technologyId,
              )}
            />
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder={`Search ${technologyName} commands...`}
            placeholderTextColor="#9A9A9A"
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
          />

          {searchText.length > 0 && (
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

        {/* Categories */}
        <Text style={styles.categoryLabel}>
          CATEGORIES
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            styles.categoryList
          }
        >
          {categories.map((category) => {
            const active =
              selectedCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() =>
                  setSelectedCategory(
                    category,
                  )
                }
                style={[
                  styles.categoryChip,
                  active && {
                    backgroundColor: color,
                    borderColor: color,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    active &&
                      styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Result count */}
        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>
            Commands
          </Text>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>
              {filteredCommands.length}
            </Text>
          </View>
        </View>

        {/* Commands */}
        {filteredCommands.length > 0 ? (
          <View style={styles.commandList}>
            {filteredCommands.map((command) => (
              <Pressable
                key={command.id}
                style={({ pressed }) => [
                  styles.commandCard,
                  pressed &&
                    styles.commandPressed,
                ]}
                onPress={() =>
                  navigation.navigate(
                    "CommandDetails",
                    {
                      commandId: command.id,
                      technologyName,
                      color,
                    },
                  )
                }
              >
                <View
                  style={[
                    styles.commandAccent,
                    {
                      backgroundColor: color,
                    },
                  ]}
                />

                <View
                  style={styles.commandContent}
                >
                  <View
                    style={styles.commandTopRow}
                  >
                    <Text
                      style={styles.commandTitle}
                      numberOfLines={1}
                    >
                      {command.title}
                    </Text>

                    <Text
                      style={styles.commandArrow}
                    >
                      ›
                    </Text>
                  </View>

                  <Text
                    style={styles.commandCategory}
                  >
                    {command.category}
                  </Text>

                  <View
                    style={styles.codeBox}
                  >
                    <Text
                      style={styles.code}
                      numberOfLines={2}
                    >
                      {command.command}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <View
              style={[
                styles.emptyIcon,
                {
                  backgroundColor: `${color}20`,
                },
              ]}
            >
              <Text
                style={[
                  styles.emptyIconText,
                  { color },
                ]}
              >
                ?
              </Text>
            </View>

            <Text style={styles.emptyTitle}>
              No commands found
            </Text>

            <Text style={styles.emptyText}>
              Try another search or category.
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
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  backText: {
    fontSize: 34,
    lineHeight: 36,
    color: "#33343A",
    marginTop: -3,
  },

  headerText: {
    flex: 1,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#777A86",
  },

  title: {
    marginTop: 3,
    fontSize: 27,
    fontWeight: "800",
    color: "#17181D",
  },

  technologyIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  searchBox: {
    height: 54,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  searchIcon: {
    fontSize: 25,
    color: "#737682",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#17181D",
  },

  clearText: {
    fontSize: 27,
    color: "#8A8C96",
    paddingLeft: 8,
  },

  categoryLabel: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#777A86",
  },

  categoryList: {
    gap: 8,
    paddingRight: 20,
  },

  categoryChip: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6F717C",
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },

  resultHeader: {
    marginTop: 27,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#17181D",
  },

  countBadge: {
    marginLeft: 8,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#EDE9FF",
  },

  countText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6C4CF1",
  },

  commandList: {
    gap: 11,
  },

  commandCard: {
    minHeight: 108,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    overflow: "hidden",
  },

  commandPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.985 }],
  },

  commandAccent: {
    width: 5,
  },

  commandContent: {
    flex: 1,
    padding: 14,
  },

  commandTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  commandTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#202127",
  },

  commandArrow: {
    marginLeft: 8,
    fontSize: 25,
    color: "#B4B5BC",
  },

  commandCategory: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: "600",
    color: "#858792",
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
    lineHeight: 16,
    fontFamily: "monospace",
    color: "#FFFFFF",
  },

  emptyState: {
    marginTop: 35,
    padding: 28,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  emptyIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyIconText: {
    fontSize: 24,
    fontWeight: "800",
  },

  emptyTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: "700",
    color: "#202127",
  },

  emptyText: {
    marginTop: 6,
    fontSize: 13,
    color: "#858792",
  },
});
