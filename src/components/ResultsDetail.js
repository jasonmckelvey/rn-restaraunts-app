import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const ScreenWrapper = styled.View`
  padding: 8px 0px;
  margin: 0px 8px 0px 0px;
`;

const ListCaption = styled.Text`
  font-size: 12px;
  color: gray;
`;
const ListSubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin: 0px 0px 2px 0px;
`;

const ResultImage = styled.Image`
  height: 150px;
  width: 250px;
  border-radius: 4px;
  margin: 0px 0px 4px 0px;
`;

const ResultsDetail = ({ result }) => {
  return (
    <ScreenWrapper>
      <ResultImage source={{ uri: result.image_url }} />
      <ListSubTitle>{result.name}</ListSubTitle>
      <ListCaption>
        {result.rating} Stars, {result.review_count} Reviews
      </ListCaption>
    </ScreenWrapper>
  );
};

export default ResultsDetail;
