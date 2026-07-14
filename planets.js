import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPlanets } from "./Swapi.js";
import styles from "./styles.js";


// function to return planet data from SWAPI
export default function Planets() {
  const [planet, setPlanets] = useState([]);

  useEffect(() => {
    // getPlanets id is set to one for proof of concept
    getPlanets(1).then((planet) => {
      // Veiw output of json object
      console.log(planet);
      setPlanets(planet.result.properties);
    });
  }, []);

  return (
    <View stye={styles.container}>
        <Text > {planet.name} </Text>
    </View>
  );
}
