import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function SearchImage() {
  return (
    <View style={styles.image_placeholder_container}>
      <Image
        source={require("../../assets/aptekaEmptySearch.png")}
        style={styles.image_placeholder}
      />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={styles.image_placeholder_text}>
          Дори номини кидириш{"\n"}
        </Text>
        <Text style={styles.image_placeholder_text_2}>
          Кидирув сатрида керакли
        </Text>
        <Text style={styles.image_placeholder_text_3}>
          махсулот еки дори номини
        </Text>
        <Text style={styles.image_placeholder_text_4}>киритинг</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image_placeholder_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  image_placeholder: {
    width: 150,
    height: 113,
    alignSelf: "center",
  },
  image_placeholder_text: {
    color: "#3C3C3C",
    marginTop: 5,
    fontSize: 17,
  },
  image_placeholder_text_2: {
    color: "#91AAB8",
    fontSize: 15,
    marginTop: -3,
  },
  image_placeholder_text_3: {
    color: "#91AAB8",
    marginTop: 3,
    fontSize: 15,
  },
  image_placeholder_text_4: {
    color: "#91AAB8",
    marginTop: 3,
    fontSize: 15,
  },
});
