import React, { useState, useEffect } from "react";
import { View, Text, FlatList} from "react-native";
import { getPlanets } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js"


// function to return planet data from SWAPI
export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // getPlanets id is set to one for proof of concept
    getPlanets().then((planets) => {
      // Veiw output of json object
      console.log(planets);
      setPlanets(planets.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Input placeholder="search..." />
      <FlatList
        data={planets}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
