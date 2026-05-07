import { Download, FileText } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

const TIME_OPTIONS = ['30 min', '2 hours', 'Tonight'] as const;
type TimeOption = (typeof TIME_OPTIONS)[number];

const DEFINITIONS: ReadonlyArray<readonly [string, string]> = [
  ['Inertia', 'An object resists changes to its motion.'],
  ['Force', 'A push or pull that can change motion.'],
  ['Acceleration', 'Change in velocity over time.'],
];

const QUESTIONS = [
  'What is Newton\u2019s first law of motion?',
  'How does mass affect acceleration?',
  'What is the difference between weight and mass?',
  'When would friction be helpful or harmful?',
  'How does force relate to momentum?',
];

export default function EmergencyModeScreen() {
  const [time, setTime] = useState<TimeOption>('2 hours');

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.question}>How much time do you have?</Text>

        <View style={styles.pillRow}>
          {TIME_OPTIONS.map((option) => {
            const active = option === time;
            return (
              <Pressable
                key={option}
                onPress={() => setTime(option)}
                accessibilityRole="button"
                accessibilityLabel={option}
                accessibilityState={{ selected: active }}
                style={styles.pillPressable}
              >
                {({ pressed }) => (
                  <View
                    style={[
                      styles.pill,
                      active ? styles.pillActive : styles.pillInactive,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text
                      style={
                        active ? styles.pillTextActive : styles.pillTextInactive
                      }
                    >
                      {option}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>

        <View style={styles.headerCard}>
          <FileText size={28} color={Colors.primary} />
          <View style={styles.headerCardText}>
            <Text style={styles.headerTitle}>One-Page Cheat Sheet</Text>
            <Text style={styles.headerSubtitle}>
              Physics &ndash; Newton&rsquo;s Laws
            </Text>
          </View>
        </View>

        <View style={styles.contentCard}>
          <Text style={styles.sectionTitle}>Key Formulas</Text>

          <Text style={styles.formulaLine}>
            • F = ma{'  '}
            <Text style={styles.formulaNote}>(Newton&rsquo;s 2nd Law)</Text>
          </Text>
          <Text style={styles.formulaLine}>
            • ΣF = 0{'  '}
            <Text style={styles.formulaNote}>(Equilibrium)</Text>
          </Text>
          <Text style={styles.formulaLine}>
            • F<Text style={styles.subscript}>gravity</Text> = mg
          </Text>
          <Text style={styles.formulaLine}>
            • F<Text style={styles.subscript}>friction</Text> = μN
          </Text>

          <Text style={[styles.sectionTitle, styles.sectionMargin]}>
            Key Definitions
          </Text>
          {DEFINITIONS.map(([term, desc]) => (
            <Text key={term} style={styles.formulaLine}>
              • <Text style={styles.bold}>{term}:</Text> {desc}
            </Text>
          ))}

          <Text style={[styles.sectionTitle, styles.sectionMargin]}>
            5 questions the teacher will likely ask
          </Text>
          {QUESTIONS.map((q, i) => (
            <View key={q} style={styles.questionRow}>
              <Text style={styles.questionNumber}>{i + 1}.</Text>
              <Text style={styles.questionText}>{q}</Text>
            </View>
          ))}
        </View>

        <Pressable
          onPress={() => console.log('save as PDF')}
          accessibilityRole="button"
          accessibilityLabel="Save as PDF"
        >
          {({ pressed }) => (
            <View style={[styles.saveButton, pressed && styles.pressed]}>
              <Download size={20} color="#FFFFFF" />
              <Text style={styles.saveButtonText}>Save as PDF</Text>
            </View>
          )}
        </Pressable>
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
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A2E',
    marginTop: 16,
    marginBottom: 16,
  },
  pillRow: {
    flexDirection: 'row',
    gap: 12,
  },
  pillPressable: {
    flex: 1,
  },
  pill: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillInactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  pillActive: {
    backgroundColor: Colors.primary,
  },
  pillTextInactive: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '600',
  },
  pillTextActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.85,
  },
  headerCard: {
    marginTop: 24,
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerCardText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  contentCard: {
    marginTop: 16,
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  sectionMargin: {
    marginTop: 16,
  },
  formulaLine: {
    fontSize: 14,
    color: '#1A1A2E',
    marginBottom: 4,
    lineHeight: 22,
  },
  formulaNote: {
    color: '#6B7280',
  },
  subscript: {
    fontSize: 10,
  },
  bold: {
    fontWeight: '700',
  },
  questionRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    marginRight: 8,
    minWidth: 18,
  },
  questionText: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A2E',
    lineHeight: 22,
  },
  saveButton: {
    marginTop: 24,
    marginBottom: 32,
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
