import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StackActions } from "@react-navigation/native";
import { COLOR } from "../../styles/color";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Switch } from "react-native-paper";

export default function Jadwal() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              width: wp(10),
              height: hp(4),
              backgroundColor: COLOR.WHITE,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: wp(2),
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-left" size={hp(4)} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: hp(3),
              color: COLOR.WHITE,
              marginLeft: wp(3),
              fontWeight: "bold",
            }}
          >
            SENIN
          </Text>
        </View>
        <View style={styles.content}>
          <View style={{ marginLeft: wp(3) }}>
            <Text style={{ fontSize: hp(3), color: COLOR.WHITE }}>
              07:30 - 09:10
            </Text>
            <Text style={{ fontSize: hp(2), color: COLOR.THIRD }}>
              Metode Penelitian
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={COLOR.THIRD}
          />
        </View>
        <View style={styles.content}>
          <View style={{ marginLeft: wp(3) }}>
            <Text style={{ fontSize: hp(3), color: COLOR.WHITE }}>
              09:20 - 10:50
            </Text>
            <Text style={{ fontSize: hp(2), color: COLOR.THIRD }}>
              Administrasi Web
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={COLOR.THIRD}
          />
        </View>
        <View style={styles.content}>
          <View style={{ marginLeft: wp(3) }}>
            <Text style={{ fontSize: hp(3), color: COLOR.WHITE }}>
              11:00 - 12:50
            </Text>
            <Text style={{ fontSize: hp(2), color: COLOR.THIRD }}>
              Fuzzy Logic
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={COLOR.THIRD}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    height: hp(8),
    backgroundColor: COLOR.SECONDARYPRIMARY,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: wp(5),
    flexDirection: "row",
  },
  container: {
    width: wp(100),
    height: hp(100),
    backgroundColor: COLOR.PRIMARY,
  },
  content: {
    width: wp(90),
    height: hp(8),
    backgroundColor: "transparent",
    borderWidth: wp(0.3),
    borderColor: COLOR.WHITE,
    alignSelf: "center",
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
