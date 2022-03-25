import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StackActions } from "@react-navigation/native";
import { COLOR } from "../../../styles/color";
import { TextInput } from "react-native-paper";

export default function Login() {
  const [pass, setPass] = useState("");
  const [icon, setIcon] = useState({
    icon: "eye",
    status: true,
  });
  const showPass = () => {
    if (icon.icon == "eye") {
      setIcon({
        ...icon,
        icon: "eye-off",
        status: false,
      });
    } else {
      setIcon({
        ...icon,
        icon: "eye",
        status: true,
      });
    }
  };
  const cekNull = (e) => {
    if (e == "") {
      return true;
    }
  };
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/image/Login.png")}
          style={{
            justifyContent: "center",
            paddingHorizontal: wp(6),
            height: hp(106),
            // marginBottom: hp(50),
            alignItems: "center",
          }}
        >
          {/* text input start */}
          <View
            style={{
              width: wp(85),
              paddingVertical: hp(2),
              //   marginTop: hp(10),
            }}
          >
            <TextInput
              //   onChangeText={(text) => setNik(text)}
              placeholder="Masukkan Nama"
              underlineColor="transparent"
              placeholderTextColor={COLOR.WHITE}
              theme={{ colors: { primary: COLOR.WHITE } }}
              style={styles.textInput}
            />
            <TextInput
              //   onChangeText={(text) => setNik(text)}
              placeholder="Masukkan Nomor Stambuk"
              underlineColor="transparent"
              keyboardType="numeric"
              placeholderTextColor={COLOR.WHITE}
              theme={{ colors: { primary: COLOR.WHITE } }}
              style={styles.textInput}
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry={icon.status}
              placeholderTextColor={COLOR.WHITE}
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeholder="Password"
              selectionColor="#fff"
              theme={{ colors: { primary: COLOR.WHITE } }}
              mode="flat"
              style={styles.textInput}
              right={
                <TextInput.Icon
                  name={icon.icon}
                  color={COLOR.WHITE}
                  onPress={showPass}
                />
              }
            />
          </View>
          {/* text input end */}
          {/* button submit start */}
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: hp(2),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              MASUK
            </Text>
          </TouchableOpacity>
          {/* button submit end */}
          {/* FOOTER START */}
          <Text
            style={{
              color: COLOR.WHITE,
              position: "absolute",
              bottom: hp(2),
              fontSize: hp(1.5),
            }}
          >
            Powered by Dipanegara Computer Club
          </Text>
          {/* FOOTER END */}
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: hp(7),
    borderWidth: hp(0.1),
    borderRadius: hp(1),
    paddingHorizontal: wp(2),
    fontSize: hp(2.5),
    marginBottom: hp(2),
    borderColor: COLOR.WHITE,
    backgroundColor: COLOR.SECONDARYPRIMARY,
  },
  button: {
    width: wp(55),
    height: hp(6),
    backgroundColor: COLOR.SECONDARYPRIMARY,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp(0.5),
    borderColor: COLOR.THIRD,
    borderRadius: wp(1),
  },
});
