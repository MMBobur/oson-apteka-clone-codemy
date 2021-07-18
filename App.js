import React, { useEffect } from "react";
import { Linking, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import {
  Entypo,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./components/Reducer/reducer";

import AboutScreen from "./components/Pages/AboutScreen";
import LanguageScreen from "./components/Pages/LanguageScreen";
import PromoActsiyaScreen from "./components/Pages/PromoActsiya";
import HistoryOfSearchScreen from "./components/Pages/HistoryOfSearchScreen";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          display: "flex",
          alignSelf: "center",
          paddingRight: 50,
        },
        headerStyle: {
          elevation: 1,
        },
      }}
    >
      <Stack.Screen
        name="Иловa ҳақида"
        component={AboutScreen}
        navigation={navigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Entypo
                style={{ paddingLeft: 10 }}
                name="chevron-small-left"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function LanguageStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          display: "flex",
          alignSelf: "center",
          paddingRight: 50,
        },
        headerStyle: {
          elevation: 1,
        },
      }}
    >
      <Stack.Screen
        name="Тилни танлаш"
        component={LanguageScreen}
        navigation={navigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Entypo
                style={{ paddingLeft: 10 }}
                name="chevron-small-left"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function PromoActsiyaStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          display: "flex",
          alignSelf: "center",
          paddingRight: 50,
        },
        headerStyle: {
          elevation: 1,
        },
      }}
    >
      <Stack.Screen
        name="Промо акция тугади"
        component={PromoActsiyaScreen}
        navigation={navigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Entypo
                style={{ paddingLeft: 10 }}
                name="chevron-small-left"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HistoryStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          display: "flex",
          alignSelf: "center",
          paddingRight: 50,
        },
        headerStyle: {
          elevation: 1,
        },
      }}
    >
      <Stack.Screen
        name="Қидирувлар тарихи"
        component={HistoryOfSearchScreen}
        navigation={navigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Entypo
                style={{ paddingLeft: 10 }}
                name="chevron-small-left"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const _pressCall = () => {
  const url = "tel://+998 71 203 6766";
  Linking.openURL(url);
};

const _ommaviyOfferta = () => {
  const url = "https://api.osonapteka.uz/privacy";
  Linking.openURL(url);
};

/////////DrawerText
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Text style={styles.bottomTextDrawerScreen}>"Oson Apteka" LLC</Text>
    </DrawerContentScrollView>
  );
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerContentOptions={{
            labelStyle: {
              color: "black",
              fontSize: 15,
              // paddingLeft: -10,
              marginLeft: -10,
            },
            itemStyle: {
              borderColor: "#98A5A9",
              borderBottomWidth: 0.3,
              paddingTop: 3,
              paddingBottom: 6,
            },
          }}
          drawerPosition="right"
        >
          <Drawer.Screen
            options={{
              drawerIcon: () => (
                <AntDesign
                  style={styles.iconDrawer}
                  name="home"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={HomeScreen}
            name="HomeScreen"
          />
          <Drawer.Screen
            options={{
              swipeEnabled: false,
              drawerIcon: () => (
                <Ionicons
                  style={styles.iconDrawer}
                  name="briefcase-outline"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={AboutStack}
            name="Илова ҳақида"
          />
          <Drawer.Screen
            options={{
              swipeEnabled: false,
              drawerIcon: () => (
                <Ionicons
                  style={styles.iconDrawer}
                  name="ios-language-outline"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={LanguageStack}
            name="Тил"
          />
          <Drawer.Screen
            options={{
              swipeEnabled: false,

              drawerIcon: () => (
                <SimpleLineIcons
                  style={styles.iconDrawer}
                  name="trophy"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={PromoActsiyaStack}
            name="Промо-акция"
          />
          <Drawer.Screen
            options={{
              swipeEnabled: false,

              drawerIcon: () => (
                <AntDesign
                  style={styles.iconDrawer}
                  name="filetext1"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={_ommaviyOfferta}
            name="Оммавий офферта"
          />
          <Drawer.Screen
            options={{
              swipeEnabled: false,

              drawerIcon: () => (
                <MaterialIcons
                  style={styles.iconDrawer}
                  name="history"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={HistoryStack}
            name="Қидирувлар тарихи"
          />
          <Drawer.Screen
            options={{
              drawerIcon: () => (
                <Feather
                  style={styles.iconDrawer}
                  name="phone"
                  size={22}
                  color="#98A5A9"
                />
              ),
            }}
            component={_pressCall}
            name="+998 71 203 6766"
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  iconDrawer: {
    paddingLeft: 10,
  },
  bottomTextDrawerScreen: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 130,
    fontSize: 16,
    color: "#98A5A9",
    fontWeight: "500",
  },
});
