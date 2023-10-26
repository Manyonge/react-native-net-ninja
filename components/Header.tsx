import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
});
