<template>
  <q-page class="flex flex-center">
        <div class="q-gutter-y-xl q-px-sm" style="width:100%;max-width:400px">
      <div style="font-family: 'Laila', serif;font-size:28px">SIGN IN</div>
      <q-input v-model="phonenumber" placeholder="Phone Number">
         <template v-slot:prepend>
          <q-icon name="fa fa-user" size="15px" class="q-mx-md" />
        </template>
      </q-input>
      <q-input v-model="password" type="password" placeholder="Password">
         <template v-slot:prepend>
          <q-icon name="fa fa-key" size="15px" class="q-mx-md" />
        </template>
       
      </q-input>
    <q-btn
      @click="login"
      color="white"
      icon-right="arrow_right"
      text-color="black"
      label="Login"
      :disable="phonenumber && password"
    />
    <div style="height:15px">
      <q-spinner-oval
          v-if="loading"
          color="primary"
          size="2em"
        />
        <div>
          {{ message }}
        </div>
    </div>
    </div>      
  </q-page>
</template>

<script>
export default {
data:()=>({
    message:"",
    password:"",
    phonenumber:"",
    loading:""
}),
methods:{
    login(){

    }
}
}
</script>

<style scoped>
.login-container{

}
</style>