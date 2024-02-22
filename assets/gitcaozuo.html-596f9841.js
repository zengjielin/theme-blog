import{_ as e,p as i,q as a,Z as d}from"./framework-053dfde5.js";const t={},n=d(`<h1 id="git-常用操作" tabindex="-1"><a class="header-anchor" href="#git-常用操作" aria-hidden="true">#</a> git 常用操作</h1><h5 id="创建本地分支-并切换到分支" tabindex="-1"><a class="header-anchor" href="#创建本地分支-并切换到分支" aria-hidden="true">#</a> 创建本地分支，并切换到分支</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;branch-name&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="本地有分支-远程没有" tabindex="-1"><a class="header-anchor" href="#本地有分支-远程没有" aria-hidden="true">#</a> 本地有分支，远程没有</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> git push --set-upstream origin &lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="用于将在其他分支上的-commit-修改-移植到当前的分支" tabindex="-1"><a class="header-anchor" href="#用于将在其他分支上的-commit-修改-移植到当前的分支" aria-hidden="true">#</a> 用于将在其他分支上的 commit 修改，移植到当前的分支</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git cherry-pick &lt;commit-id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="回滚到某次提交" tabindex="-1"><a class="header-anchor" href="#回滚到某次提交" aria-hidden="true">#</a> 回滚到某次提交</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard &lt;commit-id&gt;

git push --force //强行推送
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除某次提交" tabindex="-1"><a class="header-anchor" href="#删除某次提交" aria-hidden="true">#</a> 删除某次提交</h5><p>大致的意思就是我先提交的是 a，又提交了 b，c 是我最近的一次提交。然后项目变动，b 的这次改动不需要提交了，怎么把 b 的这次 commit 去掉，还不影响 c。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase -i  &lt;需要删除的上一次提交的commit-id&gt; //注意指的是例子中a提交的commit

回车后找到要删除的commitid ，将pick修改成drop，保存退出

git push --force //强行推送
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[n];function r(c,l){return i(),a("div",null,s)}const h=e(t,[["render",r],["__file","gitcaozuo.html.vue"]]);export{h as default};
