<template>
  <div class="confirm">
    <div class="mt-1 col-12 md:col-4">
      <h3 class="bcenter">{{ title }}</h3>
    </div>

    <div class="mt-1 col-12 md:col-4 zonetex2">
      <div class="mt-2" v-if="state == 1">
        <div>
          Paiement pour soi
          <RadioButton
            @change="DefinePay(1)"
            name="pay"
            class="fright"
            value="1"
            v-model="check"
          />
        </div>

        <div class="mt-4">
          Paiement pour un tiers
          <RadioButton
            @change="DefinePay(2)"
            name="pay"
            class="fright"
            value="2"
            v-model="check"
          />

          <div class="mt-2" v-if="stateinp == 1">
            <InputNumber
              inputId="withoutgrouping"
              prefix="O"
              mode="decimal"
              :use-grouping="false"
              placeholder="Telephone (10 chiffres )"
              v-model="inpTel"
              class="col-12"
              @input="CheckInput"
            />
          </div>

          <div class="mt-2" v-if="stateinp2 == 1">
            <span class="my-a col-12 myorange cradius" @click="state = 2"
              >SUIVANT</span
            >
          </div>
        </div>
      </div>

      <div v-if="state == 2">
        <div class="mt-2 bcenter">
          <h4>Veuillez saisir le code qui vous a été envoyé par sms</h4>
        </div>
        <div class="mt-4"></div>
        <div class="mt-4"></div>
        <hr />
        <div class="mt-1"></div>

        <div class="mt-4">
          <span>Total: </span>
          <span class="fright torange">XOF {{ total }}</span>
        </div>

        <div class="mt-4">
          <div class="">
            <table>
              <tr>
                <td>
                  <Button class="ciorg">
                    <i class="pi pi-calendar"></i>
                  </Button>
                </td>
                <td>
                  <span>XOF 0.0</span>
                  <br />
                  <span>Mon portefeuille</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="mt-4">
            <a class="my-a col-12 myorange cradius" @click="ConfPay">PAYER</a>
          </div>
        </div>
      </div>
      <div v-if="state == 3">
        <div class="mt-2 bcenter">
          <div>
            <Button class="ciorg">
              <i class="pi pi-calendar"></i>
            </Button>
          </div>

          <div class="mt-2">XOF 100.00</div>
        </div>
        <div class="mt-4"></div>
        <div class="mt-4"></div>
        <hr />
        <div class="mt-1">
          
          <div class="mt-2">
            <label>Date</label>
            <div class="mt-1">
              <b></b>
            </div>
          </div>

          <div class="mt-2">
            <label>Identifiant transaction</label>
            <div class="mt-1">
              <b></b>
            </div>
          </div>

           <div class="mt-2">
            <label>Statut</label>
            <div class="mt-1">
              <b></b>
            </div>
          </div>

        </div>

        <div class="mt-4">
          <div class="mt-4">
            <a class="my-a col-12 myorange cradius">TERMINER</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
export default {
  name: "Confirm",
  props: {
    msg: String,
    Tot: {
      type: Number,
      default: 0,
    },
    Res: null,
  },
  data() {
    return {
      title: "Veuillez confirmer",
      show: (Boolean = true),
      total: 0,
      state: 1,
      stateinp: 0,
      stateinp2: 0,
      check: 0,
      inpTel: null,
    };
  },
  methods: {
    ConfPay(){
        this.state = 3;
        this.$parent.TotalProducts =[];
    },
    CheckInput(e) {
      this.inpTel = e.value;
      if (this.inpTel != null) {
        if (this.inpTel.toString().length > 9) {
          this.inpTel = this.inpTel.toString().substring(0, 9);
          e.value = this.inpTel;
          e.originalEvent.target.value = this.inpTel;
        }

        if (this.inpTel.toString().length == 9) {
          this.stateinp2 = 1;
        } else {
          this.stateinp2 = 0;
        }
      } else {
        this.stateinp2 = 0;
      }
    },
    DefinePay(f) {
      switch (f) {
        case 1:
          this.stateinp = 0;
          this.stateinp2 = 1;
          break;

        default:
          this.stateinp = 1;
          this.inpTel = null;
          this.stateinp2 = 0;
          break;
      }
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
  },
  watch: {
    Tot(n, a) {
      this.total = n;
    },
    Res(n, a) {
      this.state = 1;
      this.stateinp = 0;
      this.stateinp2=0;
      this.inpTel = null;
      this.check = null;    
    },
  },
  mounted() {
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