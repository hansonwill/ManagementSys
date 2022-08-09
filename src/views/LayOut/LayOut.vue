<template>


  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <img class="logo" src="../../assets/logo.png" alt="">
          <h1 class="tittle">后台管理系统</h1>
        </div>
        <el-button @click="loginOut">退出</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
          <el-menu
            background-color="none"
            text-color="#fff"
            router
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Avatar /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/users">账号列表</el-menu-item>          
              </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><Box /></el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/roles">角色列表</el-menu-item>          
              </el-menu-item-group>
            </el-sub-menu>

            <!-- <el-sub-menu index="3">
              <template #title>
                <el-icon><location /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">账号列表</el-menu-item>          
              </el-menu-item-group>
            </el-sub-menu> -->

          </el-menu>
        </el-aside>
        <el-main>

          <!-- router-view -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default {
    name: "layout",
    setup(){
      const store = useStore()
      const router = useRouter()
      const loginOut = ()=> {
        localStorage.removeItem("loginData")
        store.commit('setUserInfo', {});
        router.push({
          path: "/login"
        })
      }
      return {
        loginOut
      }
    }
}
</script>

<style>
  .el-container{
    height: 100vh;
    overflow: hidden;
  }
  .common-header{
    background-color: rgb(35, 46, 55);
  }
  .common-aside{
    background-color: rgb(43, 53, 62);
  }
  .logo{
    width: 80px;
  }
  .tittle{
    color: #fff;
  }

</style>