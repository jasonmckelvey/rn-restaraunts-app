import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const ScreenWrapper = styled.View`
  padding: 16px;
`;

const SearchScreen = () => {
  return (
    <ScreenWrapper>
      <SearchBar />
      <Text>Search Screen</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
