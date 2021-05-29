import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeHeaderComponent from "./HomeHeaderComponent";
import CardItems from "./CardItems";

function Home() {
  return (
    <SafeAreaView>
      <View>
        <HomeHeaderComponent />
        <CardItems /> <br />
      </View>
    </SafeAreaView>
  );
}

export default Home;
