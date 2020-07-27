<template>
  <q-page>
      <!--================Breadcrumb Area =================-->
        <section class="breadcrumb_area br_imag r_animate">
            <div class="br_image"></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Our Outstations</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Outstations</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->
      <div class="container">
          <Outstation v-for="x in 5" :key="x"/>
      </div>
  </q-page>
</template>

<script>
import Outstation from "../../components/Outstations/OutstationCard";
export default {
components:{
    Outstation
}
}
</script>

<style>

</style>