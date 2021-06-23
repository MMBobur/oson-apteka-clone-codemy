import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { EvilIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import SearchImage from "./SearchImage";
import SearchError from "./SearchError";
import SearchSkeleton from "./SearchSkeleton";
// import NumberFormat from "react-number-format";

export default function Search({ navigation }) {
  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // var NumberFormat = require("react-number-format");
  const handleSearch = (e) => {
    setDrugs([]);
    if (e.length >= 3) {
      axios
        .get(
          `https://api.osonapteka.uz/api/v1/drugs?page=1&per_page=20&search=${e}&region=21&lan=ru`
        )
        .then((res) => {
          setDrugs(res.data.results);
        });
    }
    setSearch(e);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.SearchBarComponent}>
        <SearchBar
          placeholder="Дори кидириш"
          onChangeText={(e) => handleSearch(e)}
          value={search}
          round={true}
          returnKeyType="search"
          autoCapitalize="none"
          placeholderTextColor="#91AAB8"
          clearIcon={true}
          searchIcon={() => (
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <EvilIcons name="chevron-left" size={32} color="#91AAB8" />
            </TouchableOpacity>
          )}
          containerStyle={{
            backgroundColor: "#3872D3",
            width: "95%",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: "white",
          }}
          inputStyle={{
            borderWidth: 0,
            color: "black",
          }}
        />
      </View>
      {/* {!search ? (
        <SearchError />
      ) : ( */}
      <>
        {search.length < 3 ? (
          <SearchImage />
        ) : (
          <View>
            {search.length >= 3 ? (
              <>
                {/* <SearchSkeleton /> */}
                <Text style={styles.Natijalar}>Натижалар {search}</Text>
              </>
            ) : (
              <></>
            )}
            <View style={{ height: "85%" }}>
              <View style={{ height: Dimensions.get("window").height * 0 }} />
              <FlatList
                showsVerticalScrollIndicator={false}
                data={drugs}
                style={{ flex: 1 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity>
                      <View>
                        <View style={styles.search_item}>
                          <Text style={styles.searched_drug_full_name}>
                            {item.full_name}
                          </Text>
                          <Text style={styles.searched_drug_manufacturer_name}>
                            {item.manufacturer.name}
                          </Text>
                        </View>
                        <View style={styles.searched_drug_container}>
                          <Text style={styles.searched_drug_price}>
                            {item.price}
                          </Text>
                          {/* <NumberFormat
                          value={item.price}
                          thousandSeparator={true}
                          prefix={"#### #### #### ####"}
                        /> */}
                          <Text style={styles.searched_drug_price_dan}>
                            дан
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        )}
      </>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBarComponent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3872D3",
    paddingTop: 25,
    paddingBottom: 10,
  },
  search_item: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e4eb",
    paddingLeft: 16,
    paddingBottom: 10,
  },
  Natijalar: {
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 10,
  },
  searched_drug_container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: -25,
  },
  searched_drug_price: {
    fontSize: 12,
    color: "#3873D3",
  },
  searched_drug_price_dan: {
    fontSize: 12,
    paddingLeft: 5,
  },
  searched_drug_full_name: {
    fontSize: 14,
    paddingBottom: 3,
    paddingTop: 15,
    color: "#2C2C2C",
  },
  searched_drug_manufacturer_name: {
    fontSize: 12,
    paddingBottom: 10,
    color: "#91AAB8",
    paddingTop: 8,
  },
});
