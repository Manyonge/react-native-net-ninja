import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export function AddToDo(props: { handleSubmit: any }) {
  const { handleSubmit } = props;
  const [value, setValue] = useState("");
  const handleTextChange = (val: string) => {
    setValue(val);
  };

  return (
    <View>
      <TextInput
        onChangeText={handleTextChange}
        style={styles.input}
        placeholder="New todo..."
      />
      <View style={styles.buttonContainer}>
        <Button
          title={"ADD TODO"}
          onPress={() => handleSubmit(value)}
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "coral",
  },
});
