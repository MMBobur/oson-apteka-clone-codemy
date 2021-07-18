import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  TOGGLE_AMOUNT,
  removeItem,
  addToCart,
} from "../Actions/actions";
// import { CartContext } from "../Cart/cart";
// import { AsyncStorage } from "react-native-asyncstorage";
// import axios from "axios";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
  toggle,
}) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      {/* {list.map((l, i) => ( */}
      <TouchableOpacity>
        <ListItem bottomDivider>
          <TouchableOpacity>
            <Avatar
              source={{
                // uri: l.avatar_url,
                uri: img,
              }}
              style={styles.ListImage}
            />
          </TouchableOpacity>
          <ListItem.Content>
            <ListItem.Title>{title}</ListItem.Title>
            {/* <ListItem.Subtitle style={styles.ListSubtitle}>
                {l.manufacturer_name}
              </ListItem.Subtitle> */}
            <ListItem.Subtitle style={styles.ListPrice}>
              {price}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Subtitle>
            <Button
              icon={<AntDesign name="minus" size={14} color="black" />}
              type="outline"
              buttonStyle={{ borderColor: "#A1A4A6" }}
              onPress={() => {
                if (amount === 1) {
                  return remove();
                } else {
                  return toggle("dec");
                }
              }}
            />
            {"  "}
            <Text style={{ color: "black", marginBottom: 20 }}>{amount}</Text>
            {"  "}
            {/* {``} */}
            <Button
              icon={<AntDesign name="plus" size={14} color="black" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#FCCF1B",
                borderColor: "#FCCF1B",
              }}
              onPress={() => toggle("inc")}
            />
          </ListItem.Subtitle>
        </ListItem>
      </TouchableOpacity>
      {/* ))} */}
    </View>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

const styles = StyleSheet.create({
  ListSubtitle: {
    color: "#91AAB8",
    paddingTop: 5,
  },
  ListImage: {
    width: 60,
    height: 50,
    marginLeft: -8,
    marginRight: -10,
  },
  ListPrice: {
    color: "#3873D3",
    paddingTop: 5,
  },
  item_title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#212121",
  },
  // item_amount: {
  //   // textAlign: "center",
  //   marginBottom: 20,
  //   // marginLeft: 20,
  //   color: "black",
  //   paddingBottom: 50,
  //   // justifyContent: "center",
  // },
});
