import {
    Image,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import type { RootStackParamList } from "../navigation/AppNavigator";

type Navigation =
    NativeStackNavigationProp<RootStackParamList>;

export default function AboutDeveloperScreen() {
    const navigation = useNavigation<Navigation>();

    const openLink = async (url: string) => {
        await Linking.openURL(url);
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
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backText}>‹</Text>
                    </Pressable>

                    <Text style={styles.headerTitle}>
                        About Developer
                    </Text>
                </View>

                {/* Developer Profile */}
                <View style={styles.profile}>
                    <Image
                        source={require("../../assets/dev_avatar.jpg")}
                        style={styles.avatar}
                    />

                    <Text style={styles.username}>
                        code_silence
                    </Text>

                    <Text style={styles.description}>
                        Someone passionate about technology and developer who enjoys
                        building useful apps, exploring new
                        technologies, and turning ideas into
                        real projects.
                    </Text>
                </View>

                {/* GitHub Highlight */}
                <Pressable
                    style={({ pressed }) => [
                        styles.githubCard,
                        pressed && styles.pressed,
                    ]}
                    onPress={() =>
                        openLink(
                            "https://github.com/code-silence",
                        )
                    }
                >
                    <View style={styles.githubIcon}>
                        <Ionicons
                            name="logo-github"
                            size={27}
                            color="#17181D"
                        />
                    </View>

                    <View style={styles.githubContent}>
                        <Text style={styles.githubTitle}>
                            Want to collaborate?
                        </Text>

                        <Text style={styles.githubText}>
                            Check my projects on GitHub
                        </Text>
                    </View>

                    <Text style={styles.githubArrow}>
                        ↗
                    </Text>
                </Pressable>

                {/* Connect */}
                <Text style={styles.sectionTitle}>
                    CONNECT WITH ME
                </Text>

                <View style={styles.links}>
                    {/* Email */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.linkCard,
                            pressed && styles.pressed,
                        ]}
                        onPress={() =>
                            openLink("mailto:arnob8855@gmail.com")
                        }
                    >
                        <View style={styles.linkIcon}>
                            <Ionicons
                                name="mail"
                                size={23}
                                color="#6C4CF1"
                            />
                        </View>

                        <View style={styles.linkContent}>
                            <View style={styles.linkTitleRow}>
                                <Text style={styles.linkTitle}>
                                    Email
                                </Text>

                                <View style={styles.recommended}>
                                    <Text style={styles.recommendedText}>
                                        Recommended
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.linkDescription}>
                                Any feedback is appreciated
                            </Text>
                        </View>

                        <Text style={styles.arrow}>›</Text>
                    </Pressable>

                    {/* Telegram */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.linkCard,
                            pressed && styles.pressed,
                        ]}
                        onPress={() =>
                            openLink(
                                "https://t.me/arnob8855",
                            )
                        }
                    >
                        <View style={styles.linkIcon}>
                            <Ionicons
                                name="paper-plane"
                                size={22}
                                color="#6C4CF1"
                            />
                        </View>

                        <View style={styles.linkContent}>
                            <Text style={styles.linkTitle}>
                                Telegram
                            </Text>

                            <Text style={styles.linkDescription}>
                                Connect with me on Telegram
                            </Text>
                        </View>

                        <Text style={styles.arrow}>›</Text>
                    </Pressable>

                    {/* Facebook */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.linkCard,
                            pressed && styles.pressed,
                        ]}
                        onPress={() =>
                            openLink(
                                "https://www.facebook.com/arnob.das.16906",
                            )
                        }
                    >
                        <View style={styles.linkIcon}>
                            <Ionicons
                                name="logo-facebook"
                                size={24}
                                color="#6C4CF1"
                            />
                        </View>

                        <View style={styles.linkContent}>
                            <Text style={styles.linkTitle}>
                                Facebook
                            </Text>

                            <Text style={styles.linkDescription}>
                                Connect on Facebook
                            </Text>
                        </View>

                        <Text style={styles.arrow}>›</Text>
                    </Pressable>

                    {/* Discord */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.linkCard,
                            pressed && styles.pressed,
                        ]}
                        onPress={() =>
                            openLink(
                                "https://discord.com/users/codesilence85",
                            )
                        }
                    >
                        <View style={styles.linkIcon}>
                            <Ionicons
                                name="logo-discord"
                                size={24}
                                color="#6C4CF1"
                            />
                        </View>

                        <View style={styles.linkContent}>
                            <Text style={styles.linkTitle}>
                                Discord
                            </Text>

                            <Text style={styles.linkDescription}>
                                Join or message me on Discord
                            </Text>
                        </View>

                        <Text style={styles.arrow}>›</Text>
                    </Pressable>
                </View>

                <Text style={styles.footer}>
                    Built with curiosity and code.
                </Text>
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
        paddingBottom: 45,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 28,
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

    headerTitle: {
        fontSize: 23,
        fontWeight: "800",
        color: "#17181D",
    },

    profile: {
        alignItems: "center",
        paddingHorizontal: 15,
    },

    avatar: {
        width: 92,
        height: 92,
        borderRadius: 46,
        backgroundColor: "#6C4CF1",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },

    avatarText: {
        fontSize: 36,
        fontWeight: "800",
        color: "#FFFFFF",
    },

    username: {
        fontSize: 25,
        fontWeight: "800",
        color: "#17181D",
    },

    description: {
        marginTop: 9,
        maxWidth: 320,
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        color: "#777A86",
    },

    githubCard: {
        marginTop: 28,
        padding: 17,
        borderRadius: 20,
        backgroundColor: "#17181D",
        flexDirection: "row",
        alignItems: "center",
    },

    githubIcon: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    githubIconText: {
        fontSize: 13,
        fontWeight: "900",
        color: "#17181D",
    },

    githubContent: {
        flex: 1,
        marginLeft: 13,
    },

    githubTitle: {
        fontSize: 15,
        fontWeight: "800",
        color: "#FFFFFF",
    },

    githubText: {
        marginTop: 3,
        fontSize: 12,
        color: "#B9BAC1",
    },

    githubArrow: {
        marginLeft: 10,
        fontSize: 23,
        color: "#FFFFFF",
    },

    sectionTitle: {
        marginTop: 31,
        marginBottom: 12,
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1.2,
        color: "#777A86",
    },

    links: {
        gap: 10,
    },

    linkCard: {
        padding: 14,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
    },

    pressed: {
        opacity: 0.75,
        transform: [{ scale: 0.98 }],
    },

    linkIcon: {
        width: 46,
        height: 46,
        borderRadius: 14,
        backgroundColor: "#EDE9FF",
        alignItems: "center",
        justifyContent: "center",
    },

    linkIconText: {
        fontSize: 14,
        fontWeight: "800",
        color: "#6C4CF1",
    },

    linkContent: {
        flex: 1,
        marginLeft: 12,
    },

    linkTitleRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    linkTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#202127",
    },

    recommended: {
        marginLeft: 7,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 7,
        backgroundColor: "#EDE9FF",
    },

    recommendedText: {
        fontSize: 8,
        fontWeight: "800",
        color: "#6C4CF1",
    },

    linkDescription: {
        marginTop: 3,
        fontSize: 11,
        color: "#858792",
    },

    arrow: {
        marginLeft: 8,
        fontSize: 27,
        color: "#B4B5BC",
    },

    footer: {
        marginTop: 30,
        textAlign: "center",
        fontSize: 11,
        color: "#A0A1A9",
    },
});
