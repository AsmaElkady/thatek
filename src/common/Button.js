import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class Buttons extends Component {
  state = {
    firstColorBotton: "white",
    firstColorText: "gray",
    secondColorBotton: "white",
    secondColorText: "gray"
  };
  setSecColor() {
    this.setState({
      secondColorBotton: "green",
      secondColorText: "white",
      firstColorBotton: "white",
      firstColorText: "gray"
    });
  }

  setFirstColor() {
    this.setState({
      firstColorBotton: "green",
      firstColorText: "white",
      secondColorBotton: "white",
      secondColorText: "gray"
    });
  }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: this.state.firstColorBotton }
          ]}
          onPress={() => {
            this.setFirstColor(), this.props.select("ذكر");
          }}
        >
          <Text style={[styles.text, { color: this.state.firstColorText }]}>
            ذكر
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: this.state.secondColorBotton }
          ]}
          onPress={() => {
            this.setSecColor(), this.props.select("أنثى");
          }}
        >
          <Text style={[styles.text, { color: this.state.secondColorText }]}>
            أنثى
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    borderColor: "#CCCCCC",
    borderRadius: 50,
    width: wp("15%"),
    marginLeft: wp("2%"),
    borderWidth: 1
  },
  text: {
    textAlign: "center",
    padding: wp("1.7%")
  }
});
