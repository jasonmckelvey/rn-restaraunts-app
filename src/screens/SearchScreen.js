import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const ScreenWrapper = styled.View`
  padding: 16px;
`;

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose"
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <ScreenWrapper>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
