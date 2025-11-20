import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "./LoadingSpinner";
export default function ShowComponent() {
  return (
    <SafeAreaView>
      <View>
        <LoadingSpinner />
      </View>
    </SafeAreaView>
  );
}
