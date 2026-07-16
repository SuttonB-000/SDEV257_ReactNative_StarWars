import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getSpaceships } from "./Swapi.js";
import styles from "./styles.js";

// function displays spaceship data from the API
export default function Spaceships() {
  const [spaceship, setSpaceships] = useState([]);

  useEffect(() => {
    // using id 9 for proof of concept
    getSpaceships()
      .then((spaceship) => {
      setSpaceships(spaceship.result.properties);
      })
      .then(spaceship => console.log(spaceship))
      .catch(err => console.error(err)) 

  }, []);

  return (
    <View style={styles.container}>
      <Text> {spaceship.name} </Text>
    </View>
  );
}
