import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      <ListSubTitle>Result: {results.length}</ListSubTitle>
    </ScreenWrapper>
  );
};

export default ResultsList;
