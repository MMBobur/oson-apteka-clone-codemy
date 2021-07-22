// import React from "react";
// import {
//   StyleSheet,
//   ActivityIndicator,
//   ListView,
//   Text,
//   View,
//   Alert,
//   Platform,
//   TouchableOpacity,
// } from "react-native";
// import { Card, CheckBox, Button } from "react-native-elements";

// export default class AgendaItemVote extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: [
//         {
//           title: "Ja",
//           checked: false,
//         },
//         {
//           title: "Nee",
//           checked: false,
//         },
//         {
//           title: "Onthouding",
//           checked: false,
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Card title="Titel Agendapunt">
//           <Text style={styles.paragraph}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
//             sapien at tellus interdum finibus. Nunc sagittis tincidunt orci, non
//             viverra ligula feugiat id. Phasellus eleifend massa neque, eu
//             scelerisque enim feugiat ac.
//           </Text>

//           <View style={{ flexDirection: "row" }}>
//             {this.state.options.map((opt) => (
//               <CheckBox
//                 title={opt.title}
//                 checked={opt.checked}
//                 key={opt.title}
//                 onPress={() => {
//                   opt.checked = !opt.checked;
//                   this.setState({
//                     options: [...this.state.options],
//                   });
//                 }}
//               />
//             ))}
//             {/* {this.state.options.map(opt => (
//                             <CheckBox
//                                 title={opt.title}
//                                 checked={opt.checked}
//                                 key={opt.title}
//                                 onClick={() => {
//                                   opt.checked = !opt.checked;
//                                   this.setState({
//                                         options: [
//                                             ...this.state.options
//                                         ]
//                                     })
//                                 } */}
//           </View>

//           <View>
//             <Button title="Indienen" />
//           </View>
//         </Card>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 40,
//     backgroundColor: "#ecf0f1",
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#34495e",
//   },
// });

import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CheckBox,
  ListItem,
  Avatar,
  Divider,
  Button,
} from "react-native-elements";
import { Items } from "../Viloyatlar/item";
import { Samarqand } from "../Viloyatlar/samarqandData";
import { Buxoro } from "../Viloyatlar/buxoroData";
import { Andijon } from "../Viloyatlar/andijonData";
import { Namangan } from "../Viloyatlar/namanganData";
import { Sirdaryo } from "../Viloyatlar/sirdaryoData";
import { Fargona } from "../Viloyatlar/fargonaData";
import { ToshkentViloyat } from "../Viloyatlar/toshkentVilData";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

function Region() {
  const [isExpanded, setisExpanded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expandedBux, setExpandedBux] = useState(false);
  const [expandedAnd, setExpandedAnd] = useState(false);
  const [expandedNamang, setExpandedNamang] = useState(false);
  const [expandedSirdry, setExpandedSirdry] = useState(false);
  const [expandedTosh, setExpandedTosh] = useState(false);
  const [expandedFar, setExpandedFar] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedToshkent, setCheckedToshkent] = useState(false);

  return (
    <View style={{ flex: 1, height: "50%" }}>
      <ScrollView
        bounces={false}
        // stickyHeaderIndices={[9]}
        // decelerationRate="fast"
        // scrollEnabled={false}
        // showsVerticalScrollIndicator={false}
        style={{ height: Dimensions.get("window").height * 0 }}
      >
        <CheckBox
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
            display: "flex",
            alignSelf: "flex-end",
          }}
          textStyle={{
            display: "flex",
            textAlign: "center",
            alignContent: "center",
            alignSelf: "center",
            marginRight: 158,
            fontSize: 16,
            fontWeight: "300",
            color: "black",
          }}
          title="Ўзбекистон бўйлаб"
          checkedIcon="dot-circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          uncheckedIcon="circle-o"
          checked={checked}
          onPress={() => setChecked(!checked)}
          replaceTheme
        />
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 16, color: "black" }}>
                  Тошкент
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          underlayColor="none"
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
          {Items.map((item) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={item.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              // checked={checked}
              // onPress={() => setChecked(!checked)}
              checked={checkedToshkent}
              onPress={() => setCheckedToshkent({ checked: !checkedToshkent })}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Самарқанд
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={isExpanded}
          underlayColor="none"
          onPress={() => {
            setisExpanded(!isExpanded);
          }}
        >
          {Samarqand.map((itemSam) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={itemSam.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={itemSam.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Бухоро
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedAnd}
          underlayColor="none"
          onPress={() => {
            setExpandedAnd(!expandedAnd);
          }}
        >
          {Buxoro.map((itemBux) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={itemBux.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={itemBux.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          // left
          iconRight
          // center
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
            // display: "flex",
            // alignSelf: "flex-end",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Жиззах"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Aндижон
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedBux}
          underlayColor="none"
          onPress={() => {
            setExpandedBux(!expandedBux);
          }}
        >
          {Andijon.map((itemAnd) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={itemAnd.id}
              iconRight
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={itemAnd.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Қашқадарё"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Навоий"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Наманган
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedNamang}
          underlayColor="none"
          onPress={() => {
            setExpandedNamang(!expandedNamang);
          }}
        >
          {Namangan.map((item) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={item.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Сурхондарё"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Сирдарё
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedSirdry}
          underlayColor="none"
          onPress={() => {
            setExpandedSirdry(!expandedSirdry);
          }}
        >
          {Sirdaryo.map((item) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={item.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Фарғона
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedFar}
          underlayColor="none"
          onPress={() => {
            setExpandedFar(!expandedFar);
          }}
        >
          {Fargona.map((item) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={item.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Хоразм"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={{ color: "black" }}>
                  Тошкент вилояти
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expandedTosh}
          underlayColor="none"
          onPress={() => {
            setExpandedTosh(!expandedTosh);
          }}
        >
          {ToshkentViloyat.map((item) => (
            <CheckBox
              wrapperStyle={{
                justifyContent: "space-between",
              }}
              key={item.id}
              // left
              iconRight
              // center
              containerStyle={{
                borderWidth: 0,
                backgroundColor: "white",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "300",
                color: "black",
              }}
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={20}
              uncheckedColor="#98A5A9"
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          ))}
        </ListItem.Accordion>
        <Divider />
        <CheckBox
          wrapperStyle={{ justifyContent: "space-between" }}
          iconRight
          containerStyle={{
            borderWidth: 0,
            backgroundColor: "white",
          }}
          textStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            marginLeft: -3,
          }}
          title="Қорақалпогистон Республикаси"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={20}
          uncheckedColor="#98A5A9"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Divider />
      </ScrollView>
      <View
        style={{
          width: "100%",
          position: "absolute",
          backgroundColor: "white",
          bottom: 0,
        }}
      >
        <Button
          title="Сақлаш"
          containerStyle={{
            paddingBottom: 20,
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 10,
          }}
          titleStyle={{ paddingVertical: 3 }}
          buttonStyle={{ borderRadius: 12, backgroundColor: "#3872D3" }}
        />
      </View>
    </View>
  );
}

export default Region;
