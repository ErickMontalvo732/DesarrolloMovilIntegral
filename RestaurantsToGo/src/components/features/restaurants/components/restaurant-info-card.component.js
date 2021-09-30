import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  `;
// $((props) => props.theme.colors.brand.primary);

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary}
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/03/05/18/54/animal-https://cdn.pixabay.com/photo/2012/04/11/17/31/vegetables-29063_960_720.png.jpg",
    ],
    address = "Some random Street",
    isOpenNow = true,
    rating,
    isCloseTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

// YA NO SE USA PORQUE SE CAMBIO POR COMPONENTES ESTILIZADOS
// const styles = StyleSheet.create({
//   card: { backgroundColor: "white", padding: 16 },
//   cover: { backgroundColor: "white" },
//   title: { padding: 16 },
// });
