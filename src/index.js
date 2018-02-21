'use strict'

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

    toArray() {
        var arr = new Array();
        for (var i = 0; i < this.length; i++)
            arr[i] = this.mass[i];
        return arr;
    }

    sort(indices) {

        var sortMass = new Array();
        var lengtIndices = indices.length;

        for (var i = 0; i < lengtIndices; i++) {
            sortMass.push(this.mass[lengtIndices[i]]);
        }

        sortMass.sort(this.compareFunction);

        for (var i = 0; i < lengtIndices; i++) {
                this.mass[indices[i]] = sortMass[i];
        }
    }
    
    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}