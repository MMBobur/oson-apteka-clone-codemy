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

function CardItems() {
  var currencyFormatter = require("currency-formatter");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.osonapteka.uz/api/v1/history?region=21&lan=ru")
      .then((res) => {
        const fullItem = res.data;
        setProducts(fullItem);
      });
  }, [setProducts]);

  function formatNumber(number) {
    number = Math.round(number);
    console.log(number);
    return currencyFormatter.format(number, { code: "" });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.CardContainer}>
          <Text style={styles.SearchText}>Оммабоп кидирувлар</Text>
        </View>
        <View>
          <>
            {products.map((items, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.Card}>
                  <TouchableHighlight>
                    <Image
                      source={{
                        uri: items.image,
                      }}
                      style={styles.cardImage}
                    />
                  </TouchableHighlight>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      paddingLeft: 15,
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{items.name}</Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          color: "#2C517A",
                          paddingRight: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {formatNumber(items.price)} сўм
                        {/* {items.price}  */}
                      </Text>
                      <Text>дан</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    color: "#232323",
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
  cardImage: {
    width: 80,
    height: 70,
    borderRadius: 10,
  },
});
