import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-text text-xl font-semibold">Profile</Text>
        <Text className="text-textMuted mt-1">Account info and stats will live here.</Text>
      </View>
    </SafeAreaView>
  );
}
