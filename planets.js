import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { getPlanets } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";


export default function Planets() {
  const [planets, setPlanets] = useState([]);
  // holds state for a selected planet and if the modal is visible
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getPlanets().then((planets) => {
      //uncomment the console.log to view the output of the json object
      //console.log(planets);
      setPlanets(planets.results);
    });
  }, []);

  // function to change modal status to visible and set the value dsisplayed
  function openPlanetModal(planet) {
    setSelectedPlanet(planet);
    setModalVisible(true);
  }

  // everythin rendefered in the return statement is displayed on the screen
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Planets</Text>
        <Input placeholder="Search planets..." />
        {/* renders the planet list */}
        {planets.length === 0 ? (
          <Text style={styles.emptyText}>Loading planets...</Text>
        ) : (
          // for each planet a card is rendered 
          planets.map((item) => (
            <TouchableOpacity
              key={item.uid ?? item.name}
              style={styles.itemCard}
              onPress={() => openPlanetModal(item)}
            >
            <View style={styles.itemCard} key={item.uid ?? item.name}>
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
            </TouchableOpacity>
          ))
        )}
        <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
          <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalBox}>
                  <Text style={styles.modalTitle}>Planet Selected</Text>
                  <Text style={styles.modalMessage}> You pressed: {selectedPlanet?.name}</Text>
                  <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalButtonText}>Close</Text>
                  </Pressable>
              </View>
              </View>
          </Modal>
        </Animated.View>
       </ScrollView>
       </View>
          );
}
