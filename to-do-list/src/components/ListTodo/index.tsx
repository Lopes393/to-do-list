import { useState } from "react";
import { Item } from "../../types/item";
import * as Styles from "./styles";

type Props = {
  todo: Item;
};

export function ListTodo({ todo }: Props) {
  const [isChecked, setIsChecked] = useState(todo.done);
  return (
    <Styles.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{todo.name}</label>
    </Styles.Container>
  );
}
