import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-text text-xl font-semibold">Settings</Text>
        <Text className="text-textMuted mt-1">Preferences and account options.</Text>
      </View>
    </SafeAreaView>
  );
}
