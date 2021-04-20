[本人github](https://github.com/codehzy)

<a name="788c66a5"></a>
# 各软件版本


1. redis-5.0.2
1. mongodb-osx-ssl-x86_64-4.0.4
1. easy-mock 最新版
1. node 8.9.1 (一定要是 8.9 版本，开始用了高版本装不起来，建议用 nvm 管理 node 版本)
<a name="2e8e4411"></a>
# 安装 redis

<br />下载 [http://download.redis.io/releases/redis-5.0.2.tar.gz](http://download.redis.io/releases/redis-5.0.2.tar.gz) 并解压<br />到下载目录`/Users/frru/Downloads`执行<br />

```markdown
sudo mv redis-5.0.2 /usr/local/redis
cd /usr/local/redis
sudo make test
sudo make install
redis-server
```


<a name="845ec475"></a>
# 安装 mongodb

<br />下载 [https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.4.tgz](https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.4.tgz) 并解压<br />到下载目录`/Users/frru/Downloads`执行<br />

```
sudo mv mongodb-osx-x86_64-4.0.4 /usr/local/mongodb
```

<br />`/Users/frru/.bash_profile`(如果没有则创建) 文件中添加环境变量<br />

```
export PATH=/usr/local/mongodb/bin:${PATH}
```

<br />到 Home 目录`/Users/frru`执行<br />

```
source ~/.bash_profile
```

<br />到 Home 目录`/Users/frru`执行<br />

```markdown
sudo mkdir -p /mongodb/data/db

// 此处可能有坑
因为mac中有些文件夹是只读的不让改，我们进入
cd /User/hzy/
mkdir ~/data/db
```

<br />到 mongodb 安装目录的 bin 目录`/usr/local/mongodb/bin`执行<br />

```markdown
./mongod --dbpath /Users/frru/mongodb/data/db
./mongo // 如果是再次启动，貌似不需要这句了
```


<a name="7d88d10e"></a>
# 安装 easy-mock

<br />到 Home 目录`/Users/frru`执行<br />

```
git clone https://github.com/easy-mock/easy-mock.git
cd easy-mock && npm install
```

<br />启动：到 easy-mock 项目目录`/Users/frru/easy-mock`执行<br />

```
nvm use 8.9.1
npm run dev
```


<a name="d5c0ebde"></a>
# 访问

<br />[http://localhost:7300](http://localhost:7300)<br />

<a name="ZIwU2"></a>
# 坑

1. easy-mock源代码中easy-mock\config\default.json 里的host配置值，将host改成localhost
1. 启动错误：利用n管理包，将node版本降到8.9.0，否则运行失败



<a name="l2sqX"></a>
# 常用执行
```markdown
cd /usr/local/mongodb/bin && mongod --dbpath /Users/hzy/data/db
redis-server
cd Downloads/easy-mock && npm run dev
```
原文地址 [www.jianshu.com](https://www.jianshu.com/p/8c40dbda6e87)


