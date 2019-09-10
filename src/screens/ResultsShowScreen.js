import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const ListWrapper = styled.ScrollView``;

const ShowResultsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  return <Text>Results</Text>;
};

export default ShowResultsScreen;
