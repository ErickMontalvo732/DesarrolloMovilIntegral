import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/components/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />;
    </ThemeProvider>
  );
}
