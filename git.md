## 开发错分支
```text
git add .      (把所有改动暂存)
 
git stash     (把暂存的文件提交到git的暂存栈)
 
git checkout 本该提交代码的分支 
 
git stash pop (将暂存栈中的代码放出来)
```

## 代码不但改了，还提交了怎么办。
git  checkout 不该提交代码提交了代码的分支
 
git reset HEAD~1  （最近一次提交放回暂存区, 并取消此次提交）
 
git stash                   (把暂存的文件提交到git的暂存栈)
 
git checkout 该提交代码的分支
 
git stash pop

等你把代码提交到了正确的分支后，再次切到刚刚错的分支

git push origin 错误的分支 -f  (把不该上去的文件回退掉)