/**
 * Create with IntelliJ IDEA
 * Author               : wangzhenpeng
 * Date                 : 2017/4/20
 * Time                 : 14:15
 * Description          :
 * deepStrictEqual与deepEqual基本相同。两点不同：对于原始值使用‘===’比较，
 * 对象类型属性还回使用恒等比较类型
 */

const assert = require('assert');


assert.deepEqual({a:1}, {a:'1'});

assert.deepEqual(1, '1');

assert.deepStrictEqual({a:1}, {a:'1'});