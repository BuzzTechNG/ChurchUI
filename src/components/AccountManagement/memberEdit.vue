<template>
  <div class="reg-input col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 q-px-lg">
      <q-input color="red" :borderless="isReadonly" :readonly="isReadonly" :type="type" v-model="syncField" input-style="font-size:13px" stack-label :label="field" >
       
      </q-input>
      </div>
</template>

<script>
export default {
props:{
    field:{
        type:String
    },
    isReadonly:{
        type:Boolean,
        default:true
    },
    value:{
        type: String,
    },
    type:{
        type:String,
        default:""
    }
},
data:()=>({
    syncField:""
}),
}
</script>

<style>

</style>