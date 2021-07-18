import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

const AboutScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ flex: 1, height: screenHeight }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "column",
            margin: 15,
          }}
        >
          <Text style={{ letterSpacing: 2 }}>
            {"  "}
            Дори қидирув тизими, енг яқин дорихонада қиммат дори-дармонларга
            арзон аналогларни топинг.
          </Text>
          <Text style={{ letterSpacing: 2 }}>
            {"  "}Дори-дармон нархини солиштиринг ва пулингизни тежанг!
          </Text>
          <Text style={{ letterSpacing: 2 }}>
            {"  "}Дори-дармонлар нархи дорихонадан дорихонага қадар ўзгариб
            туради. Енг арзон дори-дармонларни топиш қийин, чунки нархларни
            таққослаш учун ҳеч қачон катта манбаа йўқ. Дорилар рўйхатини
            шифокорингиздан олинг ва енг арзон ва енг яқин дорихоналарни топиш
            учун OsonAptekaдан фойдаланинг. OsonApteka рўйхат бўйича дори-
            дармонларни осонлик билан таққослаш имконини беради. Енг яқин
            дорихоналардан дори-дармонлар рўйхатида енг паст нархни топинг.
            OsonApteka фойдаланиш учун 100% бепул - сиздан ҳеч қандай тўлов ёки
            мажбурият талаб қилинмайди. Оилангизнинг ҳар бир аъзосининг
            соғлиғини сақлаш орқали ҳам пулингизни тежанг.
          </Text>
          <Text style={{ letterSpacing: 2 }}>
            {"  "}OsonApteka иловасининг хусусиятлари: {"\n  "} - 20 мингдан
            ортиқ дори воситалари {"\n   "}- Дори-дармонларни номи орқали излаш{" "}
            {"\n   "}- Ушбу восита йўриқномасидан асосий маълумотларни кўриш
            {"\n  "} - Яқин дорихоналардан дориларни рўйхат орқали қидириш.
            {"\n   "}- Нархларни солиштириш ва енг яхши нархни топиш. OsonApteka
            билан дори-дармонлар учун маблағингизни тежашни бошланг!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
