import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { Touchable } from "react-native";

const CheaperPage = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Itemcontainer}>
          <View style={styles.FirsPart}>
            <MaterialCommunityIcons
              style={styles.DrugIcon}
              name="home-map-marker"
              size={52}
              color="#90AAB7"
            />
            <Text style={styles.AptekaName}>SD Pharm Brand</Text>
            <Text style={styles.Textkm}>200.6 KM</Text>
          </View>
          <View style={{ marginLeft: -15 }}>
            <Text style={styles.drugCost}>24 000 so'm</Text>
            <Text style={styles.drugCostMinimal}>
              Minimal narxi: 24 000 so'm
            </Text>
            <Text style={styles.moljal}>
              Olmazor t-n, Sebzor k.4A Mo'ljal: "Sebzor" dokoni; "Sebzor
              massivi" bekatidan 50m
            </Text>
            <TouchableOpacity>
              <Text style={styles.TelPhone}>(94) 123 93 90</Text>
            </TouchableOpacity>
            <View style={styles.shikoyat}>
              <Text style={{ color: "black" }}>7:00 -20:00</Text>
            </View>
          </View>
          <View style={styles.CardaTouch}>
            <Button
              icon={<Ionicons name="call" size={20} color="#12BF28" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#DBF4DE",
                borderColor: "#DBF4DE",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <Ionicons name="location-sharp" size={20} color="#3772D0" />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <MaterialCommunityIcons
                  name="share"
                  size={30}
                  color="#3772D0"
                />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={<Ionicons name="warning-outline" size={24} color="red" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#FBE9E9",
                borderColor: "#FBE9E9",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
          </View>
          <View style={styles.bottomCard}>
            <EvilIcons
              name="check"
              size={20}
              color="#3772D0"
              style={{ paddingLeft: 5 }}
            />
            <Text style={styles.bottomCardText}>Rengalin Tabletka №20</Text>
            <Text style={styles.bottomCardText2}>24 000 so'm (x1)</Text>
          </View>
        </View>
        <View style={styles.Itemcontainer}>
          <View style={styles.FirsPart}>
            <MaterialCommunityIcons
              style={styles.DrugIcon}
              name="home-map-marker"
              size={52}
              color="#90AAB7"
            />
            <Text style={styles.AptekaName}>SD Pharm Brand</Text>
            <Text style={styles.Textkm}>200.6 KM</Text>
          </View>
          <View style={{ marginLeft: -15 }}>
            <Text style={styles.drugCost}>24 000 so'm</Text>
            <Text style={styles.drugCostMinimal}>
              Minimal narxi: 24 000 so'm
            </Text>
            <Text style={styles.moljal}>
              Olmazor t-n, Sebzor k.4A Mo'ljal: "Sebzor" dokoni; "Sebzor
              massivi" bekatidan 50m
            </Text>
            <Text style={styles.TelPhone}>(94) 123 93 90</Text>
            <View style={styles.shikoyat}>
              <Text style={{ color: "black" }}>7:00 -20:00</Text>
            </View>
          </View>
          <View style={styles.CardaTouch}>
            <Button
              icon={<Ionicons name="call" size={20} color="#12BF28" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#DBF4DE",
                borderColor: "#DBF4DE",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <Ionicons name="location-sharp" size={20} color="#3772D0" />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <MaterialCommunityIcons
                  name="share"
                  size={30}
                  color="#3772D0"
                />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={<Ionicons name="warning-outline" size={24} color="red" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#FBE9E9",
                borderColor: "#FBE9E9",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
          </View>
          <View style={styles.bottomCard}>
            <EvilIcons
              name="check"
              size={20}
              color="#3772D0"
              style={{ paddingLeft: 5 }}
            />
            <Text style={styles.bottomCardText}>Rengalin Tabletka №20</Text>
            <Text style={styles.bottomCardText2}>24 000 so'm (x1)</Text>
          </View>
        </View>
        <View style={styles.Itemcontainer}>
          <View style={styles.FirsPart}>
            <MaterialCommunityIcons
              style={styles.DrugIcon}
              name="home-map-marker"
              size={52}
              color="#90AAB7"
            />
            <Text style={styles.AptekaName}>SD Pharm Brand</Text>
            <Text style={styles.Textkm}>200.6 KM</Text>
          </View>
          <View style={{ marginLeft: -15 }}>
            <Text style={styles.drugCost}>24 000 so'm</Text>
            <Text style={styles.drugCostMinimal}>
              Minimal narxi: 24 000 so'm
            </Text>
            <Text style={styles.moljal}>
              Olmazor t-n, Sebzor k.4A Mo'ljal: "Sebzor" dokoni; "Sebzor
              massivi" bekatidan 50m
            </Text>
            <Text style={styles.TelPhone}>(94) 123 93 90</Text>
            <View style={styles.shikoyat}>
              <Text style={{ color: "black" }}>7:00 -20:00</Text>
            </View>
          </View>
          <View style={styles.CardaTouch}>
            <Button
              icon={<Ionicons name="call" size={20} color="#12BF28" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#DBF4DE",
                borderColor: "#DBF4DE",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <Ionicons name="location-sharp" size={20} color="#3772D0" />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={
                <MaterialCommunityIcons
                  name="share"
                  size={30}
                  color="#3772D0"
                />
              }
              type="outline"
              buttonStyle={{
                backgroundColor: "#F5F5F3",
                borderColor: "#F5F5F3",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
            <Button
              icon={<Ionicons name="warning-outline" size={24} color="red" />}
              type="outline"
              buttonStyle={{
                backgroundColor: "#FBE9E9",
                borderColor: "#FBE9E9",
                width: 70,
                height: 45,
                borderRadius: 10,
              }}
              // onPress={() => toggle("inc")}
            />
          </View>
          <View style={styles.bottomCard}>
            <EvilIcons
              name="check"
              size={20}
              color="#3772D0"
              style={{ paddingLeft: 5 }}
            />
            <Text style={styles.bottomCardText}>Rengalin Tabletka №20</Text>
            <Text style={styles.bottomCardText2}>24 000 so'm (x1)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheaperPage;

const styles = StyleSheet.create({
  Itemcontainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 2,
  },
  FirsPart: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  AptekaName: {
    marginTop: 10,
    marginRight: 55,
  },
  DrugIcon: {
    marginLeft: 10,
    // paddingLeft: 10,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#F5F5F3",
  },
  Textkm: {
    marginRight: 8,
    fontSize: 13,
    color: "gray",
  },
  drugCost: {
    color: "#3772D0",
    fontWeight: "700",
    fontSize: 19,
    marginTop: 30,
    marginLeft: 30,
  },
  drugCostMinimal: {
    color: "#90AAB7",
    fontSize: 11,
    // marginTop: 30,
    marginLeft: 30,
  },
  moljal: {
    letterSpacing: 2,
    width: 250,
    marginLeft: 27,
    marginTop: 10,
  },
  TelPhone: {
    width: 250,
    marginLeft: 27,
    marginTop: 10,
  },
  shikoyat: {
    marginRight: 10,
    marginTop: -20,
    alignItems: "flex-end",
  },
  CardaTouch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  Buttons: {
    fontSize: 25,
    borderRadius: 7,
    backgroundColor: "#F5F5F3",
    color: "#90AAB7",
  },
  ButtonText: {
    marginHorizontal: 15,
    marginVertical: 7,
    // margin: 10,
    // marginTop: 7,
    fontSize: 16,
    color: "#3772D0",
  },
  bottomCard: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 320,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#F5F5F3",
    borderRadius: 8,
    height: 40,
  },
  bottomCardText: {
    marginRight: 10,
    // marginLeft: 10,
    color: "black",
    fontSize: 14,
  },
  bottomCardText2: {
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "700",
    color: "black",
    fontSize: 12,
  },
});
