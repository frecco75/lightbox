<template>
    <div class="lightbox" v-if="image">
      <img :src="image">
    </div>
</template>

<script>
  import './LightboxDirective'
  import store from './LightboxStore'

  export default {
      data () {
        return {
          state : store.state
        }
      },
      computed: {
        image () {
          if(this.state.index) {
            return this.state.images[this.state.index - 1]
          }
        }
      }
    }
</script>

<style src="./lightbox.scss" lang="scss"></style>
