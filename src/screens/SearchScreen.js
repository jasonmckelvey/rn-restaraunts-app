import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const ScreenWrapper = styled.View`
  padding: 16px;
`;

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <ScreenWrapper>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
