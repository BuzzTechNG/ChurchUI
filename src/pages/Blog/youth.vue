<template>
  <section class="blog_area bg-transparent" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog_left_sidebar">
                            <blogpost v-for="(post,index) in getAllPosts" :key="index" :post="post"/>
                            
                            <nav class="blog-pagination justify-center flex row">
		                        <ul class="pagination">
		                            <li class="page-item">
		                                <a href="#" class="page-link" aria-label="Previous">
		                                    <span aria-hidden="true">
		                                        <span class="lnr lnr-chevron-left"></span>
		                                    </span>
		                                </a>
		                            </li>
		                            <li class="page-item"><a href="#" class="page-link">01</a></li>
		                            <li class="page-item active"><a href="#" class="page-link">02</a></li>
		                            <li class="page-item"><a href="#" class="page-link">03</a></li>
		                            <li class="page-item"><a href="#" class="page-link">04</a></li>
		                            <li class="page-item"><a href="#" class="page-link">09</a></li>
		                            <li class="page-item">
		                                <a href="#" class="page-link" aria-label="Next">
		                                    <span aria-hidden="true">
		                                        <span class="lnr lnr-chevron-right"></span>
		                                    </span>
		                                </a>
		                            </li>
		                        </ul>
		                    </nav>
                        </div>
                    </div>
                    <q-page-sticky  position="bottom-right" :offset="[20, 20]">
            <q-btn icon="add" color="red" :fab-mini="true" to="youthblog/create"/>
          </q-page-sticky>
                </div>
            </div>
        </section>
        <!--================Blog Area =================-->
</template>

<script>
import blogpost from "../../components/blog/singleBlog";
import gql from 'graphql-tag';
export default {
components:{
    blogpost
},
apollo: {
  // Query with parameters
  getAllPosts: gql`{getAllPosts { id, created, post, postedby{ firstName, middleName, lastName }, title, comments{comment ,replies{ reply, user } } }}`,
},
}
</script>

<style>

</style>