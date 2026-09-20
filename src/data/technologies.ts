export type Technology = {
    id: string;
    name: string;
    description: string;
    color: string;
    icon: string;
};

export const technologies: Technology[] = [
    {
        id: "git",
        name: "Git",
        description: "Version control commands",
        color: "#F05032",
        icon: "Git",
    },
    {
        id: "github",
        name: "GitHub",
        description: "GitHub and repository commands",
        color: "#24292F",
        icon: "GH",
    },
    {
        id: "flutter",
        name: "Flutter",
        description: "Flutter & Dart commands",
        color: "#02569B",
        icon: "F",
    },
    {
        id: "react-native",
        name: "React Native",
        description: "React Native & Expo commands",
        color: "#61DAFB",
        icon: "⚛",
    },
];

