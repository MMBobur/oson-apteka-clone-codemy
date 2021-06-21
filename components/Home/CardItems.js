import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { FlatList } from "react-native";
function CardItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.osonapteka.uz/api/v1/history?region=21&lan=ru")
      .then((res) => {
        const fullItem = res.data;
        setProducts(fullItem);
      });
  }, [setProducts]);

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.CardContainer}>
          <Text style={styles.SearchText}>Оммабоп кидирувлар</Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
      data={products}
      style={{ height: 446, marginBottom: 80 }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View style={styles.Card}>
              <TouchableOpacity style={styles.cardImageContainer}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <View style={styles.cardNamePriceContainer}>
                <Text style={{ fontSize: 18, color: "#333333" }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#3873D3",
                      paddingRight: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.price} сўм
                  </Text>
                  <Text>дан</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(items) => items.id.toString()}
    />
  );
}

export default CardItems;

const styles = StyleSheet.create({
  CardContainer: {
    margin: 15,
  },
  SearchText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#212121",
  },
  Card: {
    backgroundColor: "#F1F5F8",
    marginHorizontal: 15,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  cardImageContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: 60,
    height: 50,
  },
  cardNamePriceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 15,
  },
});
