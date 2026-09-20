import {
    NavigationContainer,
} from "@react-navigation/native";
import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import MainTabs from "./MainTabs";

import CommandListScreen from "../screens/CommandListScreen";
import CommandDetailsScreen from "../screens/CommandDetailsScreen";
import AboutDeveloperScreen from "../screens/AboutDeveloperScreen";

export type RootStackParamList = {
    MainTabs: undefined;
    AboutDeveloper: undefined;

    CommandList: {
        technologyId: string;
        technologyName: string;
        color: string;
    };

    CommandDetails: {
        commandId: string;
        technologyName: string;
        color: string;
    };
};

const Stack =
    createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="MainTabs"
                    component={MainTabs}
                />

                <Stack.Screen
                    name="CommandList"
                    component={CommandListScreen}
                />

                <Stack.Screen
                    name="CommandDetails"
                    component={CommandDetailsScreen}
                />
                <Stack.Screen
                    name="AboutDeveloper"
                    component={AboutDeveloperScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
