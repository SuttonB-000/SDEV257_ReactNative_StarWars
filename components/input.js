import React, { useState } from "react";
import { View, Button, TextInput, ScrollView } from "react-native";
import { ConfirmationModal } from "./ConfirmationModal";
import styles from "../styles.js";

export default function Input({ placeholder = "Search..." }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSearch() {
    setShowModal(true);
  }

  function confirmSearch() {
    setShowModal(false);

    console.log("Searching for:", searchTerm);

    // filter data here
  }

  return (
    <ScrollView contentContainerStyle={styles.inputWrapper} keyboardShouldPersistTaps="handled">
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <View style={styles.searchButtonContainer}>
        <Button title="Search" onPress={handleSearch} color="#2563eb" />
      </View>

      <ConfirmationModal
        visible={showModal}
        searchTerm={searchTerm}
        onConfirm={confirmSearch}
        onCancel={() => setShowModal(false)}
      />
    </ScrollView>
  );
}
