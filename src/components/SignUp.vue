<template>
  <el-container>
    <el-main>
      <!-- Main content -->
      <el-form :model="form" ref="form" :rules="rules" label-width="180px" :inline="false" size="normal">
        <el-form-item label="帳號" prop="username">
          <el-input v-model="form.username" placeholder="username" required></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input v-model="form.password" placeholder="password" required></el-input>
        </el-form-item>
        <el-form-item label="性別" prop="gender">
          <el-select v-model="form.gender" value-key="" placeholder="請選擇性別" clearable filterable>
            <el-option v-for="item in list.genderList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="date">
          <el-date-picker type="date" placeholder="選擇出生日期" v-model="form.date"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="onSubmit('form')">註冊</el-button>
          <el-button @click="onClear('form')">重設</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        username: '',
        password: '',
        gender: '',
        date: ''
      },
      list: {
        genderList: [
          { value: 1, label: '男' },
          { value: 2, label: '女' }
        ]
      },
      rules: {
        username: [
          { required: true, message: '請輸入帳號', trigger: 'blur'}, // trigger 要用字串形式傳入
          { min: 5, max: 12, message: '長度需介於 5 到 12 之間', trigger: blur},
          { min: 5, max: 12, message: '長度需介於 5 到 12 之間', trigger: 'change'}

        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          console.log('submit');
        } else {
          console.log('error submit');
        }
      })
    },
    onClear(formName) {
      console.table(1111);
      this.$refs[formName].resetFields();
      // resetFields() 做的不是 clear 是抓取初始值做回填
      // 要用 props 跟 data 裡的初始值進行綁定
    }
  }
}
</script>

<style scoped>
</style>