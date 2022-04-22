import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import OurFlatList from "../../components/ourFlatList/OurFlatList";
import conexionFetch from "../../components/conexionFetch/ConexionFetch";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect } from "react";

const showAlert = () => {
	console.log("showAlert");
	Alert.alert(
		"Alert Title",
		"My Alert Msg",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{ text: "OK", onPress: () => console.log("OK Pressed") },
		],
		{ cancelable: false }
	);
};

const HomeScreen = ({ navigation }) => {
	const [numero, setNumero] = useState();

	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("HomeDetails")}>
				<Text>Detalles</Text>
			</TouchableOpacity>
			{/* <Text style={styles.title}>HomeScreen</Text>
			<OurFlatList showAlert={showAlert} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height: "100vw",
	},
	title: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#57FC8E",
		padding: 10,
		marginTop: 50,
	},
});

export default HomeScreen;
