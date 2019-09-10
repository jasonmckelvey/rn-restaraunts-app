import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import yelp from "../api/yelp";

const Wrapper = styled.View``;

const ShowResultsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <Wrapper>
      <Text>Results</Text>
    </Wrapper>
  );
};

export default ShowResultsScreen;
