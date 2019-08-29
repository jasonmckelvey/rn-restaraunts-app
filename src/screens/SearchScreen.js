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
  const [errorMessage, setErrormMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrormMessage("Something went wrong");
    }
  };

  return (
    <ScreenWrapper>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
