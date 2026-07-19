import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

export function ConfirmationModal({ visible, searchTerm, onConfirm, onCancel }) {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirm search</Text>
          <Text style={styles.message}>Search for "{searchTerm}"?</Text>
          <View style={styles.actions}>
            <Button title="Cancel" onPress={onCancel} />
            <Button title="Confirm" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  modal: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
