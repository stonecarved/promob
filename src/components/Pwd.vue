<template>
  <div class="pwd">
    <div>
      <div>
        <Button class="rorange" @click="Back">
          <i class="pi pi-angle-left"></i>
        </Button>
        &nbsp; <b>Changer le mot de passe ... </b>
      </div>
      <div class="mt-2 col-12 md:col-4">
         <div class="field col-12 md:col-4">        
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-phone" />
            <InputText         
              class="bwidp"         
              type="password"
            />
            <label for="inputtext-left">Connexion</label>
          </span>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <div class="field col-12 md:col-4">        
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-lock" />
            <InputText         
              class="bwidp"         
              type="password"
            />
            <label for="inputtext-left">Nouveau mote de passe</label>
          </span>
        </div>
        <b>Le mot de passe doit etre au moins de 6 caracteres</b>

        <div class="field col-12 md:col-4">        
          <span class="p-float-label p-input-icon-left mt-3">
            <i class="pi pi-lock" />
            <InputText
              class="bwidp"       
              type="password"
            />
            <label for="inputtext-left">Confirmer le mot de passe</label>
          </span>
        </div>

        <div class="mt-3">
          <Button label="CONTINUER" class="col-12 borange cradius"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
export default {
  name: "Pwd",
  props: {
    msg: String,
  },
  data() {
    return {
      // img: String = require("../assets/img/tp.png"),
      liste: [],
    };
  },
  methods: {
    Back() {
      $(".blocapp").show();
      $("#app").css({
        "font-family": "Avenir, Helvetica, Arial, sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        /*text-align: center;*/
        color: "#2c3e50",
        opacity: "1",
      });
      this.$router.back();
    },
    Sub(e) {
      e.preventDefault();
    },

    Liste: function () {
      var c = this;
      var l = this.liste;
      fetch("cat/list", {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          if (data.length != 0) {
            l.length = 0;
            data.forEach(function (v) {
              l.push(v.value);
            });
          }
          return data;
        });
    },
  },
  mounted() {
    $("html").css({
      background: "#FFFCFB",
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zone {
  margin: auto !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>