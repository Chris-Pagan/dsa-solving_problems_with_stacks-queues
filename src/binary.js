const Queue = require("./lib/queue")

const binary = (max) => {
    const nums = new Queue();
    nums.enqueue("1");
    let result = []

    for (let i = 1; i <= max; i++){
        let newNum = nums.dequeue();
        result.push(newNum)
        nums.enqueue(newNum.concat("0"));
        nums.enqueue(newNum.concat("1"));
    }
    return result;
};

module.exports = binary;
