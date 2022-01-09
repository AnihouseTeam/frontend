<template>
  <div class="view-root">
    <div class="view-envelope layout-animate layout-animation-envelope">
      <img class="view-cover" :src="movie.banner">
    </div>
    <div class="layout-root">
      <div class="layout-content">
        <div class="layout-wrap">
          <main class="main app-main">
            <div class="outer-wrapper">
              <section class="view-detalis outer-section">
                <img class="view-poster layout-animate layout-animation-1" :src="movie.poster">
                <div class="view-info">
                  <h2 class="view-title layout-animate layout-animation-2">{{ movie.title }}</h2>
                  <div class="view-meta layout-animate layout-animation-3">
                    <p class="is-meta view-parameters">{{ new Date(movie.created).getFullYear() }},
                      {{ movie.genres?.map(genre => genre.genre.name).join(', ') }}</p>
                    <p v-if="movie.dabbers?.length" class="is-meta view-dappers"><span class="font-600 view-names">Озвучили:</span>
                      {{ movie.dabbers?.join(', ') }}</p>
                    <p v-if="movie.techies?.length" class="is-meta view-techies"><span class="font-600 view-names">Тайминг и работа со звуком:</span>
                      {{ movie.techies?.join(', ') }}</p>
                    <p v-if="movie.translators?.length" class="is-meta view-translators"><span
                        class="font-600 view-names">Перевод:</span> {{ movie.translators?.join(', ') }}</p>
                  </div>
                  <div class="view-description layout-animate layout-animation-4">
                    {{ movie.description }}
                  </div>
                </div>
              </section>
              <section class="view-watch outer-section layout-animate layout-animation-5">
                <div class="selector-wrapper">
                  <div class="view-selector" v-if="movie.episodes?.length >= 2">
                    <div class="selector-root">
                      <div class="selector-title">Серия</div>
                      <div class="selector-inner">
                        <div v-for="(episode, index) in movie.episodes" :key="episode.id" class="selector-option">
                          <input type="radio" class="selector-check" name="series" :id="`series-${index}`"
                                 autocomplete="off" :checked="episodeSelected === index"
                                 v-on:click="episodeSelected = index">
                          <label class="selector-label" :for="`series-${index}`">{{ index + 1 }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="selector-title">Плеер</div>
                    <Listbox v-model="playerSelected">
                      <div class="options-wrapper">
                        <ListboxButton class="position-relative app-inputs-padding filter-option-button">Плеер:
                          {{ playerSelected }}
                        </ListboxButton>
                        <ListboxOptions class="position-absolute filter-option-list bg-color-3 z-3">
                          <ListboxOption v-for="player in players" :key="player" :value="player">
                            {{ player }}
                          </ListboxOption>
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <!-- <iframe class="view-embed" width='560px' height='315px'
                        :src='`https://player.vimeo.com/video/${movie.episodes && movie.episodes[episodeSelected].vimeoId}?&title=0&color=7F6DF2&byline=0&portrait=0`'></iframe>-->
               <iframe class="view-embed" width='560px' height='315px'
                       :src="playerEmbed[playerSelected]"></iframe>
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
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import {ref} from "vue";

export default {
  name: "View",
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  data() {
    return {
      episodeSelected: 0,
      playerSelected: "",
      playerEmbed: "",
      players: [],
      movieTitle: "",
      movie: {}
    }
  },

  async mounted() {
    // const movieData = await (await fetch(`http://localhost:3001/movie/${this.$route.params.id}`)).json()
    const movieData = {
      id: 1,
      title: "ИМЯ",
      description: "ОПИСАНИЕ",
      poster: "link",
      banner: "link",
      typeId: 1,
      created: "2022-01-08T15:46:58.568Z",
      visible: true,
      deleted: false,
      dabbers: [
        "13123"
      ],
      techies: [
        "123123"
      ],
      translators: [
        "123123"
      ],
      episodesTotal: 20,
      carouselPosition: 0,
      episodes: [
        {
          id: 1,
          movieId: 1,
          players: {
            mega: "https://mega.nz/embed/UF1yVRrT#LB00r9oRUUgK6eIEj8wYYTsqN4r3Qx15nKvmKWXUqG8",
            sibnet: "https://video.sibnet.ru/shell.php?videoid=3990183&share=0",
            google: "https://drive.google.com/file/d/1DmXvrPQ8BE4LGi-EAlcEp97dwesOu5mH/preview",
            vk: "https://vk.com/video_ext.php?oid=-175912030&id=456239035&hash=8fa355c905f2fef8&hd=2",
            ok: "https://ok.ru/videoembed/2043669645944",
            youtube: "https://www.youtube.com/embed/GfyczBf37ss",
          },
          created: "2022-01-08T15:47:16.243Z"
        }
      ],
      genres: [
        {
          movieId: 1,
          genreId: 1,
          genre: {
            id: 1,
            name: "genre"
          }
        }
      ]
    };

    useMeta({
      title: 'AniHouse - ' + movieData.title
    })

    //if (!movieData) await this.$router.push('/')
    this.players = Object.keys(movieData.episodes[0].players)
    this.playerSelected = ref(this.players[0])
    this.playerEmbed = movieData.episodes[0].players;

    //this.movie = movieData
    this.movie = await Promise.resolve(movieData)
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
    // height: var(--size-max);
    aspect-ratio: 51/70;
    background: var(--bg-2);
    @include media("max", "md") {
      margin: 0 auto var(--space-3xl);
    }
  }

  .view-title {
    margin-bottom: var(--space-m);
  }

  .view-names {
    margin-right: var(--space-xs);
  }

  .view-meta {
    margin-bottom: var(--space-xl);

    .is-meta:not(:last-child) {
      margin-bottom: var(--space-2xs);
    }
  }
}

.view-watch {
  .view-embed {
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: var(--border-radius-m);
    height: auto;
  }

  .selector-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .selector-option:last-child {
    .selector-label {
      margin-right: 0;
    }
  }

  .selector-label {
    @include styled-button;
    border: 1px solid var(--bg-3);
    background-color: var(--bg-2);
    height: var(--size-3xl);
    width: var(--size-3xl);
    border-radius: var(--border-radius-m);
    margin-right: var(--space-2xs);
    margin-bottom: var(--space-2xs);
  }

  .selector-title {
    margin-bottom: var(--space-s);
  }

  .selector-option {
    display: inline-block;
  }

  .selector-check:checked + .selector-label {
    --selector-border: #8571fd;
    background-color: var(--color-primary);
    border: 1px solid var(--selector-border);
  }

  .view-selector {
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

.filter-options {
  width: var(--size-max);
}

.options-wrapper {
  border-radius: var(--border-radius-l);
  background: var(--bg-3);
}

.filter-option-button {
  cursor: pointer;
  width: var(--size-max);
  box-sizing: border-box;
}

.filter-option-list {
  display: block;
  border-radius: var(--border-radius-l);
  margin-top: var(--space-2xs);
  width: var(--size-max);
  max-height: 300px;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    flex-direction: column;

    &:first-child {
      border-radius: 12px 12px 0 0;
    }

    &:last-child {
      border-radius: 0 0 12px 12px;
    }

    padding: var(--inputs-padding);
    background: var(--bg-3);

    &:hover {
      background: var(--bg-4);
    }

    cursor: pointer;
  }
}

.options-wrapper {
  position: relative;
  height: 2.5rem;
  margin-bottom: var(--space-2xs);
}

.selector-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-2xl);
  gap: var(--space-m);
  @include media("max", "md") {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>

