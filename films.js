import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { getFilms } from "./Swapi.js";
import styles from "./styles.js";
import Input from "./components/input.js";

export default function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getFilms().then((films) => {
      console.log(films);
      setFilms(films.result);
    });
  }, []);

  function openFilmModal(film) {
    setSelectedFilm(film);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setSelectedFilm(null);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenHeader}>Films</Text>
        <Input placeholder="Search films..." />
        {films.length === 0 ? (
          <Text style={styles.emptyText}>Loading films...</Text>
        ) : (
          films.map((item) => (
            <TouchableOpacity
              key={item.uid}
              style={styles.itemCard}
              onPress={() => openFilmModal(item)}
            >
              <Text style={styles.itemTitle}>{item.properties.title}</Text>
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
              <Text style={styles.modalTitle}>Film Selected</Text>
              <Text style={styles.modalMessage}>
                You pressed: {selectedFilm?.properties.title}
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

