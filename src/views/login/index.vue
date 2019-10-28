<template>
  <!-- 全屏容器 -->
  <div class="container">
    <!-- 卡片容器 -->
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单容器  ref="form" 操作dom|组件 :model="form" 绑定表单数据对象
      添加动态属性  :rules 是一系列校验规则
      status-icon属性为输入框添加了表示校验结果的反馈图标-->
      <el-form ref="form" :model="loginForm" :rules="loginRules" status-icon:rules="rules">
        <!-- 表单选项 label="活动名称" 表单输入框前的文字-->
        <!-- el-form-item 组件 添加属性 prop 是需要校验的字段名称 -->
        <el-form-item prop="mobile">
          <!-- 表单元素 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 表单元素 -->
          <el-input
            v-model="loginForm.code"
            style="width:235px;margin-right:10px"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号的函数
    const checkMobile = (rule, value, callback) => {
      // 通过校验逻辑判断成功失败
      // 手机号格式：1开头 第二位3-9 9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      // 校验规则
      loginRules: {
        mobile: [
          // type: date|email|url  支持  不支持手机号
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background-color: lightpink;
  position: absolute;
  left: 0;
  top: 0;
  //背景图尺寸:拆分写法 background-size
  //组合写法:background:...... /背景图尺寸(width,height)
  //特殊写法:cover:等比例缩放铺满容器多余不显示  contain:等比例缩放完全显示在容器内
  background: url(../../assets/ai.jpg) no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 330px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
}
</style>
