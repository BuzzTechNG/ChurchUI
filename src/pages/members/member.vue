<template>
  <q-page class="member column ">
      <div class="bio qcontainer mcard column ">
          <div class="col-6 gradient"></div>
          <div class="col-6 q-pa-md row q-pt-xl">
              <div class="col-12">
               full Name 
              </div>
              <div class="col-6 col-md-6 col-xs-12">
                 Gender 
              </div>
              <div class="col-6 col-md-6 col-xs-12">
                 State of Origin 
              </div>
              <div class="col-6 col-md-6 col-xs-12">
                 Occupation
              </div>
              <div class="col-6 col-md-6 col-xs-12">
                Marital Status
              </div>
          </div>
          
          <q-skeleton class="mavatar" size="120px" type="circle"></q-skeleton>
          
      
      </div>
      <div class="mcard spouse qcontainer column q-pa-md q-mt-xl">
          <div class="title">Family info</div>
          <q-separator class="q-mb-lg"></q-separator>
          <div class="row">
              <memberEdit :isReadonly="familyInfo" :value.sync="form.spouseName" field="Spouse Name"/>
              <memberEdit :isReadonly="familyInfo" :value.sync="form.spouseNumber" field="Spouse Phone Number"/>
              <memberEdit field="Father's Name" :value.sync="form.fatherName"  />
                <memberEdit field="Father's Phone Number" :value.sync="form.fatherNumber" :isReadonly="familyInfo" />
                <memberEdit field="Mother's Name" :value.sync="form.motherName"  />
                <memberEdit field="Mother's Phone Number" :value.sync="form.motherNumber" :isReadonly="familyInfo" />
                   <div class="q-px-md q-mt-md text-teal" style="font-size:12px">Children</div>
          <q-separator class="q-mb-lg q-px-xl"></q-separator>
          </div>
      </div>
      <div class="mcard spouse qcontainer column q-pa-md q-mt-xl">
          <div class="title">Contact info</div>
          <q-separator class="q-mb-lg"></q-separator>
          <div class="row q-gutter-y-lg">
              <memberEdit field="Phone Number" :value.sync="form.phoneNumber" :isReadonly="contactInfo"/>
                <memberEdit field="Email" :value.sync="form.email" type="email" :isReadonly="contactInfo" />
              <div class="col-12">
    <q-input
      v-model="form.address"
      label="Home Address"
      stack-label
      filled
      type="textarea"
      :readonly="contactInfo"
    />
  </div>
          </div>
      </div>
      
  </q-page>
</template>

<script>
import memberEdit from "../../components/AccountManagement/memberEdit";
export default {
components:{
    memberEdit
},
data:()=>({
    form:{},
    familyInfo:true,
    contactInfo:true,
})
}
</script>

<style scoped>
.member{
    background-color: #fffdfc;
}
.title{
    font-size: 16px;
    color: teal;
}
.qcontainer{
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    
    background-color: #fcfcfccc;
}
.spouse{
     margin-top:50px;
}
.mavatar{
   position: absolute;
   top:20%;
   left:10px; 
}
.bio{
    position: relative;
    max-height: 300px;
    height: 300px;
     margin-top:50px;
}
.bio .gradient{
    background-image: linear-gradient(145deg, #ED213A, #93291E);
}
.mcard{
    box-shadow: 0px 1px 7px 0px #ddddddff;
}
</style>