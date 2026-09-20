import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

export type MainTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

const Tab =
  createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#6C4CF1",
        tabBarInactiveTintColor: "#9A9BA4",

        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingTop: 7,
          paddingBottom: insets.bottom + 5,

          backgroundColor: "#FFFFFF",

          borderTopWidth: 1,
          borderTopColor: "#EEEEF2",
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
        },

        tabBarItemStyle: {
          borderRadius: 14,
          marginHorizontal: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              symbol="⌂"
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              symbol="★"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabIcon({
  symbol,
  color,
  focused,
}: {
  symbol: string;
  color: string;
  focused: boolean;
}) {
  return (
    <View
      style={[
        styles.iconContainer,
        focused && styles.activeIconContainer,
      ]}
    >
      <Text
        style={[
          styles.icon,
          {
            color,
          },
        ]}
      >
        {symbol}
      </Text>
    </View>
  );
}

const styles = {
  iconContainer: {
    width: 38,
    height: 30,
    borderRadius: 10,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },

  activeIconContainer: {
    backgroundColor: "#EDE9FF",
  },

  icon: {
    fontSize: 20,
    fontWeight: "700" as const,
  },
};
