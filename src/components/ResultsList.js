import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";

const ScreenWrapper = styled.View`
  padding: 0px 0px 24px 0px;
`;

const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 0px 16px;
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
        style={{ paddingLeft: 16 }}
        horizontal
        showsHorizontalScrollIndicator={false}
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
