import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';

type AddTaskProps = {
  onEnter: (taskName: string) => void;
};

export function AddTask({ onEnter }: AddTaskProps) {
  const [inputText, setInputText] = useState('');

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Enter' && inputText) {
      onEnter(inputText);
      setInputText('');
    }
  }
  return (
    <Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Add a task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
}
