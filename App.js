import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxText}>Starwars Companion App</Text>
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Text style={styles.boxText}> Planets </Text>
      </View>
      <View style={styles.box}>
        <Text styles={styles.boxText}> Spaceships </Text>
      </View>
      <View styles={styles.box}>
        <Text styles={styles.boxText}> Films </Text>
      </View>
    </View>
  );
}
