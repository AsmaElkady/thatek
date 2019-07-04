import React from "react";
import { StyleSheet, Text, Platform, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Label = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.title}</Text>
      {props.icon ? (
        <Icon name="question-circle-o" size={hp("3%")} style={styles.icon} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#272727",
    textAlign: "right",
    marginRight: wp("4%"),
    marginLeft: wp("2%")
  },
  view: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: wp("2.4%"),
    marginTop: wp("3.5%")
  },
  icon: {
    color: "#BFB562"
  }
});

export default Label;
