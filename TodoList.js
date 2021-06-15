import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { StyleSheet, Text, View } from "react-native";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log(todos, "showing todos");
  return (
    <View>
      <TodoForm
        onSubmit={(todo) =>
          todo && todo.length > 0
            ? setTodos([todo, ...todos])
            : alert("enter some text")
        }
      />
      {todos.map((item, i) => (
        <Todo key={i} text={item}></Todo>
      ))}
    </View>
  );
}
