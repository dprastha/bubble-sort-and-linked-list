import { Sorter } from './Sorter';

class Nodes {
  next: Nodes | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Nodes | null = null;

  add(data: number): void {
    const nodes = new Nodes(data);

    if (!this.head) {
      this.head = nodes;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = nodes;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let nodes = this.head;
    while (nodes.next) {
      length++;
      nodes = nodes.next;
    }

    return length;
  }

  at(index: number): Nodes {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let nodes: Nodes | null = this.head;
    while (nodes) {
      if (counter === index) {
        return nodes;
      }

      counter++;
      nodes = nodes.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rigthNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rigthNode.data;
    rigthNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let nodes: Nodes | null = this.head;
    while (nodes) {
      console.log(nodes.data);
      nodes = nodes.next;
    }
  }
}
