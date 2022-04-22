import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const HomeDetails = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>HomeDetails</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("HomeScreen")}>
				<Text style={styles.text}>HomeScreen</Text>
			</TouchableOpacity>
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
	button: {
		alignItems: "center",
		backgroundColor: "#5775FA",
		padding: 10,
		marginTop: 50,
	},
	text: {
		color: "#F9FAFF",
	},
});

export default HomeDetails;
