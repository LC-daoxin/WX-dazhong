<template>
  <div class="login">
    <img class="login-bglogo" src="@/assets/styles/img/bglog.png" height="53" width="104"/>
    <div class="login-form">
      <div class="login-title DoHyeonfont">
        <h1 class="login-title-h1">Welcome</h1>
        <h2 class="login-title-h2">to VWED !</h2>
      </div>
      <div class="login-form-body">
        <div class="login-text Monotonfont">
          <span>Sign</span><span>In</span>
        </div>
        <div class="login-row login-username">
          <label for="login-name" class="label iconfont">&#xe64d;</label>
          <input id="login-name" type="text" class="input-box" :placeholder="$t('Login.Username')"/>
        </div>
        <div class="login-row login-password">
          <label for="login-password" class="label iconfont">&#xe644;</label>
          <input id="login-password" type="password" class="input-box" :placeholder="$t('Login.Password')"/>
        </div>
        <div class="login-forget">{{$t('Login.Forget')}}.?</div>
        <button class="login-row login-button" @click="login">{{$t('Login.Login')}}</button>
      </div>
    </div>
    <div class="bg2"></div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
// import { axios } from '@/global'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  name: 'Home',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    login () {
      // axios.post('/api/Login.json', {username: '888', pwd: '123'})
      //   .then((res) => {
      //     console.log(res)
      //     let data = res.data.data
      //     console.log(data)
      //     this.$store.commit('GettokenID', '0001')
      //   })
      this.$http.get('/api/Login.json')
        .then((res) => {
          let data = res.data
          this.$store.commit('GettokenID', data.tokenId)
          window.localStorage.setItem('tokenID', data.tokenId)
          this.$router.replace({ path: '/Home' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .login{
    width: 100%;
    height: 100%;
    background: url('~@styles/img/login-bg.min.png') no-repeat;
    background-size: cover;
    position: fixed;
    z-index: -10;
    .login-bglogo{
      opacity: 1;
      position: absolute;
      top: 4vw;
      left: 4vw;
    }
    .login-form{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 1.4rem .48rem;
      width: calc(92vw);
      height: 6rem;
      box-shadow: .4rem .4rem .2rem rgba(0,0,0,.3);
      border-radius: .4rem;
      position: relative;
      background-color: #eee;
      margin: 0 auto;
      top: 50%;
      margin-top: -3.4rem;
      .login-title{
        font-weight: 900;
        position: absolute;
        top: -2rem;
        left: .1rem;
        &-h1{
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: .2rem;
          opacity: .06;
        }
        &-h2{
          font-size: .6rem;
          padding-left: .1rem;
          opacity: .12;
        }
      }
      .login-form-body{
        position: relative;
        .login-text{
          position: absolute;
          top: -1rem;
          box-sizing: border-box;
          width: 100%;
          text-align: center;
          font-size: .64rem;
          font-weight: 500;
          color: #004a71;
          span:first-child{
            margin-right: .2rem;
          }
        }
        .login-row{
          display: flex;
          box-sizing: border-box;
          width: 100%;
          height: .8rem;
          align-items: center;
          background: #fff;
          border-radius: .12rem;
          margin-bottom: .3rem;
          padding: 0 .3rem;
          &.login-password{
            margin-bottom: .16rem;
          }
          &.login-button{
            display: block;
            text-align: center;
            margin-top: .88rem;
            color: #fff;
            background: $bgColor;
            font-size: .3rem;
          }
          .label{
            width: .4rem;
            margin-right: .2rem;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: .4rem;
            color: #999;
          }
          .input-box{
            display: block;
            flex: 1;
            font-size: .3rem;
            padding: .12rem;
            line-height: normal;
          }
        }
        .login-forget{
          position: absolute;
          right: 0;
          color: #9c9c9c;
        }
      }
    }
    .bg2{
      width: 100%;
      height: 6rem;
      position: absolute;
      bottom: 0;
      background: url('~@styles/img/Banner.min.jpg') no-repeat;
      background-size: auto 100%;
      background-position: 45%;
      z-index: -1;
      opacity: .07;
    }
  }
</style>
