<template>
  <div class="q-mb-lg">
    <div class="comment-list">
      <div class="single-comment justifyLeft flex">
        <div class="user justifyLeft flex">
          <div class="thumb">
            <q-avatar size="40px" color="grey" text-color="white" icon="eva-person" />
          </div>
          <div class="desc" >
            <h5><a href="#">Emilly Blunt</a></h5>
            <p class="date">December 4, 2017 at 3:12 pm</p>
            <p class="comment">
              Never say goodbye till the end comes! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime!
            </p>
          </div>
        </div>
        <div class="reply-btn">
          <a href="" class="btn-reply text-uppercase">reply</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.justifyBetween {
  justify-content: space-between;
}
.justifyLeft {
  justify-content: left;
  align-items: center;
}
</style>
