<template>
  <div class="menu">
    <Menu />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';
import $ from '../assets/lib/js/jquery.min.js';

export default {
  name: 'MenuView',
  components: {
    Menu
  },
  methods:{

  },
  mounted(){
    $('.blocapp').hide();
  }
}
</script>
