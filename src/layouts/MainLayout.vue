<template>
  <q-layout view="lHh Lpr lFf">
    
   <!-- header start -->
    <q-header style="position:sticky"  class="header_area elevate header-color">
          
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container ">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" @click="()=>_navigate('/')">
                      <!-- <img src="image/Logo.png" alt=""> -->
                      <div><span class="text-red q-pl-sm text-bold" style="font-family: 'Comfortaa', cursive;margin-top:10px">ST.</span> Mulumba</div>
                      </a>
                    <button class="navbar-toggler" style="height:50px;border:0" type="button" data-toggle="collapse" @click="clickedIt" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div style="transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);" class="column items-end" :class="{navopen:isNavOpen}">
                          
                          <span style="width:20px" class="icon-ba icon-styleX"></span>
                          <span style="width:25px" class="icon-ba icon-styleX"></span>
                        
                        <span class="icon-ba icon-styleX"></span>
                        <span class="icon-ba icon-styleX"></span>
                        </div>
                        <!-- <h1>hello</h1> -->
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav" style="margin:0 60px" >
                            <!-- <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>  -->
                            <li class="nav-item"><a class="nav-link" @click="()=>_navigate('/society')">Societies</a></li>
                            <li class="nav-item"><a class="nav-link" href="sermons.html">Sermons</a></li>
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Event</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link"  @click="()=>_navigate('/event')">Event</a></li>
                                    <li class="nav-item"><a class="nav-link" href="event-details.html">Event Details</a></li>
                                </ul>
                            </li> 
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="about-us.html">About</a></li>
                                    <li class="nav-item"><a class="nav-link" href="donation.html">Donation</a></li>
                                    <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                                    <li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
                                </ul>
                            </li> 
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" @click="()=>_navigate('/youthblog')">Youth Blog</a></li>
                                    <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                </ul>
                            </li> 
                            
                            <li class="nav-item"><a class="nav-link" @click="()=>_navigate('/contact')">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" @click="()=>_navigate('/login')">Login</a></li>
                            <li class="nav-item"><a class="nav-link" @click="()=>_navigate('/register')">Register</a></li>
                        </ul>
                        <!-- <ul class="nav navbar-nav navbar-right">
                            <li class="nav-item"><a href="#" class="search"><i class="lnr lnr-magnifier"></i></a></li>
                        </ul> -->
                    </div> 
                </div>
            </nav>
        </q-header>
    <!-- header end -->
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container style="background-color: #fffdfc;">
      <router-view style="background-color: #fffdfc;margin-top:-50px"/>
    </q-page-container>
            <!--================ start footer Area  =================-->	
        <footer class="footer-are section_ga footer-color q-py-lg" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">About St.Mulumba</h6>
                            <p style="text-center">The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">Navigation Links</h6>
                            <div class="row">
                                <div class="col-4">
                                    <ul class="list_style">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Feature</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <ul class="list_style">
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>										
                            </div>							
                        </div>
                    </div>							
                    						
                </div>
                <div class="border_line"></div>
                <div class="row footer-bottom d-flex justify-content-between align-items-center">
                    <p class="col-lg-8 col-sm-8 footer-text m-0"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;
{{new Date().getFullYear()}}
All rights reserved | <i class="fa fa-heart-o" aria-hidden="true"></i>Developed by <a href="https://buzztech.ng" target="_blank">BuzzTech</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                    
                </div>
            </div>
        </footer>
  </q-layout>
</template>
<style scoped>
.header-color{
  background-color: white;
}
.footer_title{
  color: white;
}
.footer-color{
  margin-top: 20px;
  background-image:linear-gradient(145deg,#080602,#070601,#0c0101);
  color:white;
  box-shadow: 0px -2px 5px 0 #ccc;
}
.navopen{
  transform: skewX(40deg) rotateX(30deg) ;
  

}
.icon-styleX{
  height: 3px;
  width: 30px;
  margin: 2px 0;
  border-radius: 40%;
  background-image: linear-gradient(145deg,red,rgb(143, 143, 4));
}
.nav-link{
  cursor: pointer;
}
.elevate{
  box-shadow: 0px 1px 8px 0px #ddd;
}
</style>
<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  methods:{
    clickedIt() {   
   var canSee = $("#navbarSupportedContent").is(":visible");
   this.isNavOpen = !canSee;
},
    _navigate(destination){
      $("#navbarSupportedContent").collapse('hide')
      this.clickedIt()
      this.$router.push(destination)
      
    }
  },
  data () {
    return {
      isNavOpen:false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
