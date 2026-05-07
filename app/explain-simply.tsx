import { Camera } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LevelSelector, type Level } from '@/components/LevelSelector';
import { Colors } from '@/constants/colors';

export default function ExplainSimplyScreen() {
  const [level, setLevel] = useState<Level>(1);

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Upload notes, photo, or PDF"
          onPress={() => console.log('upload pressed')}
        >
          {({ pressed }) => (
            <View style={[styles.uploadBox, pressed && styles.pressed]}>
              <Camera size={48} color={Colors.primary} />
              <Text style={styles.uploadText}>
                Upload notes, photo, or PDF
              </Text>
            </View>
          )}
        </Pressable>

        <View style={styles.levelSection}>
          <Text style={styles.sectionLabel}>Explanation level</Text>
          <LevelSelector value={level} onChange={setLevel} />
        </View>

        <View style={styles.resultCard}>
          <Text style={styles.resultHeader}>
            ✨ Here&apos;s your simplified explanation:
          </Text>

          <Text style={styles.bodyText}>
            <Text style={styles.highlight}>Photosynthesis</Text> is how plants
            make their food using sunlight.
          </Text>

          <Text style={styles.bodyText}>
            Plants take in <Text style={styles.highlight}>carbon dioxide</Text>{' '}
            from the air and <Text style={styles.highlight}>water</Text> from
            the roots. With the help of{' '}
            <Text style={styles.highlight}>sunlight</Text> and{' '}
            <Text style={styles.highlight}>chlorophyll</Text> (the green stuff
            in leaves), they turn these into{' '}
            <Text style={styles.highlight}>glucose</Text> (sugar) for energy.
          </Text>

          <Text style={styles.bodyText}>
            The plant releases <Text style={styles.highlight}>oxygen</Text>{' '}
            back into the air. This process keeps plants alive and helps us
            breathe!
          </Text>

          <Text style={styles.summary}>
            🌱 Think: Sunlight + Water + CO₂ → Sugar + O₂
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  uploadBox: {
    marginTop: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  pressed: {
    opacity: 0.85,
  },
  uploadText: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  levelSection: {
    marginTop: 24,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  resultCard: {
    marginTop: 24,
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    padding: 20,
    gap: 12,
  },
  resultHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.text,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: '600',
  },
  summary: {
    fontSize: 13,
    fontStyle: 'italic',
    color: Colors.primary,
    marginTop: 4,
  },
});
