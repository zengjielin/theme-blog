---
title: git 常用操作
date: 2024/02/02
tags:
  - Git
categories:
  - 技术笔记
---

# git 常用操作

##### 创建本地分支，并切换到分支

```
git checkout -b <branch-name>

```

##### 本地有分支，远程没有

```
 git push --set-upstream origin <branch-name>
```

##### 用于将在其他分支上的 commit 修改，移植到当前的分支

```
git cherry-pick <commit-id>
```

##### 回滚到某次提交

```
git reset --hard <commit-id>

git push --force //强行推送
```

##### 删除某次提交

大致的意思就是我先提交的是 a，又提交了 b，c 是我最近的一次提交。然后项目变动，b 的这次改动不需要提交了，怎么把 b 的这次 commit 去掉，还不影响 c。

```
git rebase -i  <需要删除的上一次提交的commit-id> //注意指的是例子中a提交的commit

回车后找到要删除的commitid ，将pick修改成drop，保存退出

git push --force //强行推送
```
