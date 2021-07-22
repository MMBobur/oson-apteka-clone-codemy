import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome, Feather } from "@expo/vector-icons";

import RoyhatScreen from "../../components/Arzonroq_Yaqinroq/RoyhatScreen";
import MapScreen from "../../components/Arzonroq_Yaqinroq/MapScreen";
import TopBarSection from "../../components/Arzonroq_Yaqinroq/TopBarSection";

const Tab = createMaterialTopTabNavigator();

export default function TabPage() {
  return (
    // <NavigationContainer>
    <>
      <TopBarSection />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { marginLeft: 25 },
          showIcon: true,
          // contentContainerStyle: {
          //   borderBottomWidth: 10,
          // },
          activeTintColor: "black",
          inactiveTintColor: "#90AAB7",
          style: {
            // height: 70,
            // marginTop: -20,
            elevation: 0,
          },
          contentContainerStyle: {
            marginTop: -25,
            borderWidth: 2,
            borderColor: "red",
          },
          indicatorStyle: {
            height: 1,
          },
          tabStyle: {
            // width: 50,
            // borderBottomWidth: 1,
            // elevation: 1,
          },
          // indicatorContainerStyle: {
          //   width: 50,
          // },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                style={styles.RoyhatIcon}
                name="list-alt"
                size={15}
                color={focused ? "#3772D0" : "#90AAB7"}
              />
            ),
          }}
          name="Рўйҳат"
          component={RoyhatScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                style={styles.XaritadaIcon}
                name="map"
                size={14}
                color={focused ? "#3772D0" : "#90AAB7"}
              />
            ),
          }}
          name="Харитада"
          component={MapScreen}
        />
      </Tab.Navigator>
    </>
    // {/* </NavigationContainer> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  RoyhatIcon: {
    marginTop: 32,
    right: 23,
    // paddingRight: 20,
  },
  XaritadaIcon: {
    marginTop: 32,
    right: 30,
  },
});
