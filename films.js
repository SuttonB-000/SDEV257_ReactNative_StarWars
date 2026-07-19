import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getFilms } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      console.log(films);
      setFilms(films.result);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Films</Text>
      <Input placeholder="Search films..." />
      <FlatList
        style={styles.list}
        data={films}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>{item.properties.title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Loading films...</Text>
        }
      />
    </View>
  );
}

