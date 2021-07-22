import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SpeedDial } from "react-native-elements";
import TopPucture from "../../assets/photo_apteka.jpg";

const TopBarSection = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity>
        <Feather
          style={styles.IconLeft}
          name="chevron-left"
          size={27}
          color="black"
        />
      </TouchableOpacity>
      <Image style={styles.TopPicure} source={TopPucture} />
      {/* <SpeedDial
        // isOpen={open}
        icon={{ name: "edit", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        // onOpen={() => setOpen(!open)}
        // onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: "add", color: "#fff" }}
          title="Add"
          onPress={() => console.log("Add Something")}
        />
        <SpeedDial.Action
          icon={{ name: "delete", color: "#fff" }}
          title="Delete"
          onPress={() => console.log("Delete Something")}
        />
      </SpeedDial> */}
    </View>
  );
};

export default TopBarSection;

const styles = StyleSheet.create({
  IconLeft: {
    marginTop: 10,
    marginLeft: 8,
    position: "absolute",
  },
  TopPicure: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignSelf: "center",
    width: 180,
    height: 27,
  },
});
