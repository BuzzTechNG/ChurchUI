<template>
  <div>
      <!--================Breadcrumb Area =================-->
        <section class="breadcrumb_area br_imag r_animate">
            <div class="br_image"></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Upcoming Events</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Events{{ activeDiv }}</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->
       
        <!--================Event Date Area =================-->
        <section class="event_date_area">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d_flex">
                        <div class="evet_location flex">
                            <h3>Spreading the faith to all</h3>
                            <p><span class="lnr lnr-calendar-full"></span>5th may, 2018</p>
                            <p><span class="lnr lnr-clock"></span>Saturday, 09.00 am to 05.00 pm</p>
                        </div>
                    </div>
                    <div class="col-md-6 event_time">
                        <h4>Our Next Event Starts in</h4>
                        <div id="timer" class="timer">
                            <div class="timer__section days">
                                <div class="timer__number"></div>
                                <div class="timer__label">days</div>
                            </div>
                            <div class="timer__section hours">
                                <div class="timer__number"></div>
                                <div class="timer__label">hours</div>
                            </div>
                            <div class="timer__section minutes">
                                <div class="timer__number"></div>
                                <div class="timer__label">Minutes</div>
                            </div>
                            <div class="timer__section seconds">
                                <div class="timer__number"></div>
                                <div class="timer__label">seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================Event Date Area =================-->
        
        
        <!--================Event Blog Area=================-->
        <section class="event_blog_area section_gap">
            <div class="container">
                <div  class="row event_two">
                    <div v-for="(event,index) in events" :key="index" class="col-lg-4 col-sm-6">
                        <div class="event_post">
                            <img src="image/blog1.jpg" alt="">
                            <a href="event-details.html"><h2 class="event_title">{{event.title}}</h2></a>
                            <ul class="list_style sermons_category event_category">
                                <li><i class="fa fa-clock"></i>Saturday, 5th may, 2018</li>
                                <li><i class="fa fa-house"></i>Rocky beach Church</li>
                                <li><i class="fa fa-line"></i>Santa monica, Los Angeles, USA</li>
                            </ul>
                            <a class="btn_hover" @click="()=>logx()">View Details</a>
                        </div>
                    </div>
                    
            </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
data: ()=>({
    events:[]
}),
methods:{
    async loadEvents(){
        this.$axios.get("/event").then(response =>{
            this.events = response.data
            console.log(this.events)
        }).catch(err =>{

        })
        
    },
    logx(){
        console.log("clicked")
    }
},
computed:{
activeDiv(){
    var x = document.activeElement.nodeName
    return x
}
},
mounted(){
    this.loadEvents()
}

}
</script>

<style>

</style>