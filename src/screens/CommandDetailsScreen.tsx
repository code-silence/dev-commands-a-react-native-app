import * as Clipboard from "expo-clipboard";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { commands } from "../data/commands";
import {
    getFavorites,
    toggleFavorite,
} from "../utils/favorites";
import { addRecentCommand } from "../utils/recentCommands";
import type { RootStackParamList } from "../navigation/AppNavigator";
import { technologies } from "../data/technologies";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "CommandDetails"
>;

export default function CommandDetailsScreen({
    route,
    navigation,
}: Props) {
    const {
        commandId,
        technologyName,
        color,
    } = route.params;

    const [isFavorite, setIsFavorite] =
        useState(false);

    const command = commands.find(
        (item) => item.id === commandId,
    );

    useEffect(() => {
        const loadCommandData = async () => {
            const favorites = await getFavorites();

            setIsFavorite(
                favorites.includes(commandId),
            );

            await addRecentCommand(commandId);
        };

        loadCommandData();
    }, [commandId]);

    if (!command) {
        return (
            <SafeAreaView style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    Command not found.
                </Text>
            </SafeAreaView>
        );
    }

    const copyCommand = async () => {
        await Clipboard.setStringAsync(
            command.command,
        );

        Alert.alert(
            "Copied",
            "Command copied to clipboard.",
        );
    };

    const handleFavorite = async () => {
        const newFavoriteState =
            await toggleFavorite(commandId);

        setIsFavorite(newFavoriteState);
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
                {/* Header */}
                <View style={styles.header}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.backButton,
                            pressed && styles.pressed,
                        ]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backText}>
                            ‹
                        </Text>
                    </Pressable>

                    <View
                        style={[
                            styles.technologyBadge,
                            {
                                backgroundColor: color,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.technologyText,
                                technologyName ===
                                "React Native" &&
                                styles.darkTechnologyText,
                            ]}
                        >
                            {technologyName}
                        </Text>
                    </View>

                    <Pressable
                        style={({ pressed }) => [
                            styles.favoriteButton,
                            isFavorite &&
                            styles.favoriteButtonActive,
                            pressed && styles.pressed,
                        ]}
                        onPress={handleFavorite}
                    >
                        <Text
                            style={[
                                styles.favoriteIcon,
                                isFavorite &&
                                styles.favoriteIconActive,
                            ]}
                        >
                            {isFavorite ? "★" : "☆"}
                        </Text>
                    </Pressable>
                </View>

                {/* Category */}
                <View
                    style={[
                        styles.categoryBadge,
                        {
                            backgroundColor: `${color}18`,
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.categoryDot,
                            {
                                backgroundColor: color,
                            },
                        ]}
                    />

                    <Text
                        style={[
                            styles.category,
                            {
                                color,
                            },
                        ]}
                    >
                        {command.category}
                    </Text>
                </View>

                {/* Title */}
                <Text style={styles.title}>
                    {command.title}
                </Text>

                <Text style={styles.description}>
                    {command.description}
                </Text>

                {/* Command */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Command
                    </Text>

                    <Text style={styles.codeLabel}>
                        TERMINAL
                    </Text>
                </View>

                <View style={styles.commandBox}>
                    <Text
                        style={styles.commandText}
                        selectable
                    >
                        {command.command}
                    </Text>
                </View>

                {/* Copy */}
                <Pressable
                    style={({ pressed }) => [
                        styles.copyButton,
                        {
                            backgroundColor: color,
                        },
                        pressed && styles.copyPressed,
                    ]}
                    onPress={copyCommand}
                >
                    <Text
                        style={[
                            styles.copyIcon,
                            technologyName ===
                            "React Native" &&
                            styles.darkCopyText,
                        ]}
                    >
                        ⧉
                    </Text>

                    <Text
                        style={[
                            styles.copyText,
                            technologyName ===
                            "React Native" &&
                            styles.darkCopyText,
                        ]}
                    >
                        Copy Command
                    </Text>
                </Pressable>

                {/* Favorite */}
                <Pressable
                    style={({ pressed }) => [
                        styles.favoriteAction,
                        isFavorite &&
                        styles.favoriteActionActive,
                        pressed && styles.copyPressed,
                    ]}
                    onPress={handleFavorite}
                >
                    <Text
                        style={[
                            styles.favoriteActionIcon,
                            isFavorite &&
                            styles.favoriteIconActive,
                        ]}
                    >
                        {isFavorite ? "★" : "☆"}
                    </Text>

                    <Text
                        style={[
                            styles.favoriteActionText,
                            isFavorite &&
                            styles.favoriteActionTextActive,
                        ]}
                    >
                        {isFavorite
                            ? "Remove from Favorites"
                            : "Add to Favorites"}
                    </Text>
                </Pressable>

                {/* When to use */}
                {command.whenToUse && (
                    <>
                        <Text style={styles.sectionTitle}>
                            When to use it
                        </Text>

                        <View
                            style={[
                                styles.infoCard,
                                {
                                    borderLeftColor: color,
                                },
                            ]}
                        >
                            <Text style={styles.infoText}>
                                {command.whenToUse}
                            </Text>
                        </View>
                    </>
                )}

                {/* Tips */}
                {command.tips &&
                    command.tips.length > 0 && (
                        <>
                            <Text style={styles.sectionTitle}>
                                Tips
                            </Text>

                            <View style={styles.tipsCard}>
                                {command.tips.map(
                                    (tip, index) => (
                                        <View
                                            key={index}
                                            style={[
                                                styles.tipRow,
                                                index <
                                                command.tips!.length -
                                                1 &&
                                                styles.tipRowSpacing,
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.tipNumber,
                                                    {
                                                        backgroundColor: `${color}18`,
                                                    },
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.tipNumberText,
                                                        {
                                                            color,
                                                        },
                                                    ]}
                                                >
                                                    {index + 1}
                                                </Text>
                                            </View>

                                            <Text
                                                style={styles.tipText}
                                            >
                                                {tip}
                                            </Text>
                                        </View>
                                    ),
                                )}
                            </View>
                        </>
                    )}

                {/* Notes */}
                {command.notes && (
                    <>
                        <Text style={styles.sectionTitle}>
                            Note
                        </Text>

                        <View
                            style={[
                                styles.noteCard,
                                {
                                    backgroundColor: `${color}12`,
                                    borderColor: `${color}35`,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.noteIcon,
                                    {
                                        color,
                                    },
                                ]}
                            >
                                i
                            </Text>

                            <Text style={styles.noteText}>
                                {command.notes}
                            </Text>
                        </View>
                    </>
                )}

                {/* Example */}
                {command.example && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Example
                            </Text>

                            <Text style={styles.codeLabel}>
                                EXAMPLE
                            </Text>
                        </View>

                        <View style={styles.exampleBox}>
                            <Text
                                style={styles.exampleText}
                                selectable
                            >
                                {command.example}
                            </Text>
                        </View>
                    </>
                )
                }
                {/* Related Commands */}
                {command.relatedCommands &&
                    command.relatedCommands.length > 0 && (
                        <>
                            <Text style={styles.sectionTitle}>
                                Related Commands
                            </Text>

                            <View style={styles.relatedList}>
                                {command.relatedCommands.map(
                                    (relatedId) => {
                                        const relatedCommand = commands.find(
                                            (item) => item.id === relatedId,
                                        );

                                        if (!relatedCommand) {
                                            return null;
                                        }

                                        const relatedTechnology =
                                            technologies.find(
                                                (technology) =>
                                                    technology.id ===
                                                    relatedCommand.technologyId,
                                            );

                                        if (!relatedTechnology) {
                                            return null;
                                        }

                                        return (
                                            <Pressable
                                                key={relatedCommand.id}
                                                style={({ pressed }) => [
                                                    styles.relatedCard,
                                                    pressed &&
                                                    styles.relatedCardPressed,
                                                ]}
                                                onPress={() =>
                                                    navigation.push(
                                                        "CommandDetails",
                                                        {
                                                            commandId:
                                                                relatedCommand.id,
                                                            technologyName:
                                                                relatedTechnology.name,
                                                            color:
                                                                relatedTechnology.color,
                                                        },
                                                    )
                                                }
                                            >
                                                <View style={styles.relatedContent}>
                                                    <Text
                                                        style={styles.relatedTitle}
                                                        numberOfLines={1}
                                                    >
                                                        {relatedCommand.title}
                                                    </Text>

                                                    <Text
                                                        style={styles.relatedCommand}
                                                        numberOfLines={1}
                                                    >
                                                        {relatedCommand.command}
                                                    </Text>
                                                </View>

                                                <Text
                                                    style={[
                                                        styles.relatedArrow,
                                                        {
                                                            color:
                                                                relatedTechnology.color,
                                                        },
                                                    ]}
                                                >
                                                    ›
                                                </Text>
                                            </Pressable>
                                        );
                                    },
                                )}
                            </View>
                        </>
                    )
                }

                <View style={styles.bottomSpace} />
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
        paddingHorizontal: 22,
        paddingTop: 18,
        paddingBottom: 30,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 27,
    },

    backButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    backText: {
        fontSize: 32,
        lineHeight: 34,
        color: "#33343A",
        marginTop: -3,
    },

    technologyBadge: {
        flex: 1,
        minHeight: 44,
        paddingHorizontal: 14,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    technologyText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "800",
    },

    darkTechnologyText: {
        color: "#17202A",
    },

    favoriteButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        marginLeft: 10,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    favoriteButtonActive: {
        backgroundColor: "#FFF3D6",
    },

    favoriteIcon: {
        fontSize: 25,
        color: "#777984",
    },

    favoriteIconActive: {
        color: "#F2A900",
    },

    pressed: {
        opacity: 0.7,
    },

    categoryBadge: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 9,
    },

    categoryDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 7,
    },

    category: {
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 0.9,
        textTransform: "uppercase",
    },

    title: {
        marginTop: 13,
        fontSize: 29,
        lineHeight: 36,
        fontWeight: "800",
        color: "#17181D",
    },

    description: {
        marginTop: 12,
        fontSize: 15,
        lineHeight: 23,
        color: "#70727D",
    },

    sectionHeader: {
        marginTop: 29,
        marginBottom: 11,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    sectionTitle: {
        marginTop: 29,
        marginBottom: 12,
        fontSize: 18,
        fontWeight: "700",
        color: "#202127",
    },

    codeLabel: {
        fontSize: 9,
        fontWeight: "800",
        letterSpacing: 1,
        color: "#999BA5",
    },

    commandBox: {
        padding: 18,
        minHeight: 76,
        borderRadius: 16,
        backgroundColor: "#1D1E24",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#303139",
    },

    commandText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "monospace",
        color: "#FFFFFF",
    },

    copyButton: {
        height: 52,
        marginTop: 11,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    copyIcon: {
        marginRight: 8,
        fontSize: 17,
        color: "#FFFFFF",
        fontWeight: "800",
    },

    copyPressed: {
        opacity: 0.75,
    },

    copyText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },

    darkCopyText: {
        color: "#17202A",
    },

    favoriteAction: {
        height: 52,
        marginTop: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#E0E0E5",
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    favoriteActionActive: {
        backgroundColor: "#FFF8E8",
        borderColor: "#F2D99A",
    },

    favoriteActionIcon: {
        marginRight: 8,
        fontSize: 19,
        color: "#777984",
    },

    favoriteActionText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#555760",
    },

    favoriteActionTextActive: {
        color: "#C48700",
    },

    infoCard: {
        padding: 17,
        paddingLeft: 18,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        borderLeftWidth: 4,
    },

    infoText: {
        fontSize: 14,
        lineHeight: 22,
        color: "#666873",
    },

    tipsCard: {
        padding: 17,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
    },

    tipRow: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    tipRowSpacing: {
        marginBottom: 16,
    },

    tipNumber: {
        width: 27,
        height: 27,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 11,
    },

    tipNumberText: {
        fontSize: 12,
        fontWeight: "800",
    },

    tipText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 21,
        color: "#666873",
        paddingTop: 2,
    },

    noteCard: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "flex-start",
    },

    noteIcon: {
        width: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        lineHeight: 24,
        fontSize: 14,
        fontWeight: "800",
        marginRight: 10,
    },

    noteText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 21,
        color: "#666873",
    },

    exampleBox: {
        padding: 17,
        borderRadius: 15,
        backgroundColor: "#25262D",
        borderWidth: 1,
        borderColor: "#34353D",
    },

    exampleText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "monospace",
        color: "#FFFFFF",
    },

    bottomSpace: {
        height: 25,
    },

    errorContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F7FB",
    },

    errorText: {
        fontSize: 16,
        color: "#55565E",
    },

    relatedList: {
        gap: 10,
    },

    relatedCard: {
        minHeight: 68,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
    },

    relatedCardPressed: {
        opacity: 0.7,
        transform: [
            {
                scale: 0.98,
            },
        ],
    },

    relatedContent: {
        flex: 1,
    },

    relatedTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#202127",
    },

    relatedCommand: {
        marginTop: 5,
        fontSize: 11,
        fontFamily: "monospace",
        color: "#858792",
    },

    relatedArrow: {
        marginLeft: 10,
        fontSize: 28,
        fontWeight: "300",
    },
});
