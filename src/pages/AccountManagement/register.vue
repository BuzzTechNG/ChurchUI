<template>
  <q-page class=" q-pa-md">
      <div class="registration">
      <div>
          Registration
      </div>
      <div class="text-blue-9 sub-menu">Bio</div>
      <q-separator class="q-mb-md" ></q-separator>
      <div class="row reg-list q-gutter-y-md">
          <registerCard field="First Name" :value.sync="form.firstName" />
          <registerCard field="Middle Name" :value.sync="form.middleName" />
          <registerCard field="Last Name" :value.sync="form.lastName" />
          <registerSelect field="Gender" :value.sync="form.gender" :options="['Male','Female']" />
          <registerSelect field="State of Origin" :value.sync="form.stateOfOrigin" :options="$stateConstant" />
          <registerCard field="Occupation" :isRequired="false" :value.sync="form.occupation"/>
          <registerSelect field="Marital Status" :value.sync="form.maritalStatus" :options="['Single','Married','Engaged','Complicated']" />
          <registerCard v-if="form.maritalStatus=='Married'" class="fade-in" field="Spouse's Name" :value.sync="form.spouseName"  />
          <registerCard v-if="form.maritalStatus=='Married'" class="fade-in" field="Spouse's Phone Number" :value.sync="form.spouseNumber" :isRequired="false" />          

</div>
  <div class="text-blue-9 sub-menu">Contact Information</div>
      <q-separator class="q-mb-md"></q-separator>
      <div class="row reg-list q-gutter-y-md">
        <registerCard field="Phone Number" :value.sync="form.phoneNumber" />
        <registerCard field="Email" :value.sync="form.email" type="email" :isRequired="false" />
        <div class="q-px-md" style="width:100%">
          <label>Home Address </label>
        <textarea style="width:100%;border:0;outline:blue" class="bg-grey-2 q-pa-md" name="" id="" cols="30" rows="5"></textarea>
        </div>
      </div>
      <div class="text-blue-9 sub-menu">Family Information</div>
      <q-separator class="q-mb-md"></q-separator>
      <div class="row reg-list q-gutter-y-md">
        <registerCard field="Father's Name" :value.sync="form.fatherName"  />
        <registerCard field="Father's Phone Number" :value.sync="form.fatherNumber" :isRequired="false" />
        <registerCard field="Mother's Name" :value.sync="form.motherName"  />
        <registerCard field="Mother's Phone Number" :value.sync="form.motherNumber" :isRequired="false" />
        <div class="q-px-md row justify-between" style="width:100%">
          <div>Child(ren) <span style="font-size:11px">if applicable</span></div>
        <!-- <textarea style="width:100%;border:0;outline:blue" class="bg-grey-2 q-pa-md" name="" id="" cols="30" rows="5"></textarea> -->
        <div><q-icon name="fa fa-plus" color="teal"/>
        </div>
        </div>
      </div>
      <div class="text-red-9 sub-menu">Privacy</div>
      <q-separator class="q-mb-md"></q-separator>
      <div class="row reg-list q-gutter-y-md">
        <registerCard field="Password" type="password" :value.sync="form.password"  />
        <registerCard field="Confirm Password" type="password" :value.sync="form.cpassword" />
      </div>
      <div class="rosary"></div>
      </div>
  </q-page>
</template>

<script>
import registerCard from "../../components/AccountManagement/registerLabel";
import registerSelect from "../../components/AccountManagement/registerSelect";
export default {
components:{
  registerCard,
  registerSelect
},
data:()=>({
  form:{children:[]}
})
}
</script>

<style scoped>
.rosary{
  opacity: 0.2;
  top:30%;
  right: 0;
  position: absolute;
  background-image: url('../../statics/img/rosary-.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
  height: 500px;
  z-index: 0;
}
.sub-menu{
  margin-top: 20px;
}
.q-page{
  background-color: #fffdfc;
      overflow: hidden;

}
.registration{
    
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
}
.reg-list{
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
}
</style>