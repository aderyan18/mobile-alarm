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
import { Switch, TextInput } from "react-native-paper";

export default function AddCatatan() {
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
            TAMBAH CATATAN
          </Text>
        </View>
        <TouchableOpacity style={styles.content}>
          <View style={{ marginLeft: wp(3) }}>
            <TextInput />
          </View>
        </TouchableOpacity>
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
    height: hp(25),
    backgroundColor: "transparent",
    borderWidth: wp(0.3),
    borderColor: COLOR.WHITE,
    alignSelf: "center",
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
