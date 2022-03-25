import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../view/SplashScreen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Login from "../../view/Auth/Login";
import Home from "../../view/Home";
import Jadwal from "../../view/Jadwal";
import Setting from "../../view/Setting";

const Stack = createStackNavigator();

const NavigationRoutes = () => {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Jadwal" component={Jadwal} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default NavigationRoutes;

const styles = StyleSheet.create({});
