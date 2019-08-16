import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const BarWrapper = styled.View`
  background-color: #e8edf1;
  border-radius: 6px;
  padding: 8px 16px;
`;

const SearchBar = () => {
  return (
    <BarWrapper>
      <Text>Search Bar</Text>
    </BarWrapper>
  );
};

export default SearchBar;
