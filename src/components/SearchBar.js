import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

const BarWrapper = styled.View`
  background-color: #e8edf1;
  border-radius: 6px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
`;

const Body = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  color: #7f91a8;
`;

const SearchBar = () => {
  return (
    <BarWrapper>
      <Feather name="search" size={24} color="#7F91A8" />
      <Body>Search Bar</Body>
    </BarWrapper>
  );
};

export default SearchBar;
