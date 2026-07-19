import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { ConfirmationModal } from "./ConfirmationModal";

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
        <View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 8,
                    marginBottom: 10,
                }}
                placeholder={placeholder}
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <Button title="Search" onPress={handleSearch} />

            <ConfirmationModal
                visible={showModal}
                searchTerm={searchTerm}
                onConfirm={confirmSearch}
                onCancel={() => setShowModal(false)}
            />
        </View>
    );
}
