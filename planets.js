import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getPlanets } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((planets) => {
      console.log(planets);
      setPlanets(planets.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Planets</Text>
      <Input placeholder="Search planets..." />
      <FlatList
        style={styles.list}
        data={planets}
        keyExtractor={(item) => item.uid ?? item.name}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Loading planets...</Text>
        }
      />
    </View>
  );
}
