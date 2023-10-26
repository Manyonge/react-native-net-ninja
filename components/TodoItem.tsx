import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function TodoItem(props: {
  item: { text: string; key: string };
  handlePress: any;
}) {
  const { item, handlePress } = props;
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.item}> {item.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
