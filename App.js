import * as React from "react";
import { Button, View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./components/Search/Search";
import HomeHeaderComponent from "./components/Home/HomeHeaderComponent";
import CardItems from "./components/Home/CardItems";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <StatusBar
          backgroundColor="#3872D3"
          barStyle="dark-content"
          hidden={false}
        />
        <HomeHeaderComponent navigation={navigation} />
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchDrugsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
