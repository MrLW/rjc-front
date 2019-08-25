<!--
 * @Description: 登陆页面
 * @Author: leekwe
 * @Date: 2019-08-10 12:54:56
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-25 17:19:48
 -->
<template>
  <div>
    <el-container>
      <el-main class="login-main">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="small"
        >
          <el-form-item label="用户名/邮箱" prop="userName" size="small">
            <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <router-link :to="{name:'RegistPage'}">
              <el-button type="primary">注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import CheckServer from "@/components/CheckServer.vue";
import user from "../api/user";
export default {
  components: {
    CheckServer
  },
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名/邮箱不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        userName: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let userObj = {
            userName: this.ruleForm.userName,
            password: this.ruleForm.pass
          };
          user.login(this.$socket, userObj, msg => {
            if (msg['success']) {
              localStorage.setItem("token", msg["data"]);
              let tokenObj = { token: msg["data"] };
              user.login(this.$socket, tokenObj, msg => {
                if (msg["data"]) {
                  localStorage.setItem("user", JSON.stringify(msg["data"]));
                  this.$router.push("main");
                } else {
                  alert(msg["message"]);
                }
              });
            }else{
              alert(msg["message"]);
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    go(path) {
      this.$router.push(path);
    }
  },
  computed: {}
};
</script>