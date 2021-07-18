import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../Actions/actions";
import { CartContext } from "../Cart/cart";
import CartItem from "../Cart/CartItem";
import Home from "../Home/Home";
import CardItems from "../Home/CardItems";

const ChosenProducts = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <>
        <Home />
        <CardItems />
      </>
    );
  }
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Home />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "#212121",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        Танланган махсулотлар
      </Text>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </View>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}

export default connect(mapStateToProps)(ChosenProducts);

const styles = StyleSheet.create({});
