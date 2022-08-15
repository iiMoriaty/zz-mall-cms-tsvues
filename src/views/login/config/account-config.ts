export const rules = {
  name: [
    {
      required: true, //表示必传
      message: '用户名是必填内容', //提示信息
      trigger: 'blur' //触发条件
    },
    {
      pattern: /^[a-z0-9]{2,10}$/, //正则匹配
      message: '用户名必须为5到10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须为3个以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
