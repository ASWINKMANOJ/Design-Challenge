import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function StackNavigation() {
  const OnboardingComplete = false;

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        {OnboardingComplete ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="Onboarding" />
        )}
      </Stack>
    </GestureHandlerRootView>
  );
}
