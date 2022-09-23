const analyzeArray = {
    average(array) {
        const average = array.reduce((a, b) => a + b, 0) / array.length;
        return average;
    },

    findSmallest(array) {
        return Math.min.apply(Math, array);
    },

    findLargest(array) {
        return Math.max.apply(Math, array);
    },

    findLength(array) {
        return array.length;
    },
};
module.exports = analyzeArray;