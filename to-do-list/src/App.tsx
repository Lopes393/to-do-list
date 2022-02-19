import { useState } from "react";
import { Item } from "./types/item";
import { ListTodo } from "./components/ListTodo";
import { AddArea } from "./components/AddArea";
import * as Styles from "./App.styles";

export function App() {
  const [todos, setTodos] = useState<Item[]>([]);

  function handleAddTask(name: string) {
    let newTodoList = [...todos];
    newTodoList.push({ id: newTodoList.length + 1, name: name, done: false });

    setTodos(newTodoList);
  }
  return (
    <Styles.Container>
      <Styles.Area>
        <Styles.Header>Lista de Tarefas</Styles.Header>
        <AddArea onEnter={handleAddTask} />
        {todos.map((todo, index) => (
          <ListTodo key={index} todo={todo} />
        ))}
      </Styles.Area>
    </Styles.Container>
  );
}
