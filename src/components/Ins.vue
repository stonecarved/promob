<template>
  <div class="ins">
    <div>
      <div class="btop">
        <Button class="rorange" @click="Back">
          <i class="pi pi-angle-left"></i>
        </Button>

        &nbsp; <b> {{ mytitle }}</b>
      </div>
      <div class="myt">
        <form v-show="show" @submit="Sub">
          <div class="mt-2 col-12 md:col-4">
            <div class="mt-2">
              <label>Pays</label>
              <div class="mt-1">
                <Dropdown
                  disabled
                  class="col-12"
                  v-model="selectedCity"
                  :options="cities"
                  optionLabel="name"
                  placeholder="Cote d'Ivoire"
                  required
                />
              </div>
            </div>
          </div>
          <div class="mt-2 col-12 md:col-4">
            <label>Numero de telephone</label>
            <div class="mt-2">
              <InputText
                required
                placeholder="****************"
                class="col-12 bwid"
                v-model="cont"
              />
            </div>
            <b>Entrez le numero de telephone sans code de pays</b>

            <div class="mt-3">
              <Button
                type="submit"
                label="CONTINUER"
                class="col-12 borange cradius"
              ></Button>
            </div>
          </div>
        </form>

        <form v-show="!show">
          <div class="mt-2 col-12 md:col-4">
            <div class="field col-12 md:col-4 mt-2">
              <span class="p-float-label">
                <InputText id="inputp" class="bwid col-12" type="text" />
                <label for="inputp">Prenom</label>
              </span>
            </div>

            <div class="field col-12 md:col-4 mt-2">
              <span class="p-float-label">
                <InputText id="inputn" class="bwid col-12" type="text" />
                <label for="inputn">Nom</label>
              </span>
            </div>

            <div>
              <label>Sexe</label>
              <div class="mt-1">
                <Dropdown
                  disabled
                  class="col-12 bwid"
                  v-model="selectedCity"
                  :options="cities"
                  optionLabel="name"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="mt-2">
              <label for="dateformat">Date Naissance</label>
              <div class="field col-12 md:col-4">
                <Calendar
                  inputId="dateformat"
                  dateFormat="mm-dd-yy"
                  class="bwidp"
                  v-model="dtn"
                />
              </div>
            </div>

            <div class="mt-2">
              <div class="field col-12 md:col-4 mt-2">
                <span class="p-float-label">
                  <InputText id="inpute" class="bwid col-12" type="text" />
                  <label for="inpute">Email</label>
                </span>
              </div>
            </div>

            <div class="mt-2">
              <label>Mot de passe</label>
              <div class="p-inputgroup mt-2">
                <span class="p-inputgroup-addon borange">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText
                  class="bwid"
                  type="password"
                  required
                  placeholder=""
                />
              </div>
              <b>Creer un mot de passe d'au moins 6 caracteres </b>
            </div>

            <div class="mt-2">
              <label>Confirmation mot de passe</label>
              <div class="p-inputgroup mt-2">
                <span class="p-inputgroup-addon borange">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText
                  class="bwid"
                  type="password"
                  required
                  placeholder=""
                />
              </div>
            </div>

            <div class="mt-2">
              <div class="field col-12 md:col-4 mt-2">
                <span class="p-float-label">
                  <InputText id="inputco" class="bwid col-12" type="text" />
                  <label for="inputco">Code à usage unique</label>
                </span>
              </div>
              <b
                >Un SMS avec un code à usage unique est envoyé sur votre
                telephone</b
              >
            </div>

            <div class="mt-2">
              <div class="mt-2">
                <table>
                  <tr>
                    <td><input type="checkbox" class="chorange" /></td>
                    <td>
                      <span class="bcenter"
                        >Je suis d'accord avec les termes et les conditions
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="mt-3 bcenter">
              <span class="torange">Lire les termes et conditions </span>
            </div>

            <div class="mt-4">
              <Button
                type="submit"
                label="CONTINUER"
                class="col-12 borange cradius"
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
export default {
  name: "Ins",
  props: {
    msg: String,
  },
  data() {
    return {
      show: (Boolean = true),
      mytitle: String,
      cont: null,
      dtn: null,
      // img: String = require("../assets/img/tp.png"),
      liste: [],
      opt: []
    };
  },
  methods: {
    MyInit() {
      this.mytitle = "Entrer un numero ...";
    },
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
      let ob = this;
      if (ob.cont != null) {
        ob.mytitle = "Entrez les informations";
        ob.show = false;
      }
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
    this.MyInit();
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