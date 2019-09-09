import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const ScreenWrapper = styled.View`
  padding: 16px 0px;
  margin: 0px 8px 0px 0px;
`;

const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ListSubTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const ResultImage = styled.Image`
  height: 150px;
  width: 250px;
  border-radius: 4px;
  margin: 0px 0px 8px 0px;
`;

const ResultsDetail = ({ result }) => {
  return (
    <ScreenWrapper>
      <ResultImage source={{ uri: result.image_url }} />
      <ListSubTitle>{result.name}</ListSubTitle>
    </ScreenWrapper>
  );
};

export default ResultsDetail;
