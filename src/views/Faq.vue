<template>
  <div class="layout-root">
    <div class="layout-content">
      <div class="layout-wrap">
        <main class="main app-main">
          <div class="outer-wrapper-lg">
            <h1 class="outer-title layout-animate layout-animation-1">FAQ</h1>
            <section class="outer-section questions layout-animate layout-animation-2">
              <h2 class="section-title font-600">Ответы на все часто задаваемые вопросы</h2>
              <div class="section-wrapper" v-for="entry in entries" :key="entry.id">
                <h3 class="question font-500">{{entry.question}}</h3>
                <p class="answer">{{entry.answer}}</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from 'vue-meta'

export default {
  name: "Faq",
  setup() {
    useMeta({title: 'AniHouse - FAQ'})
  },
  data() {
    return {
      entries: []
    }
  },
  async mounted() {
    this.entries = await (await fetch(`http://localhost:3001/faq`)).json()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.outer-title{
  margin-bottom: var(--space-3xl);
  @include media("max", "page") {
    margin-bottom: var(--space-xl);
  }
  @include media("max", "md") {
    margin-bottom: var(--space-m);
  }
}

.section-title {
  margin-bottom: var(--space-3xl);
}

.outer-section {
  &:first-child {
    margin-bottom: var(--space-4xl);
  }
  margin-bottom: var(--space-5xl);
  @include media("max", "md") {
    margin-bottom: var(--space-4xl);
  }
  &:last-child {
    margin-bottom: var(--space-6xl);
  }
  .section-wrapper{
    margin-bottom: var(--space-3xl);
  }
}

.questions{
  .question{
    margin-bottom: var(--space-l);
  }
  .answer{
    color: var(--white-alpha72);
  }
}
</style>

