import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getFilms } from "./Swapi.js";
import styles from "./styles.js";

// function films is what displays the film from the API 
export default function Films() {
  // sets film and setFilms to useState with an empty array
  const [film, setFilms] = useState([]);

  // 
  useEffect(() => {
    getFilms(1).then((film) => {
      // uncomment the console.log to see the film object in the console
      // console.log(film);
      setFilms(film.result.properties);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{film.title}</Text>
    </View>
  );
}
