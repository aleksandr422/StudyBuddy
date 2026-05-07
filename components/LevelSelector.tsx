import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

export type Level = 0 | 1 | 2;

const LABELS = ["Like I'm 10", 'Normal', 'Exam-ready'] as const;
const ALIGNS = ['left', 'center', 'right'] as const;

type LevelSelectorProps = {
  value: Level;
  onChange: (value: Level) => void;
};

export function LevelSelector({ value, onChange }: LevelSelectorProps) {
  return (
    <View>
      <View style={styles.trackContainer}>
        <View style={styles.trackLine} />
        <View style={styles.dotsRow}>
          {[0, 1, 2].map((i) => {
            const active = i === value;
            return (
              <Pressable
                key={i}
                onPress={() => onChange(i as Level)}
                hitSlop={16}
                accessibilityRole="button"
                accessibilityLabel={LABELS[i]}
              >
                <View style={[styles.dot, active && styles.dotActive]} />
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.labelsRow}>
        {LABELS.map((label, i) => {
          const active = i === value;
          return (
            <Text
              key={label}
              style={[
                styles.label,
                { textAlign: ALIGNS[i] },
                active && styles.labelActive,
              ]}
            >
              {label}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trackContainer: {
    height: 20,
    justifyContent: 'center',
  },
  trackLine: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: '#E5E7EB',
    top: '50%',
    marginTop: -1,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D1D5DB',
  },
  dotActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  labelsRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  label: {
    flex: 1,
    fontSize: 12,
    color: Colors.textMuted,
  },
  labelActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
