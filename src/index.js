class Sorter {

    mass;

  constructor() {
    this.mass =  new Array();
  }

  add(element) {

    this.mass.add(element);

  }

  at(index) {
    // your implementation
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

module.exports = Sorter;

