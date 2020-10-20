// @flow

// 1.类型注释
const arr: Array<number> = [1,2,3]
arr.push('2')

// 2.类型推断

function split(str) {
  return str.split(' ')
}

split(11)

