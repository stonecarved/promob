<template>
  <div class="ins">
    <Ins />
  </div>
</template>

<script>
// @ is an alias to /src
import Ins from '@/components/Ins.vue';
import $ from '../assets/lib/js/jquery.min.js';

export default {
  name: 'InsView',
  components: {
    Ins
  },
  methods:{

  },
  mounted(){
    $('.blocapp').hide();
  }
}
</script>
