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
        var lenghtIndices = indices.length;

        for (var i = 0; i < lenghtIndices; i++) {
            sortMass.push(this.mass[indices[i]]);
        }

        sortMass.sort(this.compareFunction);

        for (var i = 0; i < lenghtIndices; i++) {
                this.mass[indices[i]] = sortMass[i];
        }
    }
    
    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}
module.exports = Sorter;


//sorter = new Sorter();

//sorter.add(5);
//sorter.sort([0]);

//console.log(sorter.toArray());
