---
title: 在forEach中使用async/await不起作用解决方案
date: 2024/02/02
tags:
  - Javascript
categories:
  - 技术笔记
---


# 在forEach中使用async/await不起作用解决方案

```
function test() {
 let arr = [1, 2, 3]
 arr.forEach(async item => {
  const res = await fetch(item)
  console.log(res)
 })
 console.log('end')
}

function fetch(x) {
 return new Promise((resolve, reject) => {
     resolve(x)
 })
}

test()
```

思考如上代码、我们预期结果是先输出1，2，3，然后因为等待异步结果最后输出end

但是实际上输出却是end先输出，才到1，2，3。

原因如下：

1、首先这是因为foreach是没有return返回值的（可以自己去跟下源码，`foreach`内部实现只是简单的回调）

2、而foreach里面的回调函数因为加了async的原因，所以默认会返回一个promise，但是因为foreach的实现并没有返回值，所以导致返回的这个promise对象没人去管了

首先为了保证end最后输出，我们肯定要先等待循环的返回结果因此改成如下代码

```
async function test() {
 let arr = [1, 2, 3]
 await arr.forEach(async item => {
  const res = await fetch(item)
  console.log(res)
 })
 console.log('end')
}
```

但是这样改之后依然行不通，原因是 `foreach`没有返回值，所以我们必须保证循环能够有返回值，所以要将foreach改成map

```
async function test() {
 let arr = [1, 2, 3]
 await arr.map(async item => {
  const res = await fetch(item)
  console.log(res)
 })
 console.log('end')
}
```


结果依然不行，然后我们会发现其实 `map`返回的并不是一个promise对象，而是一个包含promise对象的数组 `[promise, promise, promise]`，其中每个promise对象都是循环迭代产生的结果。而await是处理不了数组的，它只能处理promise对象。考虑到这一点我们基本上就差不多知道如何改正了、有两种方法。

第一是将循环改成常规的遍历方式

```
async function test() {
 let arr = [1, 2, 3]
 for(let i in arr){
   const res = await fetch(arr[i])
   console.log(res)          
 }
 console.log('end')
}
```

第二种就比较高端了，使用 `Promise.all()`，这是一个专门处理promise数组的方法，当async标记的箭头函数返回一个promise对象时，`map`方法得到的就是一个promise对象数组，然后我们将这个数组丢给 `Promise.all()`去依次执行，然后只需要使用 `await`去等待执行结果，就能保证后面的end在得到结果后才会被输出，得到最终输出结果1，2，3，end

```
async function test() {
 let arr = [1, 2, 3]
 await Promise.all(arr.map(async item => {
  const res = await fetch(item)
  console.log(res)
 }))
 console.log('end')
}
```
