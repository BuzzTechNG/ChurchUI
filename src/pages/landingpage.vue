<template>
  <div class="frame-padding" style="bg-grey-3">
     <!--================banner Area =================-->
        <!-- <section class="banner_area flex text-center">
            <div class="container align-self-center" > 
                <div class="row">
                    <div class="col-md-12">
                        <div class="banner_content">
                            <h6>Who Created us</h6>
                            <h1>Keep faith always</h1>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at<br> the difference in price. You may see some for as low as $.17 each.</p>
                            <a href="#" class="btn_hover btn_hover_two">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <div class="row q-my-md" style="">
            <div class=" col-sm-6 col-xs-12  col-md-7 col-12" style="height:45vh;font-family: 'Comfortaa', cursive;">
                <div class="flex flex-center" style="height:100%">
                    <div class="bg-2"></div>
                <div class="mulumba-title" ><div class="text-red" style="">Saint.</div> Mulumba Catholic Church Alakia</div>
            </div>
            </div>
            <div class="col-sm-6 col-xs-6 col-md-5 col-12" style="height:45vh;">
         <q-carousel
      arrows
      animated
      autoplay
      infinite
      v-model="slide"
      
      dark
      
      class="mulumba-banner"
    >
    
      <q-carousel-slide name="first" img-src="statics/img/front2.jpg" class="blur" >
      <!-- <q-img src="statics/img/front.png" img-style="height:100%;width:100%"  spinner-color="white" /> -->
    <div class="moverlay"></div>
        <div class="absolute-bottom custom-caption">
          <!-- <div class="text-h6">First stop</div>
          <div class="text-subtitle1">Mountains</div> -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="statics/img/alter2.png" class="blur">
        <div class="absolute-bottom custom-caption">
          <!-- <div class="text-h6">Second stop</div>
          <div class="text-subtitle1">Famous City</div> -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <!-- <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div> -->
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>
        <!--================banner Area =================-->
        <!--================Event Date Area =================-->
        <section class="event_date_area" style="      background-image: linear-gradient(145deg,#ED213A,#93291E);
">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 flex">
                        <div class="evet_location flex">
                            <h3>Spreading the faith to all</h3>
                            <p><span class="eva eva-calendar"></span>5th may, 2018</p>
                            <p><span class="eva eva-clock"></span>Saturday, 09.00 am to 05.00 pm</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 event_time">
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
         <!--================About Area =================-->
        <section class="about_area section_gap">
            <div class="container">
                <div class="section_title text-center">
                    <h2>Welcome to ST. Mulumba Catholic Church</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from </p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <div class="about_content flex">
                            <h3 class="title_color ">Did not find your Package Feel free to ask us. We‘ll make it for you</h3>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            <a href="#" class="about_btn btn_hover">Read Full Story</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <img src="statics/img/alter2x.jpg" alt="church alter">
                    </div>
                </div>
            </div>
        </section>
        <!--================About Area =================-->
         <!--================Sermons work Area =================-->
        <section class="sermons_work_area section_gap">
            <div class="container">
                <div class="section_title text-center">
                    <h2>Sermons This Week</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p>
                </div>
                <div class="sermons_slider owl-carousel">
                    <div class="item row">
                        <div class="col-lg-8">
                            <div class="sermons_image">
                                <img src="image/sermns.jpg" alt="">
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sermons_content">
                                <h3 class="title_color">Did not find your Package? Feel free to ask us. We‘ll make it for you</h3>
                                <ul class="list_style sermons_category">
                                    <li><i class="lnr lnr-user"></i><span>Categories: </span><a href="#"> Travor James</a></li>
                                    <li><i class="lnr lnr-database"></i><span>Sermon Speaker: </span> Prayer</li>
                                    <li><i class="lnr lnr-calendar-full"></i><span>Date:</span> 5th may, 2018</li>
                                </ul>
                                <a href="#" class="btn_hover">View More Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="item row">
                        <div class="col-lg-8">
                            <div class="sermons_image">
                                <img src="image/sermns.jpg" alt="">
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sermons_content">
                                <h3 class="title_color">Did not find your Package? Feel free to ask us. We‘ll make it for you</h3>
                                <ul class="list_style sermons_category">
                                    <li><i class="lnr lnr-user"></i><span>Categories: </span><a href="#"> Travor James</a></li>
                                    <li><i class="lnr lnr-database"></i><span>Sermon Speaker: </span> Prayer</li>
                                    <li><i class="lnr lnr-calendar-full"></i><span>Date:</span> 5th may, 2018</li>
                                </ul>
                                <a href="#" class="btn_hover">View More Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="item row">
                        <div class="col-lg-8">
                            <div class="sermons_image">
                                <img src="image/sermns.jpg" alt="">
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sermons_content">
                                <h3 class="title_color">Did not find your Package? Feel free to ask us. We‘ll make it for you</h3>
                                <ul class="list_style sermons_category">
                                    <li><i class="lnr lnr-user"></i><span>Categories: </span><a href="#"> Travor James</a></li>
                                    <li><i class="lnr lnr-database"></i><span>Sermon Speaker: </span> Prayer</li>
                                    <li><i class="lnr lnr-calendar-full"></i><span>Date:</span> 5th may, 2018</li>
                                </ul>
                                <a href="#" class="btn_hover btn_hover_two">View More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================Sermons work Area=================-->
  </div>
</template>

<script>
export default {
    data () {
    return {
      slide: 'first'
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-2{
      background-image: url("../statics/img/bg-2.svg");
      top: 3%;
      height: 150px;
      width: 350px;
      position: absolute;
      z-index: -1;
      opacity: 0.5;
  }
 .mulumba-banner{
     clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);height:40vh
 }
 .mulumba-title{
      font-size: 28px;
      font-size:35px;color:black;line-height:50px;
      padding:15px
  }
.frame-padding{
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
}
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)}
  .moverlay{
      width: 100%;
      height: 100%;
      background-image: linear-gradient(145deg,#270f12,#110807);
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.2;
      
  }
  .blur{

      filter: blur(0px);
      -web-filter: blur(0px);
  }
  @media screen and (max-width: 450px) {
      .frame-padding{
          width: 98%;
      }
  .mulumba-title{
      font-size: 28px;
  }
  .mulumba-banner{
     clip-path: polygon(0% 0, 100% 0, 100% 100%, 0 100%);height:40vh
 }
  }
  
</style>