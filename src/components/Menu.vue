<template>
  <div class="menu">
    <div>
      <div class="">
        <div class="fright">
          <Button class="ciorg" @click="OpenPositionPan('bottom')">
            <i class="pi pi-shopping-cart"></i>
            <span v-if="total != 0">+{{ this.total }}</span> </Button
          >&nbsp;
          <Button class="cigreen" @click="OpenPosition('bottom')">
            <i class="pi pi-users"></i>
          </Button>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <Button class="ciorg" @click="Back">
                  <i class="pi pi-user"></i>
                </Button>
                &nbsp;
              </td>
              <td>
                <b>Nom & prenoms</b> <br />
                Contact
              </td>
            </tr>
          </table>
        </div>
      </div>

      <Home v-if="state == 0" />
      <Pay v-show="state == 1" :Totprod="TotalProducts" :Res="ResPay" />
      <Plus v-if="state == 2" />
      <Confirm v-show="state == 3" :Tot="mnttotal" :Res="ResPay" />

    </div>

    <Dialog
      header="Bavarder"
      v-model:visible="displayPosition"
      :breakpoints="{ '960px': '75vw', '640px': '100%' }"
      :style="{ width: '100%' }"
      :position="position"
      :modal="true"
      :keepInViewport="true"
    >
      <div class="m-0 zdis" :style="{ height: '500px' }">
        <div class="torange bcenter">Ajourd'hui</div>
      </div>

      <template #footer>
        <div class="grid col-12 zfooter mt-4">
          <div class="field col-10">
            <span class="p-float-label zbtn">
              <InputText
                id="inpute"
                class="bwid col-12 bdorg"
                type="text"
                @keyup="GetText"
                v-model="text"
                placeholder="Tapez votre message"
              />
              <label for="inpute"></label>
            </span>
          </div>
          <div class="col-2">
            <Button class="ciorg" @click="DefineAction">
              <i :class="ticon"></i>
            </Button>
          </div>
        </div>
      </template>
    </Dialog>

    <Dialog
      header="Paiements nature de recette"
      v-model:visible="displayPositionPan"
      :breakpoints="{ '960px': '75vw', '640px': '100%' }"
      :style="{ width: '100%' }"
      :position="position"
      :modal="true"
      :keepInViewport="true"
    >
      <div class="m-0 zdis" :style="{ height: '500px' }" v-if="total == 0">
        <div class="bcenter torange">Panier vide</div>
      </div>
      <div class="m-0 zdis" :style="{ height: '500px' }" v-else>
        <h5>Services</h5>
        <DataTable :value="TotalProducts" responsiveLayout="scroll">
          <Column field="lib" header="Recette"></Column>
          <Column field="det" header="Montant" class="torange"></Column>
          <Column header="">
            <template #body="slotProps">
              <Button class="ciorgb" @click="Delete(slotProps.data)">
                <i class="pi pi-trash"></i>
              </Button>
            </template>
          </Column>
        </DataTable>
        <hr />
        <span>Total: </span> <span class="torange fright">XOF {{ mnttotal }}</span>

        <div>
          <div class="mt-3">
            <a class="my-a col-12 myorange cradius" @click="ClickConf"
              >Continuer</a
            >
          </div>
        </div>
      </div>

      <template #footer>
        <Button v-show="false"
          label="No"
          icon="pi pi-times"
          @click="CloseBasic"
          class="p-button-text"
        />
      </template>
    </Dialog>
  </div>

  <div class="grid mytab">
    <div class="col-4" @click="ActionMenu(0)">
      <i class="pi pi-home"></i>
      <br />
      <span class="">Acceuil</span>
    </div>

    <div class="col-4" @click="ActionMenu(1)">
      <i class="pi pi-money-bill"></i>
      <br />
      <span class="">Paiements</span>
    </div>
    <div class="col-4" @click="ActionMenu(2)">
      <i class="pi pi-fw pi-ellipsis-h"></i>
      <br />
      <span class="">Plus</span>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
import Home from "@/components/Home.vue";
import Pay from "@/components/Pay.vue";
import Plus from "@/components/Plus.vue";
import Confirm from "@/components/Confirm.vue";
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  components: {
    Home,
    Pay,
    Plus,
    Confirm,
  },
  data() {
    return {
      displayPosition: false,
      displayPositionPan: false,
      position: "center",
      display: true,
      text: null,
      state: 0,
      total: 0,
      mnttotal: null,
      ResPay:null,
      ticon: "pi pi-microphone",
      //Bilan: null,
      TotalProducts: null,
      // img: String = require("../assets/img/tp.png"),
      liste: [],
      items: [
        { label: "Accueil", icon: "pi pi-fw pi-home", to: "/menu" },
        { label: "Paiements", icon: "pi pi-fw pi-calendar" },
        { label: "Plus", icon: "pi pi-fw pi-ellipsis-h" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" },
      ],
    };
  },
  methods: {
    ClickConf(){
      this.state = 3;
      this.displayPositionPan = false;
    },
    CloseBasic() {
      this.displayPositionPan = false;
    },
    Edit(d) {},
    Delete(d) {
      this.TotalProducts = this.TotalProducts.filter((p) => p.id != d.id);
      this.DeterTotalAchat();
      this.total = this.TotalProducts.length;
      this.state = 1;
    },
    ActionMenu(s) {
      if(s ==1){
        this.ResPay+=1;
        console.log(this.ResPay);
      }
      this.state = s;
    },
    DeterTotalAchat() {
      if (this.TotalProducts != null) {
        this.mnttotal = 0;
        if (this.TotalProducts.length != 0) {
          for (let index = 0; index < this.TotalProducts.length; index++) {
            const element = this.TotalProducts[index];
            this.mnttotal += element.mnt * element.vnum;
          }
        }
      }
    },
    DefineText(sms = "", etat = 0) {
      let c = "rpadb";
      if (etat == 1) {
        c = "rpadc";
      }
      let format =
        '<div class="mt-2 rpad ' + c + '" >' + "<b>" + sms + "</b></div>";
      $(".zdis").append(format);
    },
    DefineAction() {
      switch (this.ticon) {
        case "pi pi-microphone":
          break;

        default:
          this.DefineText(this.text, 1);
          break;
      }
    },
    GetText() {
      if (this.text != null) {
        if (this.text.length > 0) {
          this.ticon = "pi pi-send";
          //this.zdiscolor="rpadc";
        } else {
          this.ticon = "pi pi-microphone";
        }
      } else {
        this.ticon = "pi pi-microphone";
      }
    },

    ClosePosition() {
      this.displayPosition = false;
    },
    ClosePositionPan() {
      this.displayPositionPan = false;
    },
    OpenPosition(position) {
      this.position = position;
      this.displayPosition = true;
      let ob = this;
      setTimeout(function () {
        let sms =
          "Bonjour. Je suis un chatbot. Comment puis-je vous aider?" +
          "Vous pouvez m'ecrire ou m'envoyer un message vocal";
        ob.DefineText(sms, 0);
      }, 100);
    },
    OpenPositionPan(position) {
      this.position = position;
      this.displayPositionPan = true;
      this.DeterTotalAchat();
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
  created() {
    $("html").css({
      background: "#F2F1EF",
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