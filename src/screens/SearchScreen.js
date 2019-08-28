import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const ScreenWrapper = styled.View`
  padding: 16px;
`;

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <ScreenWrapper>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
