import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

const BarWrapper = styled.View`
  background-color: #e8edf1;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  color: #7f91a8;
  padding: 8px;
`;

const SearchBar = () => {
  return (
    <BarWrapper>
      <Feather name="search" size={24} color="#7F91A8" />
      <Input>Search Bar</Input>
    </BarWrapper>
  );
};

export default SearchBar;
