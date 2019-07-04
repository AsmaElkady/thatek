import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Submit = props => {
  return (
    <TouchableOpacity style={styles.main} onPress={props.press}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: wp("35%"),
    marginLeft: wp("2%"),
    marginTop: hp("3%"),
    alignSelf: "center",
    backgroundColor: "green"
  },
  text: {
    textAlign: "center",
    padding: wp("1.7%"),
    paddingVertical: hp("2%"),
    color: "white",
    fontWeight: "bold"
  }
});

export default Submit;
