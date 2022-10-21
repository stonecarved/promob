<template>
  <div class="plus">
    <div class="mt-1 col-12 md:col-4">
      <h3>{{ title }}</h3>
    </div>

    <div class="mt-1 col-12 md:col-4 zonebl">
      <span class="" @click="Back">
        <Button class=" ciorgb" @click="Back">
          <i class="pi pi-star"></i>
        </Button>
      </span>

      &nbsp; Favoris
      <span class="torange pi pi-angle-right fright"> </span>
    </div>
    <div class="mt-1 col-12 md:col-4 zonebl">
      <span class="" @click="Back">
        <Button class=" ciorgb" @click="Back">
          <i class="pi pi-map-marker"></i>
        </Button>
      </span>

      &nbsp; Emplacements
      <span class="torange pi pi-angle-right fright"> </span>
    </div>

    <div class="mt-1 col-12 md:col-4 zonebl">
      <span class="" @click="Back">
        <Button class=" ciorgb" @click="Back">
          <i class="pi pi-cog"></i>
        </Button>
      </span>

      &nbsp; Parametres
      <span class="torange pi pi-angle-right fright"> </span>
    </div>
    <div class="mt-1 col-12 md:col-4 zonebl">
      <span class="" @click="Back">
        <Button class=" ciorgb" @click="Back">
          <i class="pi pi-phone"></i>
        </Button>
      </span>

      &nbsp; Contacts
      <span class="torange pi pi-angle-right fright"> </span>
    </div>

    <div class="mt-1 col-12 md:col-4 zonebl">
      <span class="" @click="Back">
        <Button class=" ciorgb" @click="Back">
          <i class="pi pi-sign-out"></i>
        </Button>
      </span>

      &nbsp; Se deconnecter
      <span class="torange pi pi-angle-right fright"> </span>
    </div>


  </div>
</template>

<script>
import $ from "../assets/lib/js/jquery.min.js";
export default {
  name: "Plus",
  props: {
    msg: String,
  },
  data() {
    return {
      title: "Plus",
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