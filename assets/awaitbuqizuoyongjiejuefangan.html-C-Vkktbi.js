import{_ as e,o as n,c as i,b as s}from"./app-C1UKEBg0.js";const a={},d=s(`<h1 id="在foreach中使用async-await不起作用解决方案" tabindex="-1"><a class="header-anchor" href="#在foreach中使用async-await不起作用解决方案" aria-hidden="true">#</a> 在forEach中使用async/await不起作用解决方案</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function test() {
 let arr = [1, 2, 3]
 arr.forEach(async item =&gt; {
  const res = await fetch(item)
  console.log(res)
 })
 console.log(&#39;end&#39;)
}

function fetch(x) {
 return new Promise((resolve, reject) =&gt; {
     resolve(x)
 })
}

test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考如上代码、我们预期结果是先输出1，2，3，然后因为等待异步结果最后输出end</p><p>但是实际上输出却是end先输出，才到1，2，3。</p><p>原因如下：</p><p>1、首先这是因为foreach是没有return返回值的（可以自己去跟下源码，<code>foreach</code>内部实现只是简单的回调）</p><p>2、而foreach里面的回调函数因为加了async的原因，所以默认会返回一个promise，但是因为foreach的实现并没有返回值，所以导致返回的这个promise对象没人去管了</p><p>首先为了保证end最后输出，我们肯定要先等待循环的返回结果因此改成如下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
 let arr = [1, 2, 3]
 await arr.forEach(async item =&gt; {
  const res = await fetch(item)
  console.log(res)
 })
 console.log(&#39;end&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样改之后依然行不通，原因是 <code>foreach</code>没有返回值，所以我们必须保证循环能够有返回值，所以要将foreach改成map</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
 let arr = [1, 2, 3]
 await arr.map(async item =&gt; {
  const res = await fetch(item)
  console.log(res)
 })
 console.log(&#39;end&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果依然不行，然后我们会发现其实 <code>map</code>返回的并不是一个promise对象，而是一个包含promise对象的数组 <code>[promise, promise, promise]</code>，其中每个promise对象都是循环迭代产生的结果。而await是处理不了数组的，它只能处理promise对象。考虑到这一点我们基本上就差不多知道如何改正了、有两种方法。</p><p>第一是将循环改成常规的遍历方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
 let arr = [1, 2, 3]
 for(let i in arr){
   const res = await fetch(arr[i])
   console.log(res)          
 }
 console.log(&#39;end&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种就比较高端了，使用 <code>Promise.all()</code>，这是一个专门处理promise数组的方法，当async标记的箭头函数返回一个promise对象时，<code>map</code>方法得到的就是一个promise对象数组，然后我们将这个数组丢给 <code>Promise.all()</code>去依次执行，然后只需要使用 <code>await</code>去等待执行结果，就能保证后面的end在得到结果后才会被输出，得到最终输出结果1，2，3，end</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
 let arr = [1, 2, 3]
 await Promise.all(arr.map(async item =&gt; {
  const res = await fetch(item)
  console.log(res)
 }))
 console.log(&#39;end&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[d];function r(c,t){return n(),i("div",null,l)}const v=e(a,[["render",r],["__file","awaitbuqizuoyongjiejuefangan.html.vue"]]);export{v as default};
