import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Spaceships</Text>
        <Input placeholder="Search starships..." />
        {spaceships.length === 0 ? (
          <Text style={styles.emptyText}>Loading spaceships...</Text>
        ) : (
          spaceships.map((item) => (
            <View style={styles.itemCard} key={item.uid ?? item.name}>
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
