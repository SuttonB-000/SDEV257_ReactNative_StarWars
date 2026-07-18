import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getSpaceships } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

// function displays spaceship data from the API
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
      <Input placeholder="search..." />
      <FlatList
        data={spaceships}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
