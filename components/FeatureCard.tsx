import { ChevronRight, type LucideIcon } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundColor: string;
  iconBackgroundColor: string;
  onPress: () => void;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  backgroundColor,
  iconBackgroundColor,
  onPress,
}: FeatureCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityHint={description}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.card,
            { backgroundColor },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: iconBackgroundColor },
            ]}
          >
            <Icon size={28} color={Colors.primary} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          </View>

          <ChevronRight size={20} color="#9CA3AF" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  pressed: {
    opacity: 0.85,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});
