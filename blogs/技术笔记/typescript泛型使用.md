---
title: typescript泛型使用
date: 2024/02/02
tags:
  - Typescript
categories:
  - 技术笔记
---

# typescript 泛型使用

##### 一、泛型函数

正常函数

```
function getAge(age: number): number {
    return age;
}
```

使用泛型

```
function getAge<T>(age: T): T {
  return age;
}
console.log(getAge<number>(22)); // 22
```

> 注：泛型默认使用用 `<T>`来声明的

##### 二、泛型对象字面量

```
interface getAgeFn {
  <T>(age: T): T;
}

function getAge<T>(age: T): T {
  return age;
}

let myAge: {<T>(age: T): T} = getAge;

console.log(myAge<number>(23)); // 23
```

##### 三、泛型接口

在字面量的基础上封装一个泛型接口

```
interface getAgeFn {
  <T>(age: T): T;
}

function getAge<T>(age: T): T {
  return age;
}

let myAge: getAgeFn = getAge;

console.log(myAge<string>('24')); // 24
```

##### 四、泛型类

以下定义一下泛型类，传一个默认值，然后能过 `setAge`改成 `age`值，类型使用的是 `number`类型

```
class AgeClass<T> {
  age: T;
  setAge(x: T) {
    this.age = x;
  }
  constructor(defaultAge: T) {
    this.age = defaultAge;
  }
}

let myAge = new AgeClass<number>(10);

myAge.setAge(12);

console.log(myAge.age); // 12
```

##### 五、多个泛型声明

变量自定义，`,`逗号分隔即可

```
type Favorite<T1, T2, T3> = [T1, T2, T3];

const myFavorite: Favorite<string, string, string> = ['王者荣耀', '荒野求生', '蜘蛛侠'];

console.log(myFavorite); // ["王者荣耀", "荒野求生", "蜘蛛侠"]
```

##### 六、泛型继承

继承了其他接口就相当于受到了约束，而且传参方式也由单个参数转成了对象

```
interface Lengthwise {
  length: number;
}

function getAge<T extends Lengthwise>(age: T): T {
  return age;
}

console.log(getAge({length: 10, age: 33})); // {length: 10, age: 33}
```

##### 七、泛型数组

```
const bools: Array<boolean> = [true, false, true, true, true]

const queue: Array<{id: number, value: string }> = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
]
```

> PS：`Array<T>` 和 `T[]` 等价，都是声明数组类型，推荐后者。

##### 八、Set 和 Map

```
const fruits: Set<string> = new Set()

fruits.add('豌豆射手')
fruits.add('向日葵')
fruits.add('西瓜投手')
fruits.add('玉米大炮')

console.log(fruits.values()) // {"豌豆射手", "向日葵", "西瓜投手", "玉米大炮"}

const subjects: Map<string, number> = new Map()

subjects.set('语文', 91)
subjects.set('数学', 100)
subjects.set('英语', 92)
subjects.set('政治', 96)

console.log(subjects.values()) // {91, 100, 92, 96}
```

参考链接：

- [https://www.tslang.cn/docs/handbook/generics.html](https://www.tslang.cn/docs/handbook/generics.html)
- [https://www.jianshu.com/p/ee0af96e1cfb](https://www.jianshu.com/p/ee0af96e1cfb)
