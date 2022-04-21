import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";

const Item = ({ title, image }) => {
	return (
		<View style={styles.item}>
			<Image source={{ uri: image }} style={{ height: 40, width: 40 }} />
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
		"X-RapidAPI-Key": "8d858cf0a2msh33bca5adb9ce37dp156faejsnae7375738007",
	},
};

export default class conexionFetch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textValues: 0,
			coutn: 0,
			items: [],
			error: null,
		};
	}

	async componentDidMount() {
		await fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
			.then((response) => response.json())
			.then(
				(result) => {
					//console.warn("result -->", result.results);
					this.setState({
						items: result.results,
					});
				},
				(error) => {
					this.setState({
						error: error,
					});
				}
			)
			.catch((err) => console.error(err));
	}
	render() {
		console.log(this.state.items);
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.items.length > 0 ? this.state.items : []}
					renderItem={({ item }) => (
						<Item title={item.title} image={item.image} />
					)}
					keyExtractor={(item) => item._id}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	item: {
		backgroundColor: "rgba(185, 71, 253, 0.29)",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
