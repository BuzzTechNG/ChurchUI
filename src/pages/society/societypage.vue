<template>
  <q-page class="q-px-md container">
    <h2 class="wow pulse"> 
      St.Michaels
    </h2>
    <div class="row">
      <div id="topsoc" class="col-8 col-xs-12 col-md-8  column">
        <div class="infoX ">
          <div class="head">
            About St.Michaels
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
            inventore!
          </div>
        </div>
        <div class="infoX">
          <div class="head">
            Patron Saint
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            itaque, in expedita dolorum maiores ab laborum? Ut, perspiciatis
            doloribus? Harum non dolor tempore quam at.
          </div>
        </div>
        <div class="infoX">
          <div class="head">
            Patron Saint
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            itaque, in expedita dolorum maiores ab laborum? Ut, perspiciatis
            doloribus? Harum non dolor tempore quam at.
          </div>
        </div>
        <div class="infoX">
          
                  <div class="head">
                    Benefits
                  </div>
             
        </div>
        <div class="infoX">
          <div class="head">
            Anthem
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            itaque, in expedita dolorum maiores ab laborum? Ut, perspiciatis
            doloribus? Harum non dolor tempore quam at.
          </div>
        </div>
      </div>
      <div id="topsoc2" class="col-4 col-md-4 col-xs-12">
        <div class="infoX">
        <div class="head">
                    Meeting time
                  </div>
        <div class="head">
                    Meeting location
                  </div>
        </div>
        <h6>Members</h6>
        
         <q-btn color="white" text-color="black" label="Standard" @click="move" />
        
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
    methods:{
        move(){
            document.getElementById('topsoc').scrollIntoView({
  behavior: 'smooth'
});
        }
    },
  mounted() {}
};
</script>

<style scoped>
.infoX{
    margin: 15px 0;
    
}
.infoX .head{
    color: #333;
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    font-family: 'Arape', sans-serif;
}
.infoX div{

    font-family: 'Maven Pro', serif;
    color:#666
    /* Arapey */
}
</style>
