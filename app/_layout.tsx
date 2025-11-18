import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
};

export default _layout;
