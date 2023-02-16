import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FeedbackScreen } from "../screens/FeedbackScreen";

const Stack = createStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="HomeNavigation"
                component={TabNavigation}
                options={{
                    headerShown: false,
                    title: "Tela do aplicativo",
                }}
            />

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    title: "Tela Inicial",
                }}
            />
            <Stack.Screen
                name="FeedbackScreen"
                component={FeedbackScreen}
                options={{
                    headerShown: true,
                    title: "Tela de Feedback",
                }}
            />

        </Stack.Navigator>
    );
};


const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={{
                    tabBarLabel: "Feedback",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="opnion" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};