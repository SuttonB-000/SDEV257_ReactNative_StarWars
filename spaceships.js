import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import Animated, {SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { getSpaceships } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getSpaceships().then((spaceships) => {
      console.log(spaceships);
      setSpaceships(spaceships.results);
    });
  }, []);

  function openShipModal(ship) {
    setSelectedShip(ship);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setSelectedShip(null);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Spaceships</Text>
        <Input placeholder="Search starships..." />
        {spaceships.length === 0 ? (
          <Text style={styles.emptyText}>Loading spaceships...</Text>
        ) : (
          spaceships.map((item) => (
            <TouchableOpacity
              key={item.uid ?? item.name}
              style={styles.itemCard}
              onPress={() => openShipModal(item)}
            >
              <Text style={styles.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Starship Selected</Text>
            <Text style={styles.modalMessage}>
              You pressed: {selectedShip?.name}
            </Text>
            <Pressable style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Animated.View>
    </View>
  );
}
