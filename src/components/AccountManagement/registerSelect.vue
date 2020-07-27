<template>
  <div class="reg-input col-md-6 col-sm-12 col-xs-12 xpadding" style="z-index:2">
      <q-select color="red" v-model="syncField" :options="options" :label="field">
      <!-- <template v-if="isRequired" v-slot:append>
          <q-icon name="fa fa-star" size="6px" color="red" class="q-mx-md" />
        </template>  -->
      </q-select>
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
    options:{
        type: Array,
    }
},
data:()=>({
    syncField:""
}),
}
</script>

<style>

</style>