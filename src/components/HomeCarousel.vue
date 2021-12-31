<template>
  <div class="home-carousel-wrapper">
    <carousel class="carousel" :settings='settings' :autoplay="4000" :wrap-around="true" :transition="1000">
      <slide key="3">
        <div class="carousel-item">
          <a href="/view" class="router-link carousel-link">
            <div class="carousel-img-wrapper">
              <img class="carousel-img" src="images/anime-banners/banner_23.jpg">
            </div>
            <div class="carousel-text">
              <div class="carousel-text-wrapper">
                <h2 class="inner-text inner-title font-700">Чёрная лагуна</h2>
                <p class="inner-text inner-info">2006, Сэйнэн, Драма, Комедия</p>
              </div>
            </div>
          </a>
        </div>
      </slide>
      <slide key="2">
        <div class="carousel-item">
          <a href="/view" class="router-link carousel-link">
            <div class="carousel-img-wrapper">
              <img class="carousel-img carousel-lg-left" src="images/anime-banners/banner_27.jpg">
            </div>
            <div class="carousel-text">
              <div class="carousel-text-wrapper">
                <h2 class="inner-text inner-title font-700">Время Евы</h2>
                <p class="inner-text inner-info">2010, Фантастика, мелодрама, романтика</p>
              </div>
            </div>
          </a>
        </div>
      </slide>
      <slide key="1">
        <div class="carousel-item">
          <a href="/view" class="router-link carousel-link">
            <div class="carousel-img-wrapper">
              <img class="carousel-img" src="images/anime-banners/banner_20.jpg">
            </div>
            <div class="carousel-text">
              <div class="carousel-text-wrapper">
                <h2 class="inner-text inner-title font-700">Ясяхимэ: Принцесса<span class="shy-break">&shy;</span>-полудемон</h2>
                <p class="inner-text inner-info">2020, Комедия, Приключения, Фантастика</p>
              </div>
            </div>
          </a>
        </div>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
export default {
  name: "HomeCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'left',
      mouseDrag: false,
      pauseAutoplayOnHover: true
    }
  }),
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.carousel {
  height: 400px;
  position: relative;
  border-radius: var(--border-radius-m);
  overflow: hidden;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  .carousel-item {
    .carousel-img-wrapper {
      flex-shrink: 0;
      width: 100%;
      height: 428px;
      position: relative;
      &:after{
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 0;
        background: linear-gradient(0deg, rgb(0 0 0) 0%, rgba(0, 0, 0, 0) 44.57%, rgba(0, 0, 0, 0) 44.57%);
        pointer-events: all;
        @include media("max", "lg") {
          background: linear-gradient(
                  0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 124.57%, rgba(0, 0, 0, 0) 44.57%);
        }
      }
      .carousel-img {
        object-fit: cover;
        height: 428px;
        &.carousel-lg-left{
          @include media("max", "lg") {
            object-position: left;
          }
        }
      }
    }
    .carousel-text{
      position: absolute;
      bottom: 33px;
      .carousel-text-wrapper{
        padding: 2rem 3rem;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        @include media("max", "lg") {
          padding: 5rem 2rem;
        }
        @include media("max", "sm") {
          word-break: break-word;
        }
        .inner-title{
          margin-bottom: var(--space-s);
        }
        .inner-info{
          position: relative;
        }
      }
    }
  }
}

.carousel-pointer-events-none{
  pointer-events: none;
}
</style>