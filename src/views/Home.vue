<template>
  <div class="layout-root">
    <div class="layout-content">
      <div class="layout-wrap">
        <main class="main app-main">
          <div class="outer-wrapper">
            <section class="outer-section home-carousel layout-animate layout-animation-1">
              <HomeCarousel/>
            </section>
            <section v-if="Object.keys(news).length > 0" class="outer-section home-new layout-animate layout-animation-2">
              <h2 class="section-title">Новое</h2>
              <div class="preview-wrapper app-previews-grid">
                <div v-for="movie of news" v-bind:key="movie.id" class="preview-card">
                  <router-link class="preview-redirect" to="/view">
                    <div class="preview-poster">
                      <img class="poster" :src="movie.banner">
                    </div>
                    <div class="preview-info">
                      <p class="text-primary preview-title">{{ movie.title }}</p>
                      <div class="preview-more display-flex">
                        <div class="preview-more-inner display-flex flex-center">
                          <svg fill="none" height="18" viewBox="0 0 13 18" width="13"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"/>
                          </svg>
                          <p class="views text-small">2687</p>
                        </div>
                        <div class="preview-more-inner display-flex flex-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <p class="year text-small">{{ movie.year }}</p>
                        </div>
                        <div :class="`preview-more-inner app-badge series ${(movie.episodes.length === movie.episodesTotal) ? 'finished' : 'in-work'}`">
                          {{ movie.episodes.length }}/{{ movie.episodesTotal }}
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </section>
            <section v-for="type of types" v-bind:key="type.id" class="outer-section home-new layout-animate layout-animation-2">
              <h2 class="section-title">{{ type.name }}</h2>
              <div class="preview-wrapper app-previews-grid">
                <div v-for="movie of movies" v-bind:key="movie.id" class="preview-card">
                  <router-link class="preview-redirect" to="/view">
                    <div class="preview-poster">
                      <img class="poster" :src="movie.banner">
                    </div>
                    <div class="preview-info">
                      <p class="text-primary preview-title">{{ movie.title }}</p>
                      <div class="preview-more display-flex">
                        <div class="preview-more-inner display-flex flex-center">
                          <svg fill="none" height="18" viewBox="0 0 13 18" width="13"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"/>
                          </svg>
                          <p class="views text-small">2687</p>
                        </div>
                        <div class="preview-more-inner display-flex flex-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <p class="year text-small">{{ movie.year }}</p>
                        </div>
                        <div :class="`preview-more-inner app-badge series ${(movie.episodes.length === movie.episodesTotal) ? 'finished' : 'in-work'}`">
                          {{ movie.episodes.length }}/{{ movie.episodesTotal }}
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </section>
                <!--                <div class="preview-card">-->
                <!--                  <router-link class="preview-redirect" to="/view">-->
                <!--                    <div class="preview-poster">-->
                <!--                      <img class="poster" src="images/anime-posters/poster_4.jpg">-->
                <!--                    </div>-->
                <!--                    <div class="preview-info">-->
                <!--                      <p class="text-primary preview-title">Туалетный мальчик Ханако‑кун</p>-->
                <!--                      <div class="preview-more display-flex">-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="views text-small">1445</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="year text-small">2020</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner app-badge series in-work">-->
                <!--                          7/12-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </router-link>-->
                <!--                </div>-->
                <!--                <div class="preview-card">-->
                <!--                  <router-link class="preview-redirect" to="/view">-->
                <!--                    <div class="preview-poster">-->
                <!--                      <img class="poster" src="images/anime-posters/poster_19.jpg">-->
                <!--                    </div>-->
                <!--                    <div class="preview-info">-->
                <!--                      <p class="text-primary preview-title">Прославленный: Спецвыпуски</p>-->
                <!--                      <div class="preview-more display-flex">-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="views text-small">384</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="year text-small">2009</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner app-badge series finished">-->
                <!--                          4/4-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </router-link>-->
                <!--                </div>-->
                <!--                <div class="preview-card">-->
                <!--                  <router-link class="preview-redirect" to="/view">-->
                <!--                    <div class="preview-poster">-->
                <!--                      <img class="poster" src="images/anime-posters/poster_20.jpg">-->
                <!--                    </div>-->
                <!--                    <div class="preview-info">-->
                <!--                      <p class="text-primary preview-title">Ясяхимэ: Принцесса&shy;полудемон</p>-->
                <!--                      <div class="preview-more display-flex">-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="views text-small">384</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="year text-small">2020</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner app-badge series in-work">-->
                <!--                          9/24-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </router-link>-->
                <!--                </div>-->
                <!--                <div class="preview-card">-->
                <!--                  <router-link class="preview-redirect" to="/view">-->
                <!--                    <div class="preview-poster">-->
                <!--                      <img class="poster" src="images/anime-posters/poster_21.jpg">-->
                <!--                    </div>-->
                <!--                    <div class="preview-info">-->
                <!--                      <p class="text-primary preview-title">AniHouseTV | Косячки</p>-->
                <!--                      <div class="preview-more display-flex">-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="views text-small">3234</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="year text-small">2020</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner app-badge series house">-->
                <!--                          фандаб-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </router-link>-->
                <!--                </div>-->
                <!--                <div class="preview-card">-->
                <!--                  <router-link class="preview-redirect" to="/view">-->
                <!--                    <div class="preview-poster">-->
                <!--                      <img class="poster" src="images/anime-posters/poster_24.jpg">-->
                <!--                    </div>-->
                <!--                    <div class="preview-info">-->
                <!--                      <p class="text-primary preview-title">Девы Розена</p>-->
                <!--                      <div class="preview-more display-flex">-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="views text-small">647</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner display-flex flex-center">-->
                <!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                <!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
                <!--                          </svg>-->
                <!--                          <p class="year text-small">2004</p>-->
                <!--                        </div>-->
                <!--                        <div class="preview-more-inner app-badge series in-work">-->
                <!--                          7/12-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </router-link>-->
                <!--                </div>-->
<!--            <section class="outer-section home-anime layout-animate layout-animation-3">-->
<!--              <h2 class="section-title">Аниме</h2>-->
<!--              <div class="preview-wrapper app-previews-grid">-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_3.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Добро пожаловать в «Академию Сетон!»</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">2687</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series finished">-->
<!--                          12/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_4.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Туалетный мальчик Ханако‑кун</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">1445</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_19.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Прославленный: Спецвыпуски</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2009</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series finished">-->
<!--                          4/4-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_20.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Ясяхимэ: Принцесса&shy;полудемон</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          9/24-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_21.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">AniHouseTV | Косячки</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">3234</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series house">-->
<!--                          фандаб-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_24.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Девы Розена</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">647</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2004</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--            </section>-->
<!--            <section class="outer-section home-dramas layout-animate layout-animation-4">-->
<!--              <h2 class="section-title">Дорамы</h2>-->
<!--              <div class="preview-wrapper app-previews-grid">-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_3.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Добро пожаловать в «Академию Сетон!»</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">2687</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series finished">-->
<!--                          12/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_4.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Туалетный мальчик Ханако‑кун</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">1445</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_19.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Прославленный: Спецвыпуски</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2009</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series finished">-->
<!--                          4/4-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_20.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Ясяхимэ: Принцесса&shy;полудемон</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          9/24-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_21.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">AniHouseTV | Косячки</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">3234</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series house">-->
<!--                          фандаб-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_24.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Девы Розена</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">647</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2004</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--            </section>-->
<!--            <section class="outer-section home-films layout-animate layout-animation-5">-->
<!--              <h2 class="section-title">Фильмы</h2>-->
<!--              <div class="preview-wrapper app-previews-grid">-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_3.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Добро пожаловать в «Академию Сетон!»</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">2687</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series nsfw">-->
<!--                          18+-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_4.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Туалетный мальчик Ханако‑кун</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">1445</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_19.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Прославленный: Спецвыпуски</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2009</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series finished">-->
<!--                          4/4-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_20.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Ясяхимэ: Принцесса&shy;полудемон</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">384</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          9/24-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_21.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">AniHouseTV | Косячки</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">3234</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2020</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series house">-->
<!--                          фандаб-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--                <div class="preview-card">-->
<!--                  <router-link class="preview-redirect" to="/view">-->
<!--                    <div class="preview-poster">-->
<!--                      <img class="poster" src="images/anime-posters/poster_24.jpg">-->
<!--                    </div>-->
<!--                    <div class="preview-info">-->
<!--                      <p class="text-primary preview-title">Девы Розена</p>-->
<!--                      <div class="preview-more display-flex">-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M11.9792 8.26923L1.85582 2.08253C1.77055 2.03042 1.67294 2.00197 1.57303 2.0001C1.47312 1.99823 1.37451 2.02301 1.28735 2.07189C1.20019 2.12077 1.12763 2.19199 1.07713 2.27821C1.02662 2.36444 1 2.46257 1 2.5625V14.9359C1 15.0358 1.02662 15.134 1.07713 15.2202C1.12763 15.3064 1.20019 15.3776 1.28735 15.4265C1.37451 15.4754 1.47312 15.5002 1.57303 15.4983C1.67294 15.4964 1.77055 15.468 1.85582 15.4159L11.9792 9.22917C12.0614 9.17892 12.1293 9.10839 12.1765 9.02435C12.2236 8.9403 12.2484 8.84556 12.2484 8.7492C12.2484 8.65284 12.2236 8.5581 12.1765 8.47405C12.1293 8.39001 12.0614 8.31948 11.9792 8.26923Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="views text-small">647</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner display-flex flex-center">-->
<!--                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M14.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H14.625C14.9357 15.1875 15.1875 14.9357 15.1875 14.625V3.375C15.1875 3.06434 14.9357 2.8125 14.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M12.375 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M5.625 1.6875V3.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            <path d="M2.8125 6.1875H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                          </svg>-->
<!--                          <p class="year text-small">2004</p>-->
<!--                        </div>-->
<!--                        <div class="preview-more-inner app-badge series in-work">-->
<!--                          7/12-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--            </section>-->
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '../components/HomeCarousel.vue'
import {useMeta} from "vue-meta";

export default {
  name: "Home.vue",
  data() {
    return {
      movies: [],
      news: [],
      types: []
    }
  },
  components: {
    HomeCarousel,
  },
  setup() {
    useMeta({title: 'AniHouse - Главная'});
  },
  async mounted() {
    this.movies = (await (await fetch('http://localhost:3001/movie')).json());
    this.types = (await (await fetch('http://localhost:3001/type')).json());
    this.news = this.movies.filter(x => Date.parse(x.episodes[x.episodes.length - 1]?.created) >= Date.now() - 604800000);
  },
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.section-title{
 margin-bottom: var(--space-2xl);
}

.outer-section{
  &:first-child{
    margin-bottom: var(--space-4xl);
  }
  margin-bottom: var(--space-5xl);
  @include media("max", "md") {
    margin-bottom: var(--space-4xl);
  }
  &:last-child{
    margin-bottom: var(--space-4xl);
  }
}

.preview-wrapper{
 .preview-card{
   .preview-poster{
     margin-bottom: var(--space-s);
     position: relative;
     &:hover{
       &:after{
         opacity: 0.5;
       }
     }
     &:after{
       content: "";
       position: absolute;
       display: block;
       width: 100%;
       height: 98%;
       top: 0;
       left: 0;
       background: #7f6df2;
       opacity: 0;
       z-index: 2;
       transition: var(--transition-normal);
       border-radius: var(--border-radius-m);
     }
     &:before{
       content: "";
       position: absolute;
       display: block;
       top: calc(50% - 35px);
       left: calc(50% - 37.5px);
       width: 64px;
       height: 64px;
       background: url('/images/icons/play.svg');
       opacity: 0;
       cursor: pointer;
       z-index: 3;
       transition: all .2s;
     }
     &:hover{
       .poster{
         opacity: .6;
         transition: var(--transition-normal);
         filter: grayscale(0.8);
       }
       &:before{
         opacity: 1;
         transition: all .2s;
       }
     }
     .poster{
       border-radius: var(--border-radius-m);
       transition: var(--transition-normal);
     }
   }
   .preview-redirect{
     &:hover{
       .preview-info{
         color: var(--white-alpha72);
         transition: var(--transition-normal);
       }
     }
   }
   .preview-info{
     transition: var(--transition-normal);
     .preview-title{
       margin-bottom: var(--space-xs);
       font-weight: 500;
     }
     .preview-more{
       column-gap: var(--space-s);
       row-gap: var(--space-xs);
       flex-wrap: wrap;
       flex-direction: row;
       align-items: center;
       .app-badge{
         font-size: var(--size-xs);
         border-radius: var(--border-radius-xl);
         padding-right: var(--space-xs);
         padding-left: var(--space-xs);
         color: var(--white);
         &.series{
           &.finished{
             background: var(--color-success);
           }
           &.house{
             background: var(--color-orange);
           }
           &.movie{
             background: var(--color-primary);
           }
           &.in-work{
             background: var(--color-info);
           }
           &.nsfw{
             background: var(--color-danger);
           }
         }
       }
       .preview-more-inner{
         gap: var(--space-xs);
       }
     }
   }
 }
}
</style>