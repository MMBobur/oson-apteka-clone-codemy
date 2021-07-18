import React from "react";
import SearchScreen from "../components/Search/Search";
import CardItems from "../components/Home/CardItems";
import Region from "../components/Region/Region";
import HomePage from "../components/Home/Home";
import BarCode_Scanner from "../components/Home/BarCode";
import ChosenProducts from "../components/Pages/ChosenProducts";
import Tavsif from "../components/Tavsif/Tavsif";
import DrugInfo from "../components/DoriHaqida/DrugInfo";
import { View, SafeAreaView, TouchableHighlight, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { withDecay } from "react-native-reanimated";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <HomePage navigation={navigation} />
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

function RegionScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Region navigation={navigation} />
    </View>
  );
}

function DrugInfoScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <DrugInfo navigation={navigation} />
    </View>
  );
}

function TanlanganMahsulotlar({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ChosenProducts navigation={navigation} />
    </View>
  );
}

function Scanner_Bar_Code({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <BarCode_Scanner navigation={navigation} />
    </View>
  );
}

function TavsifPage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Tavsif navigation={navigation} />
    </View>
  );
}

function HeaderLeftIcon() {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <Entypo
      style={{ paddingLeft: 10 }}
      name="chevron-small-left"
      size={30}
      color="black"
      onPress={navigateToHome}
    />
  );
}

const Stack = createStackNavigator();

function Screen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 1,
        },
        headerTitleStyle: {
          alignSelf: "center",
          paddingRight: 50,
        },
      }}
    >
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
      <Stack.Screen
        name="BarCode"
        component={Scanner_Bar_Code}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Танланган Mахсулотлар"
        component={TanlanganMahsulotlar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Туманни танланг"
        component={RegionScreen}
        options={{
          headerLeft: () => (
            <TouchableHighlight>
              <HeaderLeftIcon />
            </TouchableHighlight>
          ),
        }}
      />
      <Stack.Screen
        name="DrugInfoScreen"
        component={DrugInfoScreen}
        options={{
          headerLeft: () => (
            <TouchableHighlight>
              <HeaderLeftIcon />
            </TouchableHighlight>
          ),
          // headerShown: false,
          // headerBackground: () => (
          //   <Image
          //     style={{
          //       width: 150,
          //       height: 80,
          //       resizeMode: "center",
          //     }}
          //     source={{
          //       uri: "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
          //     }}
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="Тавсиф"
        component={TavsifPage}
        options={{
          headerLeft: () => (
            <TouchableHighlight>
              <HeaderLeftIcon />
            </TouchableHighlight>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Screen;
