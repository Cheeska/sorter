class Sorter {

  constructor() {
    this.mass = new Array();
  }

  add(element) {

    this.mass.push(element);

  }

  at(index) {
      return this.mass[index];
  }

  get length() {
    console.log(this.mass.length);
  }

  toArray() {
    // your implementation
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

//module.exports = Sorter;

let sorter;
sorter = new Sorter();
sorter.add(5);

