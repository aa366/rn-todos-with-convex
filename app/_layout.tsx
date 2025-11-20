import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

const StaclLayout = () => {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </ConvexProvider>
  );
};

export default StaclLayout;
