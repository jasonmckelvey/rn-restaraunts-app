import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ScreenWrapper = styled.View`
  padding: 0px 0px 24px 0px;
`;

const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 0px 16px;
`;
const TouchableWrapper = styled.TouchableOpacity``;

const ResultsList = ({ title, results, navigation }) => {
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
          return (
            <TouchableWrapper
              onPress={() => navigation.navigate("ResultsShow")}
            >
              <ResultsDetail result={item} />
            </TouchableWrapper>
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default withNavigation(ResultsList);
