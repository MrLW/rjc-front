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