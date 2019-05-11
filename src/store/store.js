import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import api from '../api/api';
import router from "../router/index" 
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        available:false,
        imageUrl:'static/image/outline.png'
    },
    actions: {
        checkServer(context){
            axios.get("http://localhost:10001/user/ping/").then(res=>{
                context.commit("checkServer",{available:res?true:false,imageUrl:"static/image/online.png"});
            })
        },
        async login(ctx,user){
            if(user.userName === "张三" && user.password === "123456"){
                alert('跳转成功');
                return router.push({
                    path: 'main'
                });
            }
            let authResult = await api.post('/user/auth',{
                userName:user.userName,
                password:user.password
            })
            let u = authResult['data'];
            if(!u) {
                return alert('登陆失败:'+authResult['data']['error']);
            }
            // 存储到本地
            localStorage.setItem("token",u['token']);
            let loginResult = await api.post("/user/login");
            if(loginResult['data']){
                alert('登陆成功');
                this.$router.push({//你需要接受路由的参数再跳转
                    path: redirect
                });
            }else {
                alert('登陆失败:'+loginResult['error'])
            }
        },
        async regist(ctx,user){
            let registResult = await api.post('/user/regist',{
                userName:user.userName,
                password:user.password,
                email: user.email,
                age: user.age
            })
            console.log('registResult=>',registResult);
            let success = registResult['success'];
            if(success){
                alert('注册成功')
            }else {
                alert('注册失败',registResult['error']);
            }
        }
    },
    mutations: {
        checkServer(state,newState){
            state.available = newState.available ;
            state.imageUrl = newState.imageUrl ;
        }
    }
})