// import React, { useState, useEffect } from "react";

// import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
// import { SearchBar } from "react-native-elements";
// import { data } from "../api/data";

// const HomeHeaderComponent = () => {
//   const [search, setSearch] = useState("");
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : "".toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({ item }) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//         {item.id}
//         {"."}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: "100%",
//           backgroundColor: "#C8C8C8",
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     // Function for click on an item
//     alert("Id : " + item.id + " Title : " + item.title);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <SearchBar
//           round
//           searchIcon={{ size: 24 }}
//           onChangeText={(text) => searchFilterFunction(text)}
//           onClear={(text) => searchFilterFunction("")}
//           placeholder="Type Here..."
//           value={search}
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });

// export default HomeHeaderComponent;

import React from "react";
import { SearchBar } from "react-native-elements";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, TouchableHighlight } from "react-native";

export default class Home extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SafeAreaView>
        <View style={styles.HomeContainer}>
          <View style={styles.FirstHomeContainer}>
            <Text style={styles.SearchTextHomeContainer}>Кидирувни бошлаш</Text>
            <Text style={styles.Xudud}>
              Худуд:{" "}
              <TouchableHighlight>
                <Text>
                  Узбекистон буйлаб{" "}
                  <AntDesign name="right" size={10} color="#fff" />
                </Text>
              </TouchableHighlight>
            </Text>
            <View style={styles.SearchCode}>
              <SearchBar
                placeholder="Дори кидириш"
                onChangeText={this.updateSearch}
                value={search}
                round={true}
                containerStyle={{
                  backgroundColor: "#3872D3",
                  border: "none",
                  width: "80%",
                }}
                inputContainerStyle={{ backgroundColor: "white" }}
                inputStyle={{
                  outline: "none",
                }}
              />
              <TouchableOpacity style={styles.qrCode}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
    alignItems: "center",
    justifyContent: "center",
  },
  Xudud: {
    color: "#fff",
    fontSize: 15,
    paddingLeft: 16,
    paddingTop: 15,
  },
});
