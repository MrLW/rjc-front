# rjc-front

> web 聊天的网页版
项目遇到的问题
```
// 注意这里如果是function的话,则this.$router 获取不到
this.$socket.emit("/user/regist",user,msg=>{
    if(msg["result"]){
        // 跳转到登陆页面
        this.$router.push("/");
    }
})
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
