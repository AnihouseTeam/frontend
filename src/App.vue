<template>
  <div class="app-layout">
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <Header/>
    <router-view v-slot="{ Component }" data-layout="content">
      <transition name="page-fade" mode="out-in"><component :is="Component" /></transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'ru' }
    })
  },
  watch: {
    items: {
      handler(val, oldVal) {
        console.log(oldVal + ' --> ' + val)
      },
      deep: true
    }
  },
}
</script>

<style scoped lang="scss" type="text/scss">
@import '../public/styles/common.css';
@import '../public/styles/variables.css';
@import '../public/styles/typography.css';

.page-fade-enter-active,
.page-fade-leave-active {
  --page-transition: all .15s ease;
  --page-transition-delay: 15ms;
  transition: var(--page-transition);
  transition-delay: var(--page-transition-delay);
  overflow: hidden;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
