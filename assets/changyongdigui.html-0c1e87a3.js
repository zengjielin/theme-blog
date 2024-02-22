import{_ as e,p as i,q as n,Z as d}from"./framework-053dfde5.js";const a={},r=d(`<h1 id="常用递归" tabindex="-1"><a class="header-anchor" href="#常用递归" aria-hidden="true">#</a> 常用递归</h1><h5 id="向上递归获取部门-id-路径" tabindex="-1"><a class="header-anchor" href="#向上递归获取部门-id-路径" aria-hidden="true">#</a> 向上递归获取部门 id 路径</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const originData: any[] = treeData // 接口返回的部门树数据

const recursionDepartmentIdPath = (data: any[], id: string, arr: string[]) =&gt; {
  data.forEach((item: any) =&gt; {
    if(item.id === id) {
      arr.unshift(id)
      if(item.parentid) {
        recursionDepartmentIdPath(originData, item.parentid, arr)
      }
    } else if(item.children.length) {
      recursionDepartmentIdPath(item.children, id, arr)
    }
  })
}

let deptIdArr: string [] = []
recursionDepartmentIdPath(originData, 3, deptIdArr)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="递归去空-children" tabindex="-1"><a class="header-anchor" href="#递归去空-children" aria-hidden="true">#</a> 递归去空 children</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function recurveDelEmpty(data) {
  data.forEach(item =&gt; {
    if(item.children.length) {
      recurveDelEmpty(item.children)
    } else {
      delete item.children
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="获取后代分类-ids" tabindex="-1"><a class="header-anchor" href="#获取后代分类-ids" aria-hidden="true">#</a> 获取后代分类 ids</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getPosterityCategoryIds(list, pid, arr) {
  list.forEach(item =&gt; {
    if(item.pid == pid) {
      arr.push(item.id)
      getPosterityCategoryIds(list, item.id, arr)
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[r];function l(t,c){return i(),n("div",null,s)}const u=e(a,[["render",l],["__file","changyongdigui.html.vue"]]);export{u as default};
