import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPlanets } from "./Swapi.js";
import styles from "./styles.js";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data.results);
    });
  }, []);

  return (
    <View stye={styles.container}>
      {films.map((film) => (
        <Text key={planets.uid}> {film.properties.title} </Text>
      ))}
    </View>
  );
}
