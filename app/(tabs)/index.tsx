import { router } from 'expo-router';
import { Lightbulb, ListChecks, Zap } from 'lucide-react-native';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FeatureCard } from '@/components/FeatureCard';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="px-6 pt-4">
          <Text className="text-text text-3xl font-bold">StudyBuddy 👋</Text>
          <Text className="text-textMuted mt-1 text-base">
            Smart help. Better grades.
          </Text>
        </View>

        <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
          <FeatureCard
            icon={Lightbulb}
            title="Explain Simply"
            description="Turn any textbook or notes into plain language"
            backgroundColor="#F5F3FF"
            iconBackgroundColor="#FFFFFF"
            onPress={() => router.push('/explain-simply')}
          />
          <FeatureCard
            icon={ListChecks}
            title="Solve Step by Step"
            description="Get guided through problems, not just answers"
            backgroundColor="#F5F3FF"
            iconBackgroundColor="#FFFFFF"
            onPress={() => router.push('/solve-step')}
          />
          <FeatureCard
            icon={Zap}
            title="Emergency Mode"
            description="Cram smarter when time is running out"
            backgroundColor="#FEF2F2"
            iconBackgroundColor="#FFFFFF"
            onPress={() => router.push('/emergency-mode')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
