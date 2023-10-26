import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { AddToDo, Header, TodoItem } from "./components";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handlePress = (key: string) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.key !== key));
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = (value: string) => {
    if (value.length < 3) {
      Alert.alert("OOPS!", "Todos must be more than 3 characters long ", [
        {
          text: "ok",
        },
      ]);
      return;
    }

    setTodos((oldTodos) => [
      { text: value, key: Math.random().toString() },
      ...oldTodos,
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo handleSubmit={handleSubmit} />
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePress} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  item: {
    backgroundColor: "pink",
    marginBottom: 20,
    marginHorizontal: 20,
    height: 150,
  },
});
