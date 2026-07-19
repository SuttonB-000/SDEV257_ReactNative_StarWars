import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getSpaceships } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    getSpaceships().then((spaceships) => {
      console.log(spaceships);
      setSpaceships(spaceships.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Spaceships</Text>
      <Input placeholder="Search starships..." />
      <FlatList
        style={styles.list}
        data={spaceships}
        keyExtractor={(item) => item.uid ?? item.name}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Loading spaceships...</Text>
        }
      />
    </View>
  );
}
