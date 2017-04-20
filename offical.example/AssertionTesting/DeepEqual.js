/**
 * Create with IntelliJ IDEA
 * Author               : wangzhenpeng
 * Date                 : 2017/4/20
 * Time                 : 13:57
 * Description          : DeepAssert
 *
 * 只有可列举出的属性全部相等时，断言才成功
 */

const assert = require('assert');

// 不可列举的属性
assert.deepEqual(Error('a'), Error('b'));


const obj1 = {
    a : {
        b : 1
    }
};

const obj2 = {
    a : {
        b : 2
    }
};

const obj3 = {
    a : {
        b : 1
    }
};

const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);

// assert.deepEqual(obj1, obj2);

assert.deepEqual(obj1, obj3);
console.log(obj4);


assert.deepEqual(obj1, obj4);