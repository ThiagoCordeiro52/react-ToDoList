import { Item } from '../types/Item';

export function searchPosition(tasks: Item[], id: number): number {
  let min = 0;
  let max = tasks.length - 1;
  let guess: number;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (tasks[guess].id === id) {
      return guess;
    } else if (tasks[guess].id < id) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}
