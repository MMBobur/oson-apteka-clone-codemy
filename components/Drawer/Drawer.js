import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import HamburgerIcon from "../../assets/menu.png";

function Drawer({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.HomeContainer}>
          <View style={styles.FirstHomeContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.SearchTextHomeContainer}>
                Кидирувни бошлаш
              </Text>
              <TouchableOpacity
                style={{ display: "flex", alignItems: "flex-end", margin: 16 }}
                onPress={() => navigation.openDrawer()}
              >
                <Image
                  style={{
                    marginTop: 22,
                    width: 30,
                    height: 40,
                    marginLeft: 50,
                    tintColor: "white",
                  }}
                  source={HamburgerIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight>
                <Text style={styles.Xudud}>
                  Туманни танланг{" "}
                  <AntDesign name="right" size={10} color="#fff" />
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.SearchCode}>
              <TouchableHighlight
                underlayColor="none"
                onPress={() => navigation.navigate("Search")}
                style={{ width: "95%" }}
              >
                <SearchBar
                  placeholder="Дори кидириш"
                  round={true}
                  showSoftInputOnFocus={false}
                  returnKeyType="search"
                  autoCapitalize="none"
                  placeholderTextColor="#91AAB8"
                  searchIcon={() => (
                    <Feather name="search" size={22} color="#91AAB8" />
                  )}
                  containerStyle={{
                    backgroundColor: "#3872D3",
                    width: "85%",
                    borderBottomColor: "transparent",
                    borderTopColor: "transparent",
                  }}
                  inputContainerStyle={{
                    backgroundColor: "white",
                  }}
                  inputStyle={{
                    borderWidth: 0,
                  }}
                />
              </TouchableHighlight>
              <TouchableOpacity style={styles.qrCode}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color="#91AAB8"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <HomeHeaderComponents /> */}
        {/* </SafeAreaView> */}
      </View>
    </ScrollView>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
  HomeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  SearchCode: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  FirstHomeContainer: {
    backgroundColor: "#3872D3",
    width: "100%",
  },
  SearchTextHomeContainer: {
    marginTop: 20,
    color: "#fff",
    fontSize: 25,
    paddingLeft: 15,
    paddingTop: 15,
    // marginBottom: 10,
  },
  qrCode: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginLeft: -55,
    alignItems: "center",
    justifyContent: "center",
  },
  search_icon_box: {
    width: "80%",
    height: 50,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Xudud: {
    color: "#fff",
    fontSize: 15,
    paddingLeft: 16,
    marginTop: -15,
  },
});
