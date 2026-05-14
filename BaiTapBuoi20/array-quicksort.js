//ex01:
const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

let max = 0;
let secondMax = 0;

for (let number of numbers) {
    if (number > max) {
        secondMax = max;
        max = number;
    }

    else if (number > secondMax && number < max) {
        secondMax = number;
    }
}

console.log(secondMax);

//ex02:
const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

// Step 1: merge array
const mergedArray = [...classA, ...classB];

console.log(mergedArray);

// Step 2: Remove duplicates
const uniqueObject = {};
const uniqueArray = [];

for (let number of mergedArray) {

    if (!uniqueObject[number]) {

        uniqueObject[number] = true;

        uniqueArray.push(number);
    }
}

console.log(uniqueArray);

// Step 3: Quick Sort
function quickSort(nums) {

    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);

    const pivot = nums[mid];

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < nums.length; i= i + 1) {

        if (i === mid) {
            continue;
        }

        if (nums[i] < pivot) {

            leftArr.push(nums[i]);

        } else {

            rightArr.push(nums[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Step 4: Sort
const sortedArray = quickSort(uniqueArray);

console.log(sortedArray);