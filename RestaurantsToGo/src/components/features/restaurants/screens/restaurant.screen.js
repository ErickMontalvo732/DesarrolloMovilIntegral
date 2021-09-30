import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import styled from "styled-components/native";
import {
  RestaurantInfoCard,
} from "../components/restaurant-info-card.component";

// const isAndroid = Platform.OS === "android";
// console.log(Platform);
// console.log(Platform.OS === "android");
console.log(StatusBar.currentHeight);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  $(statusBar.currentHeight) && 'margin-top: ${StatusBar.currentHeight}px';
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//     backgroundColor: "gray",
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "white",
//   },
// });
