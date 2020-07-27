<template>
  <div>
          <!--================Breadcrumb Area =================-->
        <section class="breadcrumb_area br_imag r_animate">
            <div class="br_image"></div>
            <div class="container">
                <div class="page-cove text-center">
                    <h2 class="page-cover-title">Church Societies</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Societies</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->  
        <div class="container column q-px-md">
            <div class="row" style="width:100%">
                <div class="searchbar">
                    
                </div>
            </div>
            <SocietyCard v-for="x in 10" :key="x"/>
        </div>
  </div>
</template>

<script>
import SocietyCard from "../../components/society/SocietyCard";
export default {
components:{ SocietyCard }
}
</script>

<style scoped>
.society-list{
width: 100%;
margin:0 auto;   
max-width: 900px;
}
</style>