import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Card } from "react-native-paper";
import OurFlatList from "./app/components/ourFlatList/OurFlatList";
import ConexionFetch from "./app/components/conexionFetch/ConexionFetch";
import Navigation from "./Navigation";

export default function App() {
	return <Navigation />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height: "100vw",
	},
});
