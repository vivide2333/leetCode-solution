function twoSum(arr, target) {
    const map = {};
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const flag = target - item;
        if (typeof map[item] === 'number') {
            return [i, map[item]]
        } else {
            map[flag] = i
        }

    }
    return []
}


const a = [1,2,3,4,5]

console.log(twoSum(a, 8))