import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//screens
import HomeScreen from "./app/pages/Home/HomeScreen";
import HomeDetails from "./app/pages/Home/HomeDetails";

//Home Stack

const HomeStackNavigator = createNativeStackNavigator();
const HomeStack = () => {
	return (
		<HomeStackNavigator.Navigator initialRouteName="HomeScreen">
			<HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
			<HomeStackNavigator.Screen name="HomeDetails" component={HomeDetails} />
		</HomeStackNavigator.Navigator>
	);
};

//Tab
const Tab = createBottomTabNavigator();

const MyTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{ tabBarActiveTintColor: "purple" }}>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="cat" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Pagina2"
				component={HomeStack}
				options={{
					tabBarLabel: "Pagina 2",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="cat" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Pagina3"
				component={HomeStack}
				options={{
					tabBarLabel: "Pagina 3",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="cat" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Navegation = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default Navegation;
