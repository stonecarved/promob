<template>
  <div class="blocapp">
    <form class="grid p-fluid">
      <div class="col-12 md:col-4">
        <div class="logo">
          <img src="../assets/img/logot.jpg" width="150" height="150" alt="" />
        </div>
        <div class="col-12">
          <label>Identifiant</label>
          <div class="p-inputgroup mt-2">
            <span class="p-inputgroup-addon borange">
              <i class="pi pi-user"></i>
            </span>
            <InputText class="bwid" required placeholder="( telephone )" />
          </div>
        </div>

        <div class="col-12">
          <label>Password</label>
          <div class="p-inputgroup mt-2">
            <span class="p-inputgroup-addon borange">
              <i class="pi pi-lock"></i>
            </span>
            <InputText class="bwid" type="password" required placeholder="" />
          </div>

          <div class="fright">
            <Button label="" class="p-button-link corange">
              <router-link to="/pwd" class="ma torange"
                >Mot de passe oublié</router-link
              >
            </Button>
          </div>
        </div>
        <div class="col-12">
          <Button
            type="submit"
            label="S'IDENTIFIER"
            class="borange cradius"
          ></Button>
        </div>

        <div class="mt-5 bcenter">
          <div class="mt-5 bcenter">
            <label for="">
              Vous n'avez pas encore de compte?
              <span class="">
                <router-link to="/ins" class="ma torange"
                  >S'inscrire</router-link
                >
              </span>
            </label>
          </div>

          <div class="mt-5 bcenter">
            <label for="">
              En utilisant cette application, vous confirmez votre acceptation
              de
              <span class="torange"> la politique de confidentialité </span>
            </label>

             <span class="">
                <router-link to="/menu" class="ma torange"
                  >Menu</router-link
                >
              </span>

          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
    Sub(e) {
      e.preventDefault();
    },
    OK() {
      alert("ok");
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