import { Container } from './styles';
import { Item } from '../../types/Item';
import React, { ChangeEvent, useState } from 'react';

type ListItemProps = {
  item: Item;
};

export function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setIsChecked(event.target.checked)
        }
      ></input>
      <label>{item.name}</label>
    </Container>
  );
}
