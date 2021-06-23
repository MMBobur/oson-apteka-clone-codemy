import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../components/Search/Search";
import CardItems from "../components/Home/CardItems";
/////////////////////////
import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import DrawerScreen from "../components/Drawer/Drawer";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <DrawerScreen navigation={navigation} />
        <CardItems />
      </View>
    </SafeAreaView>
  );
}

function SearchDrugsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <SearchScreen navigation={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

function Screen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchDrugsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Screen;
