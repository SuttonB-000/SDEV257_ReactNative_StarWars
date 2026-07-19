import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Films</Text>
        <Input placeholder="Search films..." />
        {films.length === 0 ? (
          <Text style={styles.emptyText}>Loading films...</Text>
        ) : (
          films.map((item) => (
            <View style={styles.itemCard} key={item.uid}>
              <Text style={styles.itemTitle}>{item.properties.title}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

