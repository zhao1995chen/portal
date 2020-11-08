<template>
  <el-container>
    <el-main>
      <el-form ref='form' :model='form' :rules='rules'>
        <el-form-item>登入</el-form-item>
        <el-form-item prop='name' required>
          <el-input v-model='form.name' placeholder='name'></el-input>
        </el-form-item>
        <el-form-item prop='password' required>
          <el-input v-model='form.password' placeholder='password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type='info' @click='onSubmit("form")'>登入</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入帳號', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          console.log('submit!');
        } else {
          console.log('error submit!');
          return false;
        }
      })
    }
  },
}
</script>

<style scoped>
.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>