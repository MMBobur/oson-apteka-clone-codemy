import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";

import CheaperPage from "../InnerPages/CheaperPage";
import NearestPage from "../InnerPages/NearestPage";

const RoyhatTab = createMaterialTopTabNavigator();

const RoyhatScreen = () => {
  return (
    // <View>
    //   <Text>This is Royhat Screen</Text>
    //   <AntDesign name="stepforward" size={50} color="red" />
    // </View>
    <RoyhatTab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "#90AAB7",
        labelStyle: {
          marginTop: -4,
          // paddingBottom: 5,
        },
        style: {
          backgroundColor: "#E5E9EC",
          height: 42,
          marginRight: 8,
          marginLeft: 8,
          borderRadius: 10,
          marginTop: 10,
          elevation: 0,
        },
        indicatorContainerStyle: {
          borderColor: "red",
        },
        indicatorStyle: {
          backgroundColor: "white",
          height: 35,
          width: 165,
          marginBottom: 3.5,
          borderRadius: 10,
          marginLeft: 3,
        },
      }}
    >
      <RoyhatTab.Screen name="Aрзонроқ" component={CheaperPage} />
      <RoyhatTab.Screen name="Яқинроқ" component={NearestPage} />
    </RoyhatTab.Navigator>
  );
};

export default RoyhatScreen;
