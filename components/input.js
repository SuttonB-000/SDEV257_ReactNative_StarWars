// break the problem down --> seearch bar --> collect text input --> filter data based on input --> display filtered data

// imported resources
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';


// searchbar component
export default function Input(props) {
    return (
        <View>
            {/* displayes what ever is passed in as label */}
            <Text>{props.label}</Text>
            {/* ...props --> spread operator, takes everything passed in as props and sends to textinput */}
            <TextInput {...props} />
        </View>
    );
}
Input.propTypes={
    label: PropTypes.string,
};