import { useState, KeyboardEvent } from "react";
import * as Styles from "./styles";

type Props = {
  onEnter: (name: string) => void;
};
export function AddArea({ onEnter }: Props) {
  const [inputTexr, setInputText] = useState("");

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter" && inputTexr.trim() !== "") {
      onEnter(inputTexr);
      setInputText("");
    }
  }

  return (
    <Styles.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputTexr}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Styles.Container>
  );
}
