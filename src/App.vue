<template>
  <nav>
    <!--router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/ins">Ins</router-link -->
  </nav>

  <router-view />
</template>

<script>
import $ from "./assets/lib/js/jquery.min.js";

export default {
  mounted() {
    $(".blocapp").show();
    $("#app").css({
      "font-family": "Avenir, Helvetica, Arial, sans-serif",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      /*text-align: center;*/
      color: "#2c3e50",
      opacity: "1",
    });
  },
};
</script>
<style>

*{
  font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html {
  background: url(./assets/img/back.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.ma {
  text-decoration: none;
}
.my-a{
  text-decoration: none;
  display: inline-block;
  text-align: center;
  padding: 5%;
  color: #FFF!important;
  text-transform: uppercase;

}
.myorange {
  background-color: #f9690e !important;
}
.fright {
  float: right;
}
.fleft {
  float: left !important;
  margin: 0 !important;
}
.bcenter,
.logo {
  text-align: center !important;
}
.borange {
  background: #f9690e !important;
  color: white;
  accent-color: #f9690e;
}

.chorange {
  accent-color: #f9690e;
  height: 30px;
  width: 30px;
}
.corange {
  color: #f9690e !important;
  background: white;
}
.torange {
  color: #f9690e !important;
}
.rorange {
  background: #f9690e !important;
  color: white;
  border: none;
}
.cradius {
  border-radius: 30px;
  border: none;
  height: 60px;
}

.bwid {
  height: 50px;
}
.bwidp {
  height: 50px;
  width: 132%;
}
.ciorg {
  background: #f9690e !important;
  color: white;
  border: none;
  border-radius: 30px;
  height: 45px;
}
.cigreen {
  background: #26a65b !important;
  color: white;
  border: none;
  border-radius: 30px;
  height: 45px;
}

.ciorange {
  background: #fffcfb !important;
  color: #f9690e;
  border: none;
  border-radius: 30px;
  height: 45px;
}
.ciorgb{
  background: #FFF;
  color: #f9690e ;
  border: 1px solid #f9690e ;
  border-radius: 30px;
  height: 45px;
  
}

.btop {
  position: fixed;
  margin-top: -28px;
  left: 2;
  z-index: 900;
  width: 100%;
  height: 40px;
  background: #f2f1ef;
}

.myt {
  margin-top: 35px !important;
}

.mytab {
  position:fixed;
  right: 0;
  bottom: 0;
  left: 7px;
  z-index: 1030;
  text-align: center;
  width: 100%!important;
  background-color: #FFF;
}
div.p-panel-content {
  background-image: linear-gradient(#f9690e, #f39c12) !important;
  color: #fffcfb !important;
  border-radius: 15px;
}
.p-panel .p-panel-content {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.p-panel .p-panel-header {
  border: none;
  background: transparent;
}
.p-panel .p-panel-header .p-panel-header-icon {
  background-color: #fffcfb;
  color: #f9690e;
}
.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
  border-color: transparent;
  background-color: #fffcfb;
  color: #f9690e;
}

.bdorg {
  border: 2px solid #f9690e;
}

.zfooter {
  position: fixed;
  right: 0;
  left: 0;
  bottom: -27px;
  z-index: 1030;
}
.rpadb {
  background-color: #ecf0f1;
  float: left;
  border-radius: 10px;
}
.rpadc {
  background-color: #f9690e;
  color: #ecf0f1;
  float: right;
  border-radius: 10px;
  border-bottom-right-radius: 0;
}
.rpad {
  padding: 5%;
  border: none;
  width: 80%;
}
.zonebl{
  background-color: #FFF;
}
.zonebl :not(span.msp){
  background-color: #FFF;
  border-radius: 10px;
  height: 70px;
  display: inline-flex;
  align-items: center;
}

.zonetex{
  background-color: #FFF;
  border-radius: 10px;
  height: 70px;
  display: flex;
  align-items: center;
}

.zonetex2{
  background-color: #FFF;
  border-radius: 10px;
}

</style>
