<template>
  <div class="home">
    <Confirm />
  </div>
</template>

<script>
// @ is an alias to /src
import Confirm from '@/components/Confirm.vue'

export default {
  name: 'ConfirmView',
  components: {
    Confirm
  }
}
</script>
