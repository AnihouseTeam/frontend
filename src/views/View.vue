<template>
  <div class="view-root">
    <div class="view-envelope layout-animate layout-animation-envelope">
      <img class="view-cover" :src="cover">
    </div>
    <div class="layout-root">
      <div class="layout-content">
        <div class="layout-wrap">
          <main class="main app-main">
            <div class="outer-wrapper">
              <section class="view-detalis outer-section">
                <img class="view-poster layout-animate layout-animation-1" :src="poster">
                <div class="view-info">
                  <h2 class="view-title layout-animate layout-animation-2">{{ title }}</h2>
                  <div class="view-meta layout-animate layout-animation-3">
                    <p class="is-meta view-parameters">{{ year }}, {{ genres }}</p>
                    <p class="is-meta view-voiced"><span class="font-600 view-names">Озвучили:</span> {{ voiced }}</p>
                    <p class="is-meta view-sound"><span class="font-600 view-names">Тайминг и работа со звуком:</span> {{ sound }}</p>
                  </div>
                  <div class="view-description layout-animate layout-animation-4">
                    {{ description }}
                  </div>
                </div>
              </section>
              <section class="view-watch outer-section layout-animate layout-animation-5">
                <div class="view-selector">
                  <div class="selector-root">
                    <div class="selector-title">Серия</div>
                    <div class="selector-inner">
                      <div class="selector-option">
                        <input type="radio" class="selector-check" name="series" id="series-1" autocomplete="off" checked>
                        <label class="selector-label" for="series-1">1</label>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe class="view-embed" width="560" height="315" src="https://www.youtube.com/embed/lAtKkA0Ea0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from 'vue-meta'

export default {
  name: "View",
  data() {
    return {
      title: "Чёрная лагуна",
      year: "2006",
      genres: "Сэйнэн, Драма, Комедия, Убийцы, Боевик, Экшен",
      voiced: "DeZeR_HELL, Horomi, Soft Fox, Hisoka, BiPs",
      sound: "DeZeR_HELL",
      description: "Рокуро нужно доставить диск с важными данными в юго-восточную Азию, но ещё по пути туда он встречает неприятности: на корабль нападают, а его берут в заложники. Но информация на диске настолько важна, что за Рокуро теперь охотятся его старые работодатели, и он по воле случая становится сотрудником \"Чёрной лагуны\". Какие же приключения ждут его?",
      poster: "images/anime-posters/poster_23.jpg",
      cover: "images/anime-banners/banner_23.jpg"
    }
  },
  setup() {
    useMeta({
        title: 'AniHouse - Чёрная лагуна'
    })
  },
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.outer-title {
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

  .section-wrapper {
    margin-bottom: var(--space-3xl);
  }
}


.view-envelope {
  z-index: -1;
  width: 100%;
  height: 462px;
  @include media("max", "md") {
    height: 402px;
  }
  position: absolute;
  border-radius: var(--border-radius-m);
  top: 0;
  &:after {
    content: "";
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    position: absolute;
    z-index: 0;
    background: linear-gradient(
            0deg, #181b20 0, #181b20e0 10%, #fff0 60%) bottom, linear-gradient(
            180deg, #000 -5%, rgba(0, 0, 0, 0) 60%) top;
  }

  .view-cover {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

.outer-wrapper {
  margin-top: calc(-4.466667rem - -27vh);
  @include media("max", "md") {
    margin-top: calc(-6.466667rem - -27vh);
  }
}

.view-detalis {
  display: flex;
  margin-bottom: var(--space-5xl);
  @include media("max", "md") {
    flex-direction: column;
  }
  .view-poster {
    border-radius: var(--border-radius-m);
    width: 14rem;
    margin-right: var(--space-3xl);
    height: var(--size-max);
    @include media("max", "md") {
      margin: 0 auto var(--space-3xl);
    }
  }
  .view-title{
    margin-bottom: var(--space-m);
  }
  .view-names{
    margin-right: var(--space-xs);
  }
  .view-meta{
    margin-bottom: var(--space-xl);
    .is-meta:not(:last-child){
      margin-bottom: var(--space-2xs);
    }
  }
}

.view-watch{
  .view-embed{
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: var(--border-radius-m);
    height: auto;
  }

  .selector-check{
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .selector-option:last-child{
    .selector-label{
      margin-right: 0;
    }
  }

  .selector-label{
    @include styled-button;
    border: 1px solid var(--bg-3);
    background-color: var(--bg-2);
    height: var(--size-3xl);
    width: var(--size-3xl);
    border-radius: var(--border-radius-m);
    margin-right: var(--space-2xs);
    margin-bottom: var(--space-2xs);
  }

  .selector-title{
    margin-bottom: var(--space-s);
  }

  .selector-option{
    display: inline-block;
  }

  .view-selector{
    margin-bottom: var(--space-2xl);
  }

  .selector-check:checked+.selector-label{
    --selector-border: #8571fd;
    background-color: var(--color-primary);
    border: 1px solid var(--selector-border);
  }

  .view-selector{
    @include flex;
  }
}

.layout-animate {
  &.layout-animation-envelope {
    -webkit-animation: fadeInLayout 1s .05s backwards;
    animation: fadeInLayout 1s .05s backwards;
  }
}

@keyframes fadeInLayout {
  0% {
    opacity: 0;
  }
}
</style>

