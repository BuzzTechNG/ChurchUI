<template>
  <section class="blog_area single-post-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 posts-list">
                        <div class="single-post row">
                            <div class="col-lg-12">
                                <div class="feature-img">
                                    <q-img class="img-fluid" src="statics/img/front.png" alt=""/>
                                </div>									
                            </div>
                            
                            <div class="col-lg-12 col-md-12 blog_details">
                                <h2>Astronomy Binoculars A Great Alternative</h2>
                                <p class="excert">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                                </p>
                                <p>
                                    Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                </p>
                                <p>
                                    Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                </p>
                            </div>
                            <div class="col-lg-12  col-md-12 q-pr-lg">
                                <div class="blog_info text-left">
                        
                                    <ul class="blog_meta list_style row items-left">
                                        <li class="col-md-3 col-xs-6"><a href=""><i class="q-pr-sm lnr lnr-user"></i>{{ `${post.postedby.firstName} ${post.postedby.lastName}` }}</a></li>
                                        <li class="col-md-3 col-xs-6"><a href=""><i class="q-pr-sm lnr lnr-calendar-full"></i>{{new Date().setDate(postedby)}}</a></li>
                                        <li class="col-md-3 col-xs-6"><a href=""><i class="q-pr-sm lnr lnr-eye"></i>1.2M Views</a></li>
                                        <li class="col-md-3 col-xs-6"><a href=""><i class="q-pr-sm lnr lnr-bubble"></i>{{post.comments.length}} Comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comments-area bg-transparent">
                            <h4>{{post.comments.length}} Comments</h4>
                            <comments v-for="(cox,index) in post.comments" :key="index"/>                 	
                            	                                             				
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
        <!--================Blog Area =================-->
        
</template>

<script>
import comments from "../../components/Blog/comments";
import gql from "graphql-tag";
export default {
components:{ comments },
data:()=>({
    // params:this.$route.params.postId
    params:"this.$route.params.postId"
}),
mounted(){
    console.log(this.$route.params.postId)
},
apollo: {
  // Query with parameters
//   mixinpostId: this.$route.params.postId,
  post: {
    // gql query
    query: gql`query Post($id: String!) {
      post(id: $id){
          id,
          created,
          comments {
            comment,
            replies {
                reply
            }  
          },
          postedby{
          firstName,
          lastName,}
      }
    }`,
    // Static parameters
    variables(){
        return{
            id: this.$route.params.postId,
        }
      
    },
  },
},
}
</script>

<style scoped>
.comments-area{
    box-shadow: 0px 0px 5px #dddddddd;
}
</style>