import '../global.css';

import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ChevronLeft, HelpCircle } from 'lucide-react-native';
import { Pressable, View } from 'react-native';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: '700',
            color: '#1A1A2E',
          },
          headerShadowVisible: false,
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                borderBottomWidth: 1,
                borderBottomColor: '#F3F4F6',
              }}
            />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <ChevronLeft size={24} color="#1A1A2E" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Help"
            >
              <HelpCircle size={22} color="#1A1A2E" />
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="explain-simply" options={{ title: 'Explain Simply' }} />
        <Stack.Screen name="solve-step" options={{ title: 'Solve Step by Step' }} />
        <Stack.Screen name="emergency-mode" options={{ title: 'Emergency Mode' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
