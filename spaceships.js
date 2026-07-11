import React, { useState, uesEffect } from "react";
import { View, Text } from "react-native";
import { getSpaceships } from "./spaceships.js";
import styles from "./styles.js";

export default function Spaceships() {
  const [Spaceship, setSpaceships] = useState([]);

  useEffect(() => {
    setSpaceships().then((data) => {
      setSpaceships(data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      {Spaceship.map((Spaceship) => (
        <Text key={Spaceship.uid}> {Spaceship.properties.title} </Text>
      ))}
      ;
    </View>
  );
}
