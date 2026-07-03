import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Starwars Companion App</Text>
      <StatusBar style="auto" />
      <View>
        <Text> Planets </Text>
      </View>
      <View>
        <Text> Spaceships </Text>
      </View>
      <View>
        <Text> Films </Text>
      </View>
    </View>
  );
}
