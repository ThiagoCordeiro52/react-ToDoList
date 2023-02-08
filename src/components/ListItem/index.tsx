import { Container } from './styles';
import { Item } from '../../types/Item';
import React, { ChangeEvent, useContext, useState } from 'react';

import { observer } from 'mobx-react-lite';
import TaskStore from '../../stores/TaskStore';

type ListItemProps = {
  item: Item;
};

export const ListItem = observer(({ item }: ListItemProps) => {
  const { setDone } = useContext(TaskStore);
  return (
    <Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => setDone(item.id)}
      ></input>
      <label>{item.name}</label>
    </Container>
  );
});
