import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput
} from "react-native";
import Material from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class DropDown extends Component {
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.press(item.category),
            this.setState({
              heightModal: 0,
              radius: 50,
              colorModal: "#CCCCCC",
              borderModal: 0
            });
        }}
      >
        <Text style={styles.item}>{item.category}</Text>
      </TouchableOpacity>
    );
  };
  state = {
    item: "",
    heightModal: 0,
    colorModal: "#CCCCCC",
    borderModal: 0,
    radius: 50
  };
  render() {
    console.log(this.props.data);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              heightModal: this.state.heightModal ? 0 : 120,
              colorModal:
                this.state.colorModal == "#CCCCCC" ? "green" : "#CCCCCC",
              borderModal: this.state.borderModal ? 0 : 1,
              radius: this.state.heightModal ? 50 : 5
            });
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              borderWidth: 1,
              borderRadius: this.state.radius,
              borderColor: this.state.colorModal,
              paddingHorizontal: wp("2%"),
              alignItems: "center",
              paddingVertical: hp("2%"),
              height: hp("6%")
            }}
          >
            {this.props.value ? (
              <Text style={styles.title}>{this.props.value}</Text>
            ) : (
              <Text style={styles.title}>اختار من هنا</Text>
            )}

            <Material
              name="keyboard-arrow-down"
              size={20}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        {this.props.loading ? null : (
          <View
            transition="height"
            style={{
              paddingHorizontal: wp("2%"),
              right: 0,
              left: 0,
              height: this.state.heightModal,
              borderRadius: 7,
              position: "absolute",
              backgroundColor: "white",
              borderWidth: this.state.borderModal,
              borderColor: "green",
              zIndex: 1,
              marginTop: hp("6%"),
              flex: 1
            }}
          >
            <TextInput
              style={[styles.Input, { borderWidth: this.state.borderModal }]}
              placeholder={this.props.placeholder}
              placeholderTextColor="#9E9E9D"
              keyboardType={this.props.keyboardType}
              onChangeText={this.props.change}
            />
            <FlatList data={this.props.data} renderItem={this.renderItem} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "right",
    padding: wp("1%"),

    paddingRight: wp("3%")
  },
  icon: {
    paddingRight: wp("4%"),
    flex: 1,
    color: "#CCCCCC"
  },
  Input: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingRight: 12,
    borderColor: "green",
    borderWidth: 1,
    width: "95%",
    margin: 6,
    textAlign: "right",
    paddingVertical: -10
  },
  item: {
    paddingLeft: wp("2%"),
    paddingVertical: hp("1%"),
    fontSize: hp("2%")
  }
});
