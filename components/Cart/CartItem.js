import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
// import { CartContext } from "../Cart/cart";
// import { AsyncStorage } from "react-native-asyncstorage";
// import axios from "axios";

const CartItem = ({
  id,
  image_thumbnail,
  full_name,
  price,
  amount,
  remove,
  // manufacturer: { name },
  increase,
  decrease,
  toggle,
}) => {
  const navigation = useNavigation();
  return (
    <SwipeListView
      renderItem={() => {
        <View>
          <ScrollView>
            {/* {list.map((l, i) => ( */}
            <TouchableHighlight
              onPress={() => navigation.navigate("DrugInfoScreen")}
              underlayColor="none"
            >
              <ListItem bottomDivider key={id}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Тавсиф")}
                  underlayColor="none"
                >
                  <Avatar
                    source={{
                      uri: image_thumbnail,
                    }}
                    style={styles.ListImage}
                  />
                </TouchableHighlight>
                <ListItem.Content>
                  <ListItem.Title>{full_name}</ListItem.Title>
                  <ListItem.Subtitle style={styles.ListSubtitle}>
                    {/* {manufacturer.name} */}salom
                  </ListItem.Subtitle>
                  <ListItem.Subtitle style={styles.ListPrice}>
                    {price} дан
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
                  <Text style={{ color: "black", marginBottom: 20 }}>
                    {amount}
                  </Text>
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
            </TouchableHighlight>
            {/* ))} */}
          </ScrollView>
        </View>;
      }}
      renderHiddenItem={(data, rowMap) => (
        <View>
          {/* <Text>Left</Text>
          <Text>Right</Text> */}
        </View>
      )}
      leftOpenValue={0}
      rightOpenValue={0}
    />
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
