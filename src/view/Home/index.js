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
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StackActions } from "@react-navigation/native";
import { COLOR } from "../../styles/color";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: hp(3), color: COLOR.THIRD }}>
            ALARM KAMPUS
          </Text>
        </View>
        {/* content hari start */}
        {/* SENIN START */}
        <TouchableOpacity
          style={styles.content}
          onPress={() => {
            navigation.navigate("Jadwal");
          }}
        >
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>SENIN</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* SENIN END */}

        {/* SELASA START */}
        <TouchableOpacity style={styles.content}>
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>SELASA</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* SELASA END */}

        {/* RABU START */}
        <TouchableOpacity style={styles.content}>
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>RABU</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* RABU END */}

        {/* KAMIS START */}
        <TouchableOpacity style={styles.content}>
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>KAMIS</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* KAMIS END */}

        {/* JUMAT START */}
        <TouchableOpacity style={styles.content}>
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>JUMAT</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* JUMAT END */}

        {/* SABTU START */}
        <TouchableOpacity style={styles.content}>
          <Text style={{ color: COLOR.WHITE, marginLeft: wp(3) }}>SABTU</Text>
          <Icon
            name="angle-right"
            color={COLOR.WHITE}
            size={wp(7)}
            style={{ marginRight: wp(5) }}
          />
        </TouchableOpacity>
        {/* SABTU END */}

        {/* content hari end */}

        {/* Setting Button start */}

        <TouchableOpacity
          style={styles.setting}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Icon name="gear" color={COLOR.WHITE} size={wp(10)} />
        </TouchableOpacity>

        {/* Setting Button end */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    height: hp(8),
    backgroundColor: COLOR.SECONDARYPRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: wp(100),
    height: hp(100),
    backgroundColor: COLOR.PRIMARY,
  },
  content: {
    width: wp(100),
    height: hp(8),
    justifyContent: "space-between",
    borderBottomWidth: wp(0.5),
    borderBottomColor: "#C0C0C0",
    marginTop: hp(2),
    flexDirection: "row",
    alignItems: "center",
  },
  setting: {
    width: wp(12),
    height: hp(6),
    backgroundColor: COLOR.THIRD,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(7),
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: hp(20),
    marginRight: wp(5),
  },
});

export default Home;
