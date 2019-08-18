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
            // axios.get("http://localhost:10001/user/ping/").then(res=>{
            //     context.commit("checkServer",{available:res?true:false,imageUrl:"static/image/online.png"});
            // })
        },
        async login(ctx,user){
            console.log("store.login",);
            // let authResult = await api.post('/user/login',{
            //     username:user.userName,
            //     password:user.password
            // })
            let authResult = {} ;
            let u = authResult['data'];
            if(!u) {
                return alert('登陆失败:'+authResult['data']['error']);
            }
            // 存储到本地
            localStorage.setItem("token",u['token']);
            localStorage.setItem('userName',user.userName);
            localStorage.setItem('userId',user.userId);
            let loginResult = await api.post("/user/login");
            if(loginResult['data']){
                alert('登陆成功');
                return router.push({
                    path: 'main'
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
        },
        SOCKET_PONG(context) {
            context.commit("SOCKET_PONG");
        },
        SOCKET_connect(context){
            context.commit("SOCKET_connect");
        },
        SOCKET_login(context,user){
            context.commit("login",user);
        },
        SOCKET_relogin(context){
            context.commit("relogin");
        }
    },
    mutations: {
        checkServer(state,newState){
            state.available = newState.available ;
            state.imageUrl = newState.imageUrl ;
        },
        SOCKET_PONG(state,data) {
            state.available = data ;
        },
        SOCKET_connect(state){
            console.log("store connect",state)
        },
        SOCKET_res(ctx,data){
            console.log("res",data);
        },
        login(ctx,user){
            
        },
        relogin(){
            router.push("/");
        }
    }
})