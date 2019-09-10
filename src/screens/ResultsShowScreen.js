import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components";
import yelp from "../api/yelp";

const Wrapper = styled.View``;

const ResultImage = styled.Image`
  height: 200px;
  flex: 1;
`;

const ShowResultsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <Wrapper>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <ResultImage source={{ uri: item }} />;
        }}
      />
    </Wrapper>
  );
};

export default ShowResultsScreen;
