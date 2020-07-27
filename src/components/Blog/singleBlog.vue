<template>
  <article class="row blog_item">
    <div class="col-xs-12 col-md-3 row q-pr-sm">
      <div class="blog_info text-right">
        <!-- <div class="post_tag">
                                            <a href="#">Food,</a>
                                            <a href="#">Technology,</a>
                                            <a href="#">Politics,</a>
                                            <a href="#">Lifestyle</a>
                                        </div> -->
        <ul class="blog_meta list_style " >
          <li class="col-6 col-md-12">
            <a>Mark wiens<i class="eva eva-person-outline"></i></a>
          </li>
          <li class="col-6 col-md-12">
            <a>12 Dec, 2017<i class="eva eva-calendar-outline"></i></a>
          </li>
          <li class="col-6 col-md-12">
            <a>1.2M Views<i class="eva eva-eye-outline"></i></a>
          </li>
          <li class="col-6 col-md-12">
            <a>{{ commentLength }} Comments<i class="eva eva-message-circle-outline"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-md-9">
      <div class="blog_post">
        <img src="image/blog/main-blog/m-blog-1.jpg" alt="" />
        <div class="blog_details" style="margin:5px 0px;padding:0">
          <a href="blog-single.html"
            >
             <div class="title">{{post.title}}</div>
            </a
          >
          <p>
            {{post.post}}.
          </p>
           <!-- <q-btn color="white" text-color="black" label="Standard" class="view_btn button_hover"/> -->
          <a class="view_btn button_hover" @click="()=>$router.push(`youthblog/${post.id}`)">View More</a>
        </div>
      </div>
    </div>
    <q-separator class="q-mt-md"></q-separator>
  </article>
</template>

<script>
export default {
  props:{
    post:{
      type: Object
    }
  },
  computed:{
    commentLength(){
      if (this.post.comments.length > 0){
        return this.post.comments.length
      }
      return 0
    }
  }
};
</script>

<style scoped>
.title{
    font-size: 19px;
    font-weight: 600;
    color: #666;
    margin-bottom: 14px;
}
</style>
