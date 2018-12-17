let array = [10, 2, -10, 3, 4, 17, 54];

function findMin1(arr) {
    let min = "Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let findMin2 = arr => {
    let min = "Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
let findMin3 = function (arr) {
    let min = "Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log(findMin1(array));
console.log(findMin2(array));
console.log(findMin3(array));

function decideMinMax1(int, arr) {
    let min = "Infinity";
    let max = "-Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return int >= max ? "Max" : int <= min ? "Min" : "Not Min & Not Max";
}

let decideMinMax2 = (int, arr) => {
    let min = "Infinity";
    let max = "-Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return int >= max ? "Max" : int <= min ? "Min" : "Not Min & Not Max";
};
let decideMinMax3 = function (int, arr) {
    let min = "Infinity";
    let max = "-Infinity";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return int >= max ? "Max" : int <= min ? "Min" : "Not Min & Not Max";
};

console.log(decideMinMax1(-10, array));
console.log(decideMinMax2(100, array));
console.log(decideMinMax3(0, array));