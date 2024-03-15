import{_ as d,r as a,o as l,c as t,d as e,e as i,f as s,b as r}from"./app-B6PcXgvS.js";const c={},v=r(`<h1 id="typescript-泛型使用" tabindex="-1"><a class="header-anchor" href="#typescript-泛型使用" aria-hidden="true">#</a> typescript 泛型使用</h1><h5 id="一、泛型函数" tabindex="-1"><a class="header-anchor" href="#一、泛型函数" aria-hidden="true">#</a> 一、泛型函数</h5><p>正常函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getAge(age: number): number {
    return age;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用泛型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getAge&lt;T&gt;(age: T): T {
  return age;
}
console.log(getAge&lt;number&gt;(22)); // 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：泛型默认使用用 <code>&lt;T&gt;</code>来声明的</p></blockquote><h5 id="二、泛型对象字面量" tabindex="-1"><a class="header-anchor" href="#二、泛型对象字面量" aria-hidden="true">#</a> 二、泛型对象字面量</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface getAgeFn {
  &lt;T&gt;(age: T): T;
}

function getAge&lt;T&gt;(age: T): T {
  return age;
}

let myAge: {&lt;T&gt;(age: T): T} = getAge;

console.log(myAge&lt;number&gt;(23)); // 23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三、泛型接口" tabindex="-1"><a class="header-anchor" href="#三、泛型接口" aria-hidden="true">#</a> 三、泛型接口</h5><p>在字面量的基础上封装一个泛型接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface getAgeFn {
  &lt;T&gt;(age: T): T;
}

function getAge&lt;T&gt;(age: T): T {
  return age;
}

let myAge: getAgeFn = getAge;

console.log(myAge&lt;string&gt;(&#39;24&#39;)); // 24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="四、泛型类" tabindex="-1"><a class="header-anchor" href="#四、泛型类" aria-hidden="true">#</a> 四、泛型类</h5><p>以下定义一下泛型类，传一个默认值，然后能过 <code>setAge</code>改成 <code>age</code>值，类型使用的是 <code>number</code>类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class AgeClass&lt;T&gt; {
  age: T;
  setAge(x: T) {
    this.age = x;
  }
  constructor(defaultAge: T) {
    this.age = defaultAge;
  }
}

let myAge = new AgeClass&lt;number&gt;(10);

myAge.setAge(12);

console.log(myAge.age); // 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="五、多个泛型声明" tabindex="-1"><a class="header-anchor" href="#五、多个泛型声明" aria-hidden="true">#</a> 五、多个泛型声明</h5><p>变量自定义，<code>,</code>逗号分隔即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Favorite&lt;T1, T2, T3&gt; = [T1, T2, T3];

const myFavorite: Favorite&lt;string, string, string&gt; = [&#39;王者荣耀&#39;, &#39;荒野求生&#39;, &#39;蜘蛛侠&#39;];

console.log(myFavorite); // [&quot;王者荣耀&quot;, &quot;荒野求生&quot;, &quot;蜘蛛侠&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="六、泛型继承" tabindex="-1"><a class="header-anchor" href="#六、泛型继承" aria-hidden="true">#</a> 六、泛型继承</h5><p>继承了其他接口就相当于受到了约束，而且传参方式也由单个参数转成了对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Lengthwise {
  length: number;
}

function getAge&lt;T extends Lengthwise&gt;(age: T): T {
  return age;
}

console.log(getAge({length: 10, age: 33})); // {length: 10, age: 33}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="七、泛型数组" tabindex="-1"><a class="header-anchor" href="#七、泛型数组" aria-hidden="true">#</a> 七、泛型数组</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const bools: Array&lt;boolean&gt; = [true, false, true, true, true]

const queue: Array&lt;{id: number, value: string }&gt; = [
  { id: 1, value: &#39;a&#39; },
  { id: 2, value: &#39;b&#39; },
  { id: 3, value: &#39;c&#39; },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PS：<code>Array&lt;T&gt;</code> 和 <code>T[]</code> 等价，都是声明数组类型，推荐后者。</p></blockquote><h5 id="八、set-和-map" tabindex="-1"><a class="header-anchor" href="#八、set-和-map" aria-hidden="true">#</a> 八、Set 和 Map</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const fruits: Set&lt;string&gt; = new Set()

fruits.add(&#39;豌豆射手&#39;)
fruits.add(&#39;向日葵&#39;)
fruits.add(&#39;西瓜投手&#39;)
fruits.add(&#39;玉米大炮&#39;)

console.log(fruits.values()) // {&quot;豌豆射手&quot;, &quot;向日葵&quot;, &quot;西瓜投手&quot;, &quot;玉米大炮&quot;}

const subjects: Map&lt;string, number&gt; = new Map()

subjects.set(&#39;语文&#39;, 91)
subjects.set(&#39;数学&#39;, 100)
subjects.set(&#39;英语&#39;, 92)
subjects.set(&#39;政治&#39;, 96)

console.log(subjects.values()) // {91, 100, 92, 96}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>`,27),u={href:"https://www.tslang.cn/docs/handbook/generics.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jianshu.com/p/ee0af96e1cfb",target:"_blank",rel:"noopener noreferrer"};function g(m,b){const n=a("ExternalLinkIcon");return l(),t("div",null,[v,e("ul",null,[e("li",null,[e("a",u,[i("https://www.tslang.cn/docs/handbook/generics.html"),s(n)])]),e("li",null,[e("a",o,[i("https://www.jianshu.com/p/ee0af96e1cfb"),s(n)])])])])}const p=d(c,[["render",g],["__file","typescriptfanxingshiyong.html.vue"]]);export{p as default};
