import React, { useState, useEffect } from "react";
import { data } from "../api/data";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

function Search() {
  const [searchResults, setSearchResults] = useState(data);
  const [searchText, setSearchText] = useState("");

  return <div></div>;
}

export default Search;
