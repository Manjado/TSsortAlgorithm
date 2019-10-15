import { Sorter } from './Sorter';
export class NumbersCollection extends Sorter {
  // data: number[];
  // constructor(data: number[]) {
  //   this.data = data;
  // }

  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

// abstract class:
// - can't be used to create an object directly
// - only used as a parent class
// - can contain real implementation for some methods
// - the implemented methods can refer to other methods that don't actually exist yet
// (we still have to provide names and types for the un-implemented methods)
// - can make child classes promise to implement some other method
