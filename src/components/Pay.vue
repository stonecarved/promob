<template>
  <div class="pay">
    <div class="mt-1 col-12 md:col-4">
      <h3>{{ title }} {{ tit }}</h3>
    </div>

    <div
      class="mt-1 col-12 md:col-4 zonebl"
      v-if="state == 0"
      @click="state = 1"
    >
      <span class="">
        <Button class="ciorgb">
          <i class="pi pi-arrow-circle-left"></i>
        </Button>
      </span>

      &nbsp; paiement au fournisseur
      <span class="torange pi pi-angle-right fright"> </span>
    </div>

    <div v-if="state == 1">
      <div class="col-12">
        <span class="">
          <InputText
            id="inpute"
            class="col-12"
            type="text"
            placeholder="Rechercher"
            v-model="inputrec"
            @input="MyFilter"
          />
        </span>
      </div>
      <div class="zfour">
        <div v-bind:key="index" v-for="(item, index) in itemsFour">
          <div
            class="mt-1 col-12 md:col-4 zonetex zcont"
            @click="ActionPanier(item.lib.toUpperCase())"
          >
            <span>
              <Button class="ciorgb">
                <i class="pi pi-circle-fill"></i>
              </Button>
            </span>
            &nbsp;<span>{{ item.lib.toUpperCase() }}</span>
          </div>
        </div>
      </div>
      <div class="col-12 mt-5"></div>
    </div>

    <div v-if="state == 2">
      <div class="col-12">
        <div v-bind:key="index" v-for="(item, index) in itemsDetail">
          <div class="mt-1 md:col-4 zonetex2">
            <div class="col-12">
              {{ item.lib.toUpperCase() }}
            </div>
            <div class="grid col-12">
              <div class="col-7">
                <InputNumber
                  placeholder="Montant"
                  v-model="item.mnt"
                  :use-grouping="false"
                  :readonly="true"
                />
              </div>
              <div class="col-5">
                <div v-if="item.etat == 1" class="p-inputgroup bcenter">
                  <Button
                    icon="pi pi-minus"
                    class="rorange"
                    @click="ActionMinus(item)"
                  />
                  <InputNumber :readonly="true" v-model="item.vnum" :min="1" />
                  <Button
                    icon="pi pi-plus"
                    class="rorange"
                    @click="ActionPlus(item)"
                  />
                </div>

                <div v-else>
                  <Button class="ciorgb fright" @click="ActionChart(item)">
                    <i class="pi pi-cart-plus"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
import Menu from "@/components/Menu.vue";
export default {
  name: "Pay",
  props: {
    msg: String,
    Totprod: [],
    Res: null,
  },
  components: {
    Menu,
  },
  data() {
    return {
      title: "Paiements",
      tit: "",
      state: 0,
      show: (Boolean = true),
      mytitle: String,
      cont: null,
      dtn: null,
      opt: [],
      vnum: 1,
      inputrec: null,
      ProductsSelected: [],
      itemsFour: [
        { id: 1, lib: "A.G.E.P.E" },
        { id: 2, lib: "agence comptable des creances contencieuse (ACCC)" },
        { id: 3, lib: "agence emploidu temps" },
        { id: 4, lib: "cnit" },
        { id: 5, lib: "commune ouangolodougou" },
        { id: 6, lib: "crou abijan (crou a2)" },
      ],
      itemsDetail: [
        {
          id: 1,
          lib: "acte d'hygiene-agrement entreprise",
          etat: 0,
          vnum: 1,
          mnt: 5000,
          det: "",
          cat: 1,
        },
        {
          id: 2,
          lib: "attestation alimentaire",
          etat: 0,
          vnum: 1,
          mnt: 2000,
          det: "",
          cat: 1,
        },
        {
          id: 3,
          lib: "attestattion de formation",
          etat: 0,
          vnum: 1,
          mnt: 4000,
        },
        {
          id: 4,
          lib: "certificat de vaccination enfant",
          etat: 0,
          vnum: 1,
          mnt: 2000,
          det: "",
          cat: 1,
        },
        {
          id: 5,
          lib: "delivrance de certificat de provenance",
          etat: 0,
          vnum: 1,
          mnt: 3000,
          det: "",
        },
        {
          id: 6,
          lib: "droit d'entree au stade, complexes sportifs",
          etat: 0,
          vnum: 1,
          mnt: 3000,
          det: "",
          cat: 1,
        },
        {
          id: 7,
          lib: "frais d'inscription",
          etat: 0,
          vnum: 1,
          mnt: 3000,
          det: "",
          cat: 1,
        },
      ],
    };
  },
  methods: {
    MyFilter() {
      var filter, div, tr, td;
      filter = this.inputrec.toUpperCase();
      div = document.getElementsByClassName("zfour")[0];
      tr = div.getElementsByClassName("zcont");
      for (var i = 0; i < tr.length; i++) {
        var tds = tr[i].getElementsByTagName("span");
        var flag = false;
        for (var j = 0; j < tds.length; j++) {
          var td = tds[j];
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            flag = true;
          }
        }
        if (flag) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    },
    ResetInputPan() {
      this.$parent.total = 0;
      //console.log(this.ProductsSelected, this.itemsDetail);
      for (let index = 0; index < this.itemsDetail.length; index++) {
        let element = this.itemsDetail[index];
        let pos = -1;
        for (let ind = 0; ind < this.ProductsSelected.length; ind++) {
          const el = this.ProductsSelected[ind];
          if (el.id == element.id) {
            // console.log(element);
            pos = 0;
            this.$parent.total += el.vnum;
            break;
          }
        }
        if (pos == -1) {
          element.etat = 0;
          element.vnum = 1;
          //console.log(element);
        }
      }
    },

    CheckproductSelected(d) {
      if (d.vnum == 0) {
        this.ProductsSelected = this.ProductsSelected.filter(
          (p) => p.id != d.id
        );
        return false;
      }

      d.det = d.vnum + "*" + d.mnt;
      if (this.ProductsSelected.length == 0) {
        this.ProductsSelected.push(d);
      } else {
        let pos = -1;
        for (let index = 0; index < this.ProductsSelected.length; index++) {
          const element = this.ProductsSelected[index];
          if (element.id == d.id) {
            pos = index;
            element.vnum = d.vnum;
            break;
          }
        }
        if (pos == -1) {
          this.ProductsSelected.push(d);
        }
      }
      this.$parent.TotalProducts = this.ProductsSelected;
    },
    /* Det(d){
      d.det = d.vnum+"*"+d.mnt;  
    },*/
    ActionMinus(d) {
      if (d.vnum == 1) {
        d.etat = 0;
      }
      d.vnum -= 1;
      //this.Det(d);
      this.$parent.total -= 1;
      this.CheckproductSelected(d);
      //this.$parent.TotalProducts = this.itemsDetail;
    },
    ActionPlus(d) {
      d.vnum += 1;
      //this.Det(d);
      //this.$parent.total = d.vnum;
      this.$parent.total += 1;
      this.CheckproductSelected(d);
      //this.$parent.TotalProducts = this.itemsDetail;
    },
    ActionChart(d) {
      if (d.vnum == 0) {
        d.vnum = 1;
      }
      //this.Det(d);
      d.etat = 1;
      this.$parent.total += 1;
      this.CheckproductSelected(d);
      //this.$parent.TotalProducts = this.itemsDetail;
    },
    ActionPanier(s) {
      this.state = 2;
      this.tit = "au fournisseur " + s;
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
    Totprod(n, a) {
      this.ProductsSelected = n;
      this.ResetInputPan();
      //this.$parent.TotalProducts = this.ProductsSelected;
    },
    Res(n, a) {
      this.state = 0;
      this.tit ="";
    },
  },
  mounted() {
    this.state = 0;
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