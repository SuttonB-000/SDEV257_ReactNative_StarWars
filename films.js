import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getFilms } from "./Swapi.js";
import styles from "./styles.js";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((data) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      {films.map((film) => (
        <Text key={film.uid}> {film.properties.title} </Text>
      ))}
    </View>
  );
}
