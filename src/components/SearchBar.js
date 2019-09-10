import React from "react";
import styled from "styled-components";

// swap this out for react-native-vector-icons
import { Feather } from "@expo/vector-icons";

const BarWrapper = styled.View`
  background-color: #e8edf1;
  border-radius: 24px;
  flex-direction: row;
  height: 40px;
  margin: 16px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  flex: 1;
`;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <BarWrapper>
      <Feather
        name="search"
        size={24}
        color="#7F91A8"
        style={{ margin: 8, alignSelf: "center" }}
      />
      <Input
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
      />
    </BarWrapper>
  );
};

export default SearchBar;
