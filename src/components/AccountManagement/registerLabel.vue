<template>
  <div class="reg-input col-md-6 col-sm-12 col-xs-12 xpadding" style="z-index:3" >
      <q-input :type="type" color="red" v-model="syncField" input-style="font-size:13px" filled :label="field">
      <template v-if="isRequired" v-slot:append>
          <q-icon name="fa fa-star" size="6px" color="red" class="q-mx-md" />
        </template> 
      </q-input>
      </div>
</template>

<script>
export default {
props:{
    field:{
        type:String
    },
    isRequired:{
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
methods:{

}
}
</script>

<style>

</style>