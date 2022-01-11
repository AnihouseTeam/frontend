<template>
  <header class="header app-header z-5" :class="scrolled ? 'app-scroll' : ''">
    <div class="header-wrapper z-10">
      <div class="header-container display-flex justify-between items-center transition-normal">
        <div class="display-flex header-inner-flex items-center header-left-wrap">
          <div class="header-svg-logo">
            <router-link class="header-link route-home router-link" to="/">
              <svg width="197" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-logo">
                <g class="svg-expanded">
                <path d="M52.872 19.744H48.504L47.904 22H42.048L48 5.2H54.336L60.288 22H53.472L52.872 19.744ZM49.728 15.136H51.624L50.688 10.96L49.728 15.136Z" fill="white"/>
                <path d="M61.1681 9.28H66.0641V10.72C66.3521 10.224 66.8001 9.8 67.4081 9.448C68.0321 9.096 68.8721 8.92 69.9281 8.92C71.2881 8.92 72.3281 9.304 73.0481 10.072C73.7681 10.84 74.1281 11.976 74.1281 13.48V22H68.8481V14.56C68.8481 14.144 68.7601 13.816 68.5841 13.576C68.4081 13.32 68.1361 13.192 67.7681 13.192C67.3041 13.192 66.9681 13.32 66.7601 13.576C66.5521 13.816 66.4481 14.144 66.4481 14.56V22H61.1681V9.28Z" fill="white"/>
                <path d="M75.8194 9.28H81.0994V22H75.8194V9.28ZM78.4594 8.08C77.4994 8.08 76.7794 7.912 76.2994 7.576C75.8194 7.224 75.5794 6.752 75.5794 6.16C75.5794 5.568 75.8194 5.104 76.2994 4.768C76.7794 4.416 77.4994 4.24 78.4594 4.24C79.4194 4.24 80.1394 4.416 80.6194 4.768C81.0994 5.104 81.3394 5.568 81.3394 6.16C81.3394 6.752 81.0994 7.224 80.6194 7.576C80.1394 7.912 79.4194 8.08 78.4594 8.08Z" fill="white"/>
                <path d="M83.0147 5.2H89.3507V10.936H92.9987V5.2H99.3347V22H92.9987V16.024H89.3507V22H83.0147V5.2Z" fill="white"/>
                <path d="M107.609 22.36C106.633 22.36 105.721 22.232 104.873 21.976C104.025 21.704 103.289 21.296 102.665 20.752C102.041 20.208 101.545 19.52 101.177 18.688C100.825 17.856 100.649 16.88 100.649 15.76V15.28C100.649 14.24 100.825 13.328 101.177 12.544C101.545 11.744 102.041 11.08 102.665 10.552C103.289 10.008 104.025 9.6 104.873 9.328C105.721 9.056 106.633 8.92 107.609 8.92C108.585 8.92 109.497 9.056 110.345 9.328C111.193 9.6 111.929 10.008 112.553 10.552C113.177 11.08 113.665 11.744 114.017 12.544C114.385 13.328 114.569 14.24 114.569 15.28V15.76C114.569 16.848 114.385 17.808 114.017 18.64C113.665 19.456 113.177 20.144 112.553 20.704C111.929 21.248 111.193 21.664 110.345 21.952C109.497 22.224 108.585 22.36 107.609 22.36ZM107.609 18.088C108.089 18.088 108.465 17.912 108.737 17.56C109.009 17.208 109.145 16.608 109.145 15.76V15.28C109.145 14.544 109.009 14.016 108.737 13.696C108.465 13.36 108.089 13.192 107.609 13.192C107.129 13.192 106.753 13.36 106.481 13.696C106.209 14.016 106.073 14.544 106.073 15.28V15.76C106.073 16.608 106.209 17.208 106.481 17.56C106.753 17.912 107.129 18.088 107.609 18.088Z" fill="white"/>
                <path d="M119.858 22.36C118.498 22.36 117.458 21.976 116.738 21.208C116.018 20.44 115.658 19.304 115.658 17.8V9.28H120.938V16.72C120.938 17.136 121.026 17.472 121.202 17.728C121.378 17.968 121.674 18.088 122.09 18.088C122.506 18.088 122.818 17.968 123.026 17.728C123.234 17.472 123.338 17.136 123.338 16.72V9.28H128.618V22H123.722V20.56C123.434 21.056 122.978 21.48 122.354 21.832C121.746 22.184 120.914 22.36 119.858 22.36Z" fill="white"/>
                <path d="M136.189 22.36C135.005 22.36 134.013 22.232 133.213 21.976C132.429 21.72 131.789 21.384 131.293 20.968C130.813 20.536 130.453 20.056 130.213 19.528C129.973 19 129.805 18.464 129.709 17.92H134.989C135.021 18.096 135.109 18.248 135.253 18.376C135.413 18.504 135.725 18.568 136.189 18.568C136.701 18.568 137.029 18.528 137.173 18.448C137.317 18.352 137.389 18.208 137.389 18.016C137.389 17.952 137.357 17.888 137.293 17.824C137.245 17.76 137.133 17.704 136.957 17.656C136.797 17.592 136.549 17.528 136.213 17.464C135.893 17.384 135.469 17.296 134.941 17.2C134.381 17.104 133.805 16.984 133.213 16.84C132.637 16.68 132.117 16.456 131.653 16.168C131.189 15.864 130.805 15.48 130.501 15.016C130.213 14.552 130.069 13.96 130.069 13.24C130.069 11.88 130.605 10.824 131.677 10.072C132.765 9.304 134.269 8.92 136.189 8.92C137.261 8.92 138.165 9.056 138.901 9.328C139.653 9.584 140.261 9.92 140.725 10.336C141.205 10.752 141.557 11.232 141.781 11.776C142.005 12.304 142.141 12.832 142.189 13.36H136.909C136.877 13.104 136.789 12.936 136.645 12.856C136.517 12.76 136.325 12.712 136.069 12.712C135.797 12.712 135.605 12.752 135.493 12.832C135.397 12.912 135.349 13.008 135.349 13.12C135.349 13.216 135.373 13.304 135.421 13.384C135.469 13.448 135.557 13.512 135.685 13.576C135.813 13.624 135.989 13.68 136.213 13.744C136.453 13.792 136.757 13.84 137.125 13.888C137.669 13.968 138.261 14.096 138.901 14.272C139.541 14.432 140.141 14.672 140.701 14.992C141.261 15.296 141.725 15.696 142.093 16.192C142.477 16.688 142.669 17.296 142.669 18.016C142.669 19.44 142.093 20.52 140.941 21.256C139.805 21.992 138.221 22.36 136.189 22.36Z" fill="white"/>
                <path d="M150.338 22.36C149.282 22.36 148.322 22.224 147.458 21.952C146.594 21.68 145.85 21.28 145.226 20.752C144.602 20.208 144.114 19.536 143.762 18.736C143.426 17.92 143.258 16.968 143.258 15.88V15.4C143.258 14.328 143.418 13.384 143.738 12.568C144.074 11.752 144.538 11.08 145.13 10.552C145.738 10.008 146.458 9.6 147.29 9.328C148.138 9.056 149.074 8.92 150.098 8.92C152.434 8.92 154.154 9.48 155.258 10.6C156.378 11.704 156.938 13.344 156.938 15.52V16.96H148.61C148.674 17.504 148.826 17.912 149.066 18.184C149.322 18.44 149.746 18.568 150.338 18.568C150.786 18.568 151.114 18.496 151.322 18.352C151.53 18.192 151.682 18.008 151.778 17.8H156.818C156.578 19.368 155.906 20.52 154.802 21.256C153.714 21.992 152.226 22.36 150.338 22.36ZM150.218 12.712C149.674 12.712 149.282 12.856 149.042 13.144C148.818 13.416 148.682 13.76 148.634 14.176H151.706C151.658 13.76 151.522 13.416 151.298 13.144C151.074 12.856 150.714 12.712 150.218 12.712Z" fill="white"/>
                <path d="M161.84 22.312C161.2 22.312 160.656 22.096 160.208 21.664C159.776 21.216 159.56 20.672 159.56 20.032C159.56 19.392 159.776 18.856 160.208 18.424C160.656 17.976 161.2 17.752 161.84 17.752C162.48 17.752 163.016 17.976 163.448 18.424C163.896 18.856 164.12 19.392 164.12 20.032C164.12 20.672 163.896 21.216 163.448 21.664C163.016 22.096 162.48 22.312 161.84 22.312ZM168.89 8.752H163.73V5.2H178.37V8.752H173.21V22H168.89V8.752ZM179.568 5.2H184.368L188.16 16.48L191.808 5.2H196.128L190.128 22H185.808L179.568 5.2Z" fill="#7F6DF2"/>
                </g>
                <path class="svg-icon" d="M22.4853 22.4853C24.8284 20.1421 26 17.0711 26 14M5.51472 22.4853C4.20474 21.1753 3.26095 19.6378 2.68334 18M22.4853 5.51472C24.8284 7.85786 26 10.9289 26 14M14 22.5V18M14 14V2C10.9289 2 7.85786 3.17157 5.51472 5.51472C2.1384 8.89103 1.19461 13.7787 2.68334 18M14 14H26M14 14V18M14 18H2.68334" stroke="#7F6DF2" stroke-width="3" stroke-linecap="square"/>
              </svg>
            </router-link>
          </div>
          <nav class="header-nav display-flex">
            <div class="header-nav-links display-flex">
            <router-link class="header-nav-link router-link" to="/team">Команда</router-link>
            <router-link class="header-nav-link router-link" to="/faq">FAQ</router-link>
            </div>
            <div class="header-nav-links-md display-flex">
              <div class="header-menu-opener transition-normal">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg-stroke-current" d="M5 16H27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="svg-stroke-current" d="M5 8H27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="svg-stroke-current" d="M5 24H27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </nav>
        </div>
        <div class="header-right-wrap display-flex">
          <transition mode="out-in" name="search-transition">
          <div class="header-search" v-if="$route.meta.enableSearch">
            <button class="header-search-opener display-flex flex-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.7026 13.7032L17.4996 17.5001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          </transition>
        </div>
      </div>
      <div class="header-menu-md-wrapper">
        <div class="header-menu-md position-fixed">
          <router-link class="header-menu-link router-link" to="/team">Команда</router-link>
          <router-link class="header-menu-link router-link" to="/faq">FAQ</router-link>
        </div>
        <div class="mobile-overlay">
        </div>
      </div>
    </div>
      <div class="app-search position-relative z-100" v-if="$route.meta.enableSearch">
        <div class="search-container">
          <div class="search-wrapper position-fixed z-105">
            <div class="search-inner">
              <div class="search-suggest-input display-flex">
                <div class="search-input-wrapper position-relative">
                  <input type="search" class="search-input hide-on-focus" placeholder="Поиск аниме и дорам..." autofocus>
                  <svg class="search-icon position-absolute" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="svg-stroke-current" d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="svg-stroke-current" d="M13.7026 13.7031L17.4995 17.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <button class="search-filters display-flex flex-center" @click="searchFilter = !searchFilter">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6249 13.437L3.12494 13.4371" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.8749 13.4371L13.1249 13.437" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.62494 6.56194L3.12494 6.56189" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.8749 6.56189L8.12494 6.56194" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.12494 4.68701V8.43701" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.1249 15.312V11.562" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="search-close display-flex flex-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.625 4.375L4.375 15.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.625 15.625L4.375 4.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <transition name="search-filter-transition">
                <div class="search-filter" v-show="searchFilter">
                  <div class="search-filter-wrapper display-flex">
                    <div class="filter-options">
                      <Listbox v-model="genreSelected">
                        <div class="options-wrapper">
                          <ListboxButton class="position-relative app-inputs-padding filter-option-button">Жанр: {{ genreSelected }}</ListboxButton>
                          <ListboxOptions class="position-absolute filter-option-list bg-color-3 z-1001">
                            <ListboxOption v-for="genre in genres" :key="genre" :value="genre">
                              {{ genre }}
                            </ListboxOption>
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>
                    <div class="filter-options">
                      <Listbox v-model="ageSelected">
                        <div class="options-wrapper">
                          <ListboxButton class="position-relative app-inputs-padding filter-option-button">Возраст: {{ ageSelected }}</ListboxButton>
                          <ListboxOptions class="position-absolute filter-option-list bg-color-3 z-1001">
                            <ListboxOption v-for="age in ages" :key="age" :value="age">
                              {{ age }}
                            </ListboxOption>
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>
                    <div class="filter-options">
                      <Listbox v-model="yearSelected">
                        <div class="options-wrapper">
                          <ListboxButton class="position-relative app-inputs-padding filter-option-button">Год: {{ yearSelected }}</ListboxButton>
                          <ListboxOptions class="position-absolute filter-option-list bg-color-3 z-1001">
                            <ListboxOption v-for="year in years" :key="year" :value="year">
                              {{ year }}
                            </ListboxOption>
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>
                    <div class="filter-options">
                      <Listbox v-model="typeSelected">
                        <div class="options-wrapper">
                          <ListboxButton class="position-relative app-inputs-padding filter-option-button">Тип: {{ typeSelected }}</ListboxButton>
                          <ListboxOptions class="position-absolute filter-option-list bg-color-3 z-1001">
                            <ListboxOption v-for="type in types" :key="type" :value="type">
                              {{ type }}
                            </ListboxOption>
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>
                  </div>
                </div>
              </transition>
              <div class="search-suggest">
                <div class="search-suggest-wrapper app-previews-grid">
                  <div class="suggest" v-for="movie in movieData?.filter(m => ageSelected ? m.age === ageSelected : true).filter(m => yearSelected ? m.year === yearSelected : true).filter(m => genreSelected ? m.genres.some(genre => genre.name === genreSelected) : true).filter(m => typeSelected ? m.types.some(types => types.name === typeSelected) : true)" :key="movie.id">
                    <router-link to="view" class="router-link flex-col">
                      <img class="suggest-img" src="images/anime-posters/poster_3.jpg">
                      <p class="suggest-title">Добро пожаловать в «Академию Сетон!»</p>
                    </router-link>
                  </div>
                  <!--            <div class="suggest">-->
                  <!--              <router-link to="view" class="router-link flex-col">-->
                  <!--                <img class="suggest-img" src="images/anime-posters/poster_20.jpg">-->
                  <!--                <p class="suggest-title">Ясяхимэ: Принцесса‑полудемон</p>-->
                  <!--              </router-link>-->
                  <!--            </div>-->
                  <!--            <div class="suggest">-->
                  <!--              <router-link to="view" class="router-link flex-col">-->
                  <!--                <img class="suggest-img" src="images/anime-posters/poster_21.jpg">-->
                  <!--                <p class="suggest-title">AniHouseTV | Косячки</p>-->
                  <!--              </router-link>-->
                  <!--            </div>-->
                  <!--            <div class="suggest">-->
                  <!--              <router-link to="view" class="router-link flex-col">-->
                  <!--                <img class="suggest-img" src="images/anime-posters/poster_24.jpg">-->
                  <!--                <p class="suggest-title">Девы Розена</p>-->
                  <!--              </router-link>-->
                  <!--            </div>-->
                </div>
              </div>
            </div>
          </div>
          <div class="search-overlay inset-0 z-100">
          </div>
        </div>
      </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
export default {
  name: "Header",
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  data() {
    return {
      scrolled: false,
      searchFilter: false,
      genres: [],
      genreSelected: "",
      years: [],
      yearSelected: "",
      ages: [],
      ageSelected: "",
      types: [],
      typeSelected: "",
      movie: []
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
   window.removeEventListener('scroll', this.handleScroll);
  },
  async mounted() {
    const movieData = await (await fetch('http://localhost:3001/movie')).json()

    this.genres = (await (await fetch('http://localhost:3001/genre')).json()).map(genre => genre.name)
    console.log(this.genres[0])

    this.ages = [...new Set(movieData.map(movie => movie.age))]
    this.types = (await (await fetch('http://localhost:3001/type')).json()).map(type => type.name)


    this.genreSelected = ref(this.genres[0]);
    this.ageSelected = ref(this.ages[0]);

    this.years = [...new Set(movieData.map(movie => movie.year))]
    this.yearSelected = ref(this.year[0]);

    this.typeSelected = ref(this.types[0]);

    this.movie = movieData
  },
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.app-header{
  height: 4rem;
  position: relative;
}

.header-filled{
  background: var(--bg-2);
}

.header-wrapper{
  animation: fadeInDownLayout 1s .1s backwards;
  width: var(--size-max);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;  
  transition: var(--transition-normal);
}

.browser-mozilla{
  .header-container{
    transform: translateY(0);
    will-change: opacity;
  }
}

.app-scroll{
  .header-wrapper {
    --header-shadow: hsla(0, 0%, 0%, 0.1) 0px 4px 6px -1px, hsla(0, 0%, 0%, 0.06) 0px 2px 4px -1px;
    background: var(--bg-2);
    box-shadow: var(--header-shadow)
  }
  .header-container{
    padding: 0.79rem 24px;
    transition: .2s;
    height: 4rem;
    @include media("max", "page") {
      padding: 0.79rem var(--space-2xl);
    }
    @include media("max", "sm") {
      padding: 0.79rem var(--space-xl);
    }
  }
}

.header-container{
  --header-offset: 25px 24px 0.79rem;
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: var(--header-offset);
  height: 5rem;
  @include media("max", "page") {
    padding: 0.79rem var(--space-2xl);
  }
  @include media("max", "sm") {
    padding: 0.79rem var(--space-xl);
  }
  @include media("max", "md") {
    height: 5rem;
  }
  width: var(--size-max);
  .header-svg-logo{
    --svg-logo-width: 28px;
    @include media("max", "sm") {
      .svg-expanded{
        display: none;
      }
      .svg-logo{
        width: var(--svg-logo-width);
      }
    }
  }
  .header-avatar{
    --header-avatar-size: 40px;
    width: var(--header-avatar-size);
    height: var(--header-avatar-size);
    cursor: pointer;
  }
  .header-inner-flex{
    gap: var(--space-3xl);
    @include media("max", "md") {
      gap: var(--space-xl);
      flex-direction: row-reverse;
    }
    .header-nav{
      .header-nav-links{
        gap: var(--space-xl);
        @include media("max", "md") {
          display: none;
        }
      }
      .header-nav-links-md{
        gap: var(--space-xl);
        display: none;
        @include media("max", "md") {
          display: flex;
        }
        .header-menu-opener{
          cursor: pointer;
          display: flex;
          &:hover{
            color: var(--color-primary);
            transition: var(--transition-normal);
          }
        }
      }
      .header-nav-link{
        position: relative;
        &:hover{
          color: var(--color-primary);
          transition: var(--transition-normal);
        }
      }
    }
  }
  .header-right-wrap{
    gap: var(--space-s);
    .header-search{
      .header-search-opener{
        background: var(--bg-3);
        border-radius: var(--border-radius-l);
        padding: 0.625rem;
        cursor: pointer;
        &:hover{
          background: var(--bg-4);
        }
      }
    }
  }
}

.header-menu-md-wrapper{
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: var(--transition-normal);
  &.active{
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transition: var(--transition-normal);
  }
  .header-menu-md{
    z-index: 10;
    width: 100%;
    background: var(--bg-2);
    box-shadow: var(--header-shadow);
    @include media("max", "md") {
      display: block;
    }
    .header-menu-link{
      padding: 16px 24px;
      &:hover{
        background: var(--bg-3);
      }
    }
  }

  .mobile-overlay{
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 4;
  }
}

.app-search{
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: var(--transition-normal);
  &.active{
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transition: var(--transition-normal);
  }
  .search-container {
    position: absolute;
    width: var(--size-max);
    top: 0;
    z-index: 101;
    .search-wrapper {
      background: var(--bg-2);
      width: var(--size-max);
      .search-inner{
        max-width: var(--page-max-width);
        padding: var(--space-l);
        margin: 0 auto;
        @include media("max", "page") {
          padding: 0.79rem 30px;
        }
        @include media("max", "lg") {
          padding-top: var(--space-l);
        }
        @include media("max", "sm") {
          padding: var(--space-l);
        }
        .search-suggest-input{
          padding: var(--space-2xs);
          gap: var(--space-s);
          margin-bottom: var(--space-s);
          padding-top: 6px;
          @include media("max", "page") {
            padding-top: var(--space-xs);
          }
          @include media("max", "md") {
            padding-top: 0;
          }
          .search-input-wrapper{
            flex-grow: 1;
            .search-icon{
              --placeholder: #6a7080;
              bottom: 10px;
              left: 0;
              color: var(--placeholder);
              transition: var(--transition-normal);
              margin-left: 14px;
            }
            .search-input{
              background: var(--bg-3);
              padding: 0.5em 1em 0.5em 3.1em;
              border-radius: var(--border-radius-l);
              width: 100%;
              transition: var(--transition-normal);
              box-sizing: border-box;
            }
            .search-input:focus ~ .search-icon{
              color: var(--white);
              transition: var(--transition-normal);
            }
          }
          .search-filters{
            background: var(--color-primary);
            border-radius: var(--border-radius-l);
            padding: 0.625rem;
            cursor: pointer;
            &:hover{
              background: #6f5de0;
            }
          }
          .search-close{
            background: var(--color-danger);
            border-radius: var(--border-radius-l);
            padding: 0.625rem;
            cursor: pointer;
            &:hover{
              background: #b71e3a;
            }
          }
        }
        .search-suggest{
          transition: all .2s ease;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none;
          border-radius: var(--border-radius-s);
          max-height: calc(100vh - 108px);
          .search-suggest-wrapper{
            padding: var(--space-2xs);
            .suggest{
              .suggest-img{
                border-radius: var(--border-radius-s);
                margin-bottom: var(--space-s);
                transition: var(--transition-normal);
              }
              .suggest-title{
                transition: var(--transition-normal);
                overflow-wrap: break-word;
                hyphens: auto;
                font-weight: 500;
              }
              &:hover{
                .suggest-title{
                  color: var(--white-alpha72);
                  transition: var(--transition-normal);
                }
                .suggest-img{
                  transform: scale(1.02);
                  transition: var(--transition-normal);
                }
              }
            }
          }
        }
      }
    }
    .search-overlay{
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: #00000099;
    }
  }
}

.search-suggest::-webkit-scrollbar{
  display: none;
}



.search-filter-transition-enter-active {
  animation: search-filter-transition .45s cubic-bezier(.33,.82,.42,.95);
  @include media("max", "lg") {
    animation: search-filter-transition-lg .45s cubic-bezier(.75,.32,.42,.95);
  }
}

.search-filter-transition-leave-active {
  animation: search-filter-transition-close .49s cubic-bezier(.75,.32,.42,.95);
  @include media("max", "lg") {
    animation: search-filter-transition-close-lg .49s cubic-bezier(.75,.32,.42,.95);
  }
}

.search-filter{
  height: 60px;
  @include media("max", "lg") {
    height: 220px;
  }
  .search-filter-wrapper{
    padding: var(--space-2xs);
    width: 100%;
    gap: var(--space-l);
    @include media("max", "lg") {
      flex-direction: column;
      gap: var(--space-s);
    }
  }
}

@keyframes search-filter-transition {
  0% {
    height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
  55% {
    height: 60px;
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    height: 60px;
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes search-filter-transition-close {
  0% {
    height: 60px;
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    height: 60px;
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    height: 0px;
    opacity: 0;
    transform: translateY(-10px);
  }
}

@keyframes search-filter-transition-lg {
  0% {
    height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
  60% {
    height: 220px;
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    height: 220px;
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes search-filter-transition-close-lg {
  0% {
    height: 220px;
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    height: 220px;
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    height: 0px;
    opacity: 0;
    transform: translateY(-10px);
  }
}

.filter-options{
  width: var(--size-max);
}

.options-wrapper{
  border-radius: var(--border-radius-l);
  background: var(--bg-3);
}

.filter-option-button{
  cursor: pointer;
  width: var(--size-max);
  box-sizing: border-box;
}

.filter-option-list{
  display: block;
  border-radius: var(--border-radius-l);
  margin-top: var(--space-2xs);
  width: var(--size-max);
  max-height: 300px;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  li{
    display: flex;
    flex-direction: column;
    &:first-child{
      border-radius: 12px 12px 0 0;
    }
    &:last-child{
      border-radius: 0 0 12px 12px;
    }
    padding: var(--inputs-padding);
    background: var(--bg-3);
    &:hover{
      background: var(--bg-4);
    }
    cursor: pointer;
  }
}

.options-wrapper{
  position: relative;
}

.search-transition-leave-active, .search-transition-enter-active {
  transition: all var(--transition-normal) ease-in-out;
}

.search-transition-enter, .search-transition-leave-to, .search-transition-enter-from{
  transform: translateX(10px);
  opacity: 0;
}

</style>