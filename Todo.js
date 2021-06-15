import React from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Todo = (props) => {
  return (
    <TouchableOpacity>
      <Text style={styles.baseText}>
        {props.text}
        <Ionicons
          name="ios-trash-outline"
          color={`${props.text.length > 0 ? "black" : "grey"}`}
          size={23}
        />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Todo;
