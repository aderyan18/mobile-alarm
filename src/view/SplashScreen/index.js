import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  //   SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StackActions } from "@react-navigation/native";
import { COLOR } from "../../styles/color";
import { SafeAreaView } from "react-native-safe-area-context";

export class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("Login"));
    }, 3000);
  }
  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={require("../../assets/image/bg-mobile.png")}
          style={{
            justifyContent: "center",
            paddingHorizontal: wp(6),
            height: hp(110),
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Logo: {
    // backgroundColor: "#c0c0c0",
    height: hp(25),
    width: wp(40),
    alignSelf: "center",
  },
  Text: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp(3),
  },
});

export default SplashScreen;
