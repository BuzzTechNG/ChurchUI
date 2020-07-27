<template>
  <q-page>
    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area br_imag r_animate">
      <div class="br_image"></div>
      <div class="container">
        <div class="page-cove text-center">
          <h2 class="page-cover-tittle">Contact us</h2>
          <ol class="breadcrumb" style="padding:0;margin:0">
            <li><a href="index.html">Home</a></li>
            <li class="active">Contact us</li>
          </ol>
        </div>
      </div>
    </section>
    <!--================Breadcrumb Area =================-->
    <section class="contact_area section_gap">
      <div class="container">
        <div class="row">
          <div class="col-md-3" >
            <div class="contact_info" >
              <div class="info_item" >
                <i class="lnr lnr-home wow slideInLeft"></i>
                <h6>California, United States</h6>
                <p>Santa monica bullevard</p>
              </div>
              <div class="info_item">
                <i class="lnr lnr-phone-handset wow slideInLeft" data-wow-delay=".1s" data-wow-duration=".500s"></i>
                <h6><a href="#">00 (440) 9865 562</a></h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div class="info_item">
                <i class="lnr lnr-envelope wow slideInUp" data-wow-delay=".100s" data-wow-duration=".300s"></i>
                <h6><a href="#">support@colorlib.com</a></h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <form
              class="row contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              novalidate="novalidate"
            >
              <div class="col-xs-12 col-md-6">
                <div class="form-group col">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group col">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div class="form-group col">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12 text-right">
                <button
                  type="submit"
                  value="submit"
                  class="btn btn_hover btn_hover_two"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact_info .info_item h6{
    margin-top: 0;
}
// .form-group{
//     margin: 15px 0;
//     color: black;
// }
.form-group textarea{
    width: 97%;
}
.form-group input{
    width: 97%;
    // height: 45px;
}
// .header{
//     color:black;
//     font-size: 17px;
//     text-align: center;
// }
.sub {
  color: black;
}
.form-control{
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>
