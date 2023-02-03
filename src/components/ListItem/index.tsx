import { Container } from './styles';
import { Item } from '../../types/Item';

type ListItemProps = {
  item: Item;
};

export function ListItem({ item }: ListItemProps) {
  return <Container>{item.name}</Container>;
}
