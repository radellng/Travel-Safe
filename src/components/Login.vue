<template>
<head>
<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<!-- <div class="header">   
   <img style="height:15%;width:15%;margin-top: -70px; " src="https://t4.ftcdn.net/jpg/04/41/71/55/360_F_441715520_tVOReRBE2YdytMuDCrIl7O7vES29Otl9.jpg" />
</div>
<h3>ONE-STOP PORTAL FOR TRAVELLING AMIDST COVID-19</h3>
<div class = "login">
      <h3 style="font-weight:bold; ">Log In</h3>

  <div id = "firebaseui-auth-container"></div>
    <h5>Don't have an account?   <router-link to="/signup">Sign Up</router-link><router-view/> </h5>
    <h6><router-link to="/signup">Forgot Password?   </router-link><router-view/> </h6>   
</div>
<div class="footer">   
   
</div> -->

<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <img style="width:100%;height:100%" :src="require(`../assets/login.png`)">
      </div>
      <div class="col-md-9 col-lg-6 col-xl-5 offset-xl-1">
         <img style= "width:25%;height:25%;" :src="require(`../assets/logo.png`)" />
         <br/> <br/>

      <h4 style="font-weight:bold; font-family: 'Nunito';">ONE-STOP PORTAL FOR TRAVELLING AMIDST COVID-19</h4>
      <br/> <br/>
        <div class = "login">
          <h3 style="font-weight:bold; font-family: 'Nunito';">Sign In / Register to TravelSafe</h3>
          <div id = "firebaseui-auth-container"></div>
          <br/>
          <h5 style="font-family: 'Nunito';">Don't have an account? <br/>Click one of the above options to sign up!  </h5>

          <!-- <div style="width:60%; margin:auto;" class="alert alert-secondary" role="alert">
 Don't have an account? <br/>Click the above options to sign up.
</div> -->
          <!-- <h5 style="font-family: 'Nunito';">Don't have an account?   <router-link to="/signup">Sign Up</router-link><router-view/> </h5> -->
          <!-- <h6 style="font-family: 'Nunito';"><router-link to="/">Forgot Password?   </router-link><router-view/> </h6>    -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    
  </div> -->
</section>
</template>

<script>
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",

  mounted() {
    // calling the ui instance
    var ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style>

.footer {
  background:url("../assets/background.jpeg")  repeat-x scroll top transparent; 
   position:absolute;
   bottom:0;
   width:99.5%;
   height:9%;   /* Height of the footer */
   overflow-y:hidden;
   /* background:#6cf; */
}
.login {
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 15px;

  box-shadow: rgba(74, 79, 97, 0.25) 0px 13px 27px -5px, rgba(74, 79, 97, 0.3) 0px 8px 16px -8px;
  /* background-color:#c9d1dd; */
  padding: 20px 35px 35px 35px;
  width:100%;
  height: 100%;
  text-align: center;
}

#firebaseui-auth-container{
  margin-top: 5%;
  margin-bottom: 5%;

}

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}


.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
