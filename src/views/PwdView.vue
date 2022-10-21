<template>
  <div class="pwd">
    <Pwd />
  </div>
</template>

<script>
// @ is an alias to /src
import Pwd from '@/components/Pwd.vue';
import $ from '../assets/lib/js/jquery.min.js';

export default {
  name: 'PwdView',
  components: {
    Pwd
  },
  methods:{

  },
  mounted(){
    $('.blocapp').hide();
  }
}
</script>
