import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";

const ScreenWrapper = styled.View`
  padding: 18px 0px;
`;

const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ListSubTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const ResultsList = ({ title, results }) => {
  return (
    <ScreenWrapper>
      <ListTitle>{title}</ListTitle>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </ScreenWrapper>
  );
};

export default ResultsList;
