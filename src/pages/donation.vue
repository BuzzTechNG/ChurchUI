<template>
  <q-page>
    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area br_imag r_animate">
      <div class="br_image"></div>
      <div class="container">
        <div class="page-cove text-center">
          <h2 class="page-cover-tittle">Donation</h2>
          <ol class="breadcrumb" style="padding:0;margin:0">
            <li><a href="index.html">Home</a></li>
            <li class="active">Donation</li>
          </ol>
        </div>
      </div>
    </section>
    <!--================Breadcrumb Area =================-->
    <div>
      <div>
        <div class="big-title">
          Your donation can save many lives
        </div>
        <div class="big-subtitle">
          “I have found that among its other benefits, giving liberates the soul
          of the giver.” ―Maya Angelou
        </div>
        <button class="main-btn">
          Donate Now
        </button>
      </div>
      <!--  -->
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.big-title {
  color: black;
  font-size: 25px;
  font-weight: bold;
}
.big-subtitle {
  color: #111;
  font-size: 17px;
  font-weight: 200;
}
button {
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  /* color: -internal-light-dark-color(buttontext, rgb(170, 170, 170)); */
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  /* background-color: -internal-light-dark-color(rgb(239, 239, 239), rgb(74, 74, 74)); */
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  /* border-color: -internal-light-dark-color(rgb(118, 118, 118), rgb(195, 195, 195)); */
  border-image: initial;
}
.main-btn {
  display: inline-block;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #53c203;
  padding: 0 38px;
  font-size: 15px;
  line-height: 53px;
  height: 55px;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 5;
  text-transform: uppercase;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
.main-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 100%;
  background-color: #53c203;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  z-index: -1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
.main-btn:hover {
  color: #53c203;
  border-color: #fff;
}
.main-btn:hover::before {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}
</style>
