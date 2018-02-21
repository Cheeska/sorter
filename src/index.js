class Sorter {

  constructor() {
    this.mass = new Array();
    this.length = 0;
    this.setComparator((left, right) => left - right);
  }

  add(element) {

    this.mass.push(element);
    this.length = this.mass.length;

  }

  at(index) {
      return this.mass[index];
  }

  get length() {
    console.log(this.length);
  }

  toArray() {
    var arr = new Array();
    for (var i = 0; i < this.length; i++)
        arr[i] = this.mass[i];
    return arr;
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;



