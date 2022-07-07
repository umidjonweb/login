
<template>
  <div class="Sign__up">
    <div class="sign__up__header">
      <el-card class="box-card">
        <h1 class="title">Ro'yxatdan o'tish</h1>
        <el-input v-model="inputId" placeholder="Operator Idsini kiriting" />
        <el-input
          v-model="inputPassword"
          type="password"
          placeholder="Please input password"
          show-password
        />
        <p v-if="error" class="subtitle">login yoki parolda xatolik bor</p>
        <el-button @click="Useritem" type="primary">Primary</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElCard } from "element-plus";
import { ElInput } from "element-plus";
import { ElButton } from "element-plus";

export default {
  name: "TechSingUp",
  components: {
    ElInput,
    ElButton,
    ElCard,
  },
  data() {
    return {
      inputId: "",
      inputPassword: "",
      ElButton: "",
      login: "",
      parol: "",
      email: "",
      error: false,
    };
  },

  mounted() {},

  methods: {
    async Useritem() {
      try {
        const {
          data: { access_token, refresh_token, user },
        } = await axios.post("https://plag.m1.uz/login/", {
          username: this.inputId,
          password: this.inputPassword,
          email: this.email,
        });
        console.log(user);

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        localStorage.setItem("user", JSON.stringify(user));
        console.log("1", access_token);
        this.$router.push({ name: "AboutInner" });
      } catch (error) {
        console.log("xato", error);
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" >
.Sign__up {
  display: flex;
  align-items: center;
  justify-content: center;
  .subtitle {
    font-size: 16px;
    color: red;
    text-align: center;
  }
  .el-input {
    margin: 12px 0 !important;
  }
  .box-card {
    width: 500px;
  }
  .el-button--primary {
    width: 100%;
    margin: 10px 0px;
  }
  height: 100vh;
  &__header {
    width: 60%;
    .title {
      text-align: center;
      width: 100%;
    }
  }
}
</style>