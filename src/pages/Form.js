import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Alert
} from "react-native";
import Label from "../common/Label";
import Button from "../common/Button";
import Submit from "../common/Submit";
import DropDown from "../common/DropDown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { getCountries } from "../Actions/GetCountriesAction";
import { getReligion } from "../Actions/GetReligionAction";
import { getYears } from "../Actions/GetYearsAction";
import {
  selectCountry,
  selectGender,
  selectReligion,
  selectYear
} from "../Actions/SelectActions";
import { connect } from "react-redux";

class Form extends Component {
  componentWillMount() {
    this.props.getCountries();
    this.props.getReligion();
    this.props.getYears();
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>خصص اختبارك في ثواني !</Text>
            <Text style={styles.text}>
              قم بتعبئة البيانات لكي تحصل على محتوى متخصص يناسبك
            </Text>
            <Label title="الجنس" />
            <Button select={gender => this.props.selectGender(gender)} />

            <Label title="سنة الميلاد" icon />
            {this.props.loadingYears ? (
              <ActivityIndicator
                size="small"
                color="#BFB562"
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            ) : (
              <DropDown
                data={this.props.dataYears}
                press={year => this.props.selectYear(year)}
                value={this.props.year}
              />
            )}

            <Label title="البلد" icon />
            {this.props.loadingCountries ? (
              <ActivityIndicator
                size="small"
                color="#BFB562"
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            ) : (
              <DropDown
                data={this.props.dataCountries}
                press={country => this.props.selectCountry(country)}
                value={this.props.country}
              />
            )}

            <Label title="المعتقد" icon />
            {this.props.loadingReligion ? (
              <ActivityIndicator
                size="small"
                color="#BFB562"
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            ) : (
              <DropDown
                data={this.props.dataReligion}
                press={religion => this.props.selectReligion(religion)}
                value={this.props.religion}
              />
            )}

            <Text style={[styles.text, { textAlign: "right" }]}>
              اختيار الديانة بعناية يُبعِد عنك الأسئلة والنصائح التي لا تناسب
              معتقداتك الدينية
            </Text>
            <Submit title="ابدأ الاختبار" />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  yearsRed,
  countriesRed,
  religionRed,
  selectRed
}) => {
  const { dataYears, loadingYears, errorYears } = yearsRed;
  const { dataCountries, loadingCountries, errorCountries } = countriesRed;
  const { dataReligion, loadingReligion, errorReligion } = religionRed;
  const { year, country, religion, gender } = selectRed;

  return {
    dataYears,
    loadingYears,
    errorYears,
    dataCountries,
    loadingCountries,
    errorCountries,
    dataReligion,
    loadingReligion,
    errorReligion,
    year,
    country,
    religion,
    gender
  };
};

export default connect(
  mapStateToProps,
  {
    getCountries,
    getReligion,
    getYears,
    selectCountry,
    selectGender,
    selectReligion,
    selectYear
  }
)(Form);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    margin: wp("4%")
  },
  content: {
    backgroundColor: "white",
    elevation: 3,
    flex: 1,
    justifyContent: "center",
    padding: wp("3%")
  },
  title: {
    color: "green",
    fontWeight: "bold",
    fontSize: hp("3%"),
    textAlign: "center"
  },
  text: {
    color: "#272727",
    fontSize: hp("2.2%"),
    textAlign: "center",
    marginTop: hp("3%"),
    marginBottom: hp("2%")
  }
});
