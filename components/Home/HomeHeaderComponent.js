import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { EvilIcons, Feather } from "@expo/vector-icons";

import { ScrollView } from "react-native";

function HomeHeaderComponent({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.HomeContainer}>
        <View style={styles.FirstHomeContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.SearchTextHomeContainer}>Кидирувни бошлаш</Text>
            <TouchableOpacity
              style={{
                justifyContent: "flex-end",
              }}
            >
              <EvilIcons name="navicon" size={34} color="white" />
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
    </ScrollView>
  );
}

export default HomeHeaderComponent;

const styles = StyleSheet.create({
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
    color: "#fff",
    fontSize: 25,
    paddingLeft: 15,
    paddingTop: 15,
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
    paddingTop: 15,
  },
});
