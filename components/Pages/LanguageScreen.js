import React, { Component } from "react";
import { ListItem, CheckBox } from "react-native-elements";
import { View, ScrollView, StyleSheet } from "react-native";

export default class LanguageScreen extends Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListItem
            bottomDivider
            // onPress={() =>
            //   this.setState({
            //     checked1: !this.state.checked1,
            //   })
            // }
          >
            <ListItem.Content>
              <ListItem.Title>Русский</ListItem.Title>
            </ListItem.Content>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="#91AAB8"
              checkedColor="#3872D3"
              size={20}
              checked={this.state.checked1}
              onPress={() =>
                this.setState({
                  checked1: !this.state.checked1,
                })
              }
            />
          </ListItem>
          <ListItem
            bottomDivider
            // onPress={() =>
            //   this.setState({
            //     checked2: !this.state.checked2,
            //   })
            // }
          >
            <ListItem.Content>
              <ListItem.Title>Узбекча</ListItem.Title>
            </ListItem.Content>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="#91AAB8"
              checkedColor="#3872D3"
              size={20}
              checked={this.state.checked2}
              onPress={() =>
                this.setState({
                  checked2: !this.state.checked2,
                })
              }
            />
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
