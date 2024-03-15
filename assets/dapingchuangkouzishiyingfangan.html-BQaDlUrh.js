import{_ as l,r as s,o as a,c as d,d as e,e as t,f as n,b as r}from"./app-B6PcXgvS.js";const v={},c=e("h1",{id:"大屏窗口自适应方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#大屏窗口自适应方案","aria-hidden":"true"},"#"),t(" 大屏窗口自适应方案")],-1),u={id:"v-scale-screen",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#v-scale-screen","aria-hidden":"true"},"#",-1),m={href:"https://github.com/zhangqh22/v-scale-screen",target:"_blank",rel:"noopener noreferrer"},g=r(`<blockquote><p>大屏自适应容器组件，可用于大屏项目开发，实现屏幕自适应，可根据宽、高、宽高比进行自适应，实现全屏自适应。</p><p>在 2.2.0+版本中，我们同时支持 vue&gt;=v3 或者 &lt;=2.7，如果您的项目是 v2.6 版本以下，则使用 1.x 版本。</p></blockquote><ul><li><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install v-scale-screen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>全局使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;v-scale-screen width=&quot;1920&quot; height=&quot;1080&quot;&gt;
    &lt;div&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
    &lt;/div&gt;
  &lt;/v-scale-screen&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 vue3 中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;v-scale-screen width=&quot;1920&quot; height=&quot;1080&quot;&gt;
    &lt;div&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
      &lt;v-chart&gt;....&lt;/v-chart&gt;
    &lt;/div&gt;
  &lt;/v-scale-screen&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent } from &#39;vue&#39;
import VScaleScreen from &#39;v-scale-screen&#39;

export default defineComponent({
  name: &#39;Demo&#39;,
  components: {
    VScaleScreen
  }
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="fitscreen" tabindex="-1"><a class="header-anchor" href="#fitscreen" aria-hidden="true">#</a> FitScreen</h2><blockquote><p>是通过 css 的 transform 的 scale 属性来进行一个 等比例缩放 来实现屏幕适配的。</p></blockquote><ul><li><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @fit-screen/vue @vue/composition-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>全局使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// In main.[jt]s
import { createApp } from &#39;vue&#39;
import FitScreen from &#39;@fit-screen/vue&#39;
import App from &#39;./App.vue&#39;

const app = createApp(App)
app.use(FitScreen)
app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;FitScreen :width=&quot;1920&quot; :height=&quot;1080&quot; mode=&quot;fit&quot;&gt;
    &lt;div&gt;
      &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot;&gt;
        &lt;img src=&quot;/vite.svg&quot; class=&quot;logo&quot; alt=&quot;Vite logo&quot;&gt;
      &lt;/a&gt;
      &lt;a href=&quot;https://vuejs.org/&quot; target=&quot;_blank&quot;&gt;
        &lt;img src=&quot;./assets/vue.svg&quot; class=&quot;logo vue&quot; alt=&quot;Vue logo&quot;&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;HelloWorld msg=&quot;Vite + Vue&quot; /&gt;
  &lt;/FitScreen&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Vue SFC 单文件组件中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import FitScreen from &#39;@fit-screen/vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;FitScreen :width=&quot;1920&quot; :height=&quot;1080&quot; mode=&quot;fit&quot;&gt;
    &lt;div&gt;
      &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot;&gt;
        &lt;img src=&quot;/vite.svg&quot; class=&quot;logo&quot; alt=&quot;Vite logo&quot;&gt;
      &lt;/a&gt;
      &lt;a href=&quot;https://vuejs.org/&quot; target=&quot;_blank&quot;&gt;
        &lt;img src=&quot;./assets/vue.svg&quot; class=&quot;logo vue&quot; alt=&quot;Vue logo&quot;&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;HelloWorld msg=&quot;Vite + Vue&quot; /&gt;
  &lt;/FitScreen&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 react 中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @fit-screen/react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useState } from &#39;react&#39;
import FitScreen from &#39;@fit-screen/react&#39;

function App() {
  const [count, setCount] = useState(0)

  return (
    &lt;FitScreen width={1920} height={1080} mode=&quot;fit&quot;&gt;
      &lt;div className=&quot;App&quot;&gt;
        &lt;div&gt;
          &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;&gt;
            &lt;img src=&quot;/vite.svg&quot; className=&quot;logo&quot; alt=&quot;Vite logo&quot; /&gt;
          &lt;/a&gt;
          &lt;a href=&quot;https://reactjs.org&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;&gt;
            React logo
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;h1&gt;Vite + React&lt;/h1&gt;
        &lt;div className=&quot;card&quot;&gt;
          &lt;button onClick={() =&gt; setCount(count =&gt; count + 1)}&gt;
            count is {count}
          &lt;/button&gt;
          &lt;p&gt;
            Edit &lt;code&gt;src/App.tsx&lt;/code&gt; and save to test HMR
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;p className=&quot;read-the-docs&quot;&gt;
          Click on the Vite and React logos to learn more
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/FitScreen&gt;
  )
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>`,6),b={href:"https://github.com/xiaohaijoe/ReactScaleView",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/china78/tgg-large-screen",target:"_blank",rel:"noopener noreferrer"};function h(q,f){const i=s("ExternalLinkIcon");return a(),d("div",null,[c,e("h3",u,[o,t(),e("a",m,[t("v-scale-screen"),n(i)])]),g,e("ul",null,[e("li",null,[e("a",b,[t("ReactScaleView"),n(i)])]),e("li",null,[e("a",p,[t("tgg-large-screen"),n(i)])])])])}const _=l(v,[["render",h],["__file","dapingchuangkouzishiyingfangan.html.vue"]]);export{_ as default};
