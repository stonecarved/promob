<template>
  <div class="home">
    <div class="mt-1 col-12 md:col-4">
      <div class="bloc1">
        <div class="dport">
          <Panel class="col-12" header="Portefeuilles" :toggleable="true">
            <Button class="ciorange">
              <i class="pi pi-calendar"></i>
            </Button>
            <div class="mt-1">
              <h5>XOF O.O</h5>
              <h6>TFRJJKJKKKHKH</h6>
            </div>
          </Panel>
        </div>
        <div>
          <Panel
            class="col-12"
            header="Favoris"
            :toggleable="true"
            :collapsed="true"
          ></Panel>
        </div>
        <div>
          <Panel
            class="col-12"
            header="Operations recentes"
            :toggleable="true"
            :collapsed="true"
          ></Panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      show: (Boolean = true),
      mytitle: String,
      cont: null,
      dtn: null,
      opt: [],
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
  },

  mounted() {
    /*  $("html").css({
      background: "#FFFCFB",
    });
    this.MyInit(); */
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