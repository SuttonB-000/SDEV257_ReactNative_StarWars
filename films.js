import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getFilms } from "./Swapi.js";
import styles from "./styles.js";
// import { FlatList } from "react-native-gesture-handler";

// function films is what displays the film from the API 
export default function Films() {
  // sets film and setFilms to useState with an empty array
  // films exist as an empty "storage box" until the API is called and the films are retrieved
  // setFilms is the function that then fills that "storage box"
  const [films, setFilms] = useState([]);

  // 
  useEffect(() => {
    // getFilms retrieves the films from the API and sets the films state to the result properties
    getFilms().then((films) => {
      // uncomment the console.log to see the film object in the console
      console.log(films);

      setFilms(films.result);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        renderItem={({ item }) => <Text>{item.properties.title}</Text>}
      />
    </View>
  );
}

