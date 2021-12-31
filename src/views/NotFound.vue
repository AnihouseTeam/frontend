<template>
  <div class="layout-root">
    <div class="layout-content">
      <div class="layout-wrap">
        <main class="main app-main">
          <div class="outer-wrapper-lg">
            <h1 class="outer-title layout-animate layout-animation-1">Страница не найдена</h1>
            <div class="page-error">
              <div class="page-err-content">
                <div class="page-err-code font-700 layout-animate layout-animation-2">404</div>
                <div class="page-err-rel layout-animate layout-animation-3">Неправильно набран адрес, или такой страницы<br>на сайте больше не существует.</div>
                <div class="page-err-lnk layout-animate layout-animation-4">Вернитесь на <router-link class="page-err-link" to="/"><span class="color-primary">главную</span></router-link>.</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from 'vue-meta'

export default {
  name: "NotFound",
  setup() {
    useMeta({title: 'AniHouse - Страница не найдена'})
  }
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.outer-title{
  margin-bottom: var(--space-2xl);
  @include media("max", "page") {
    margin-bottom: var(--space-xl);
  }
  @include media("max", "md") {
    margin-bottom: var(--space-m);
  }
}

.section-title {
  margin-bottom: var(--space-2xl);
}

.outer-section {
  &:first-child {
    margin-bottom: var(--space-4xl);
  }
  margin-bottom: var(--space-5xl);
  @include media("max", "md") {
    margin-bottom: var(--space-4xl);
  }
}

.page-error{
  margin-bottom: var(--space-5xl);
  .page-err-content{
    .page-err-code{
      font-size: 90px;
      margin-bottom: var(--space-2xl);
      line-height: 1;
      user-select: none;
    }
    .page-err-rel{
      margin-bottom: var(--space-l);
    }
    .page-err-link{
      span{
        transition: var(--transition-normal);
        &:hover{
          color: #6f5de0;
          transition: var(--transition-normal);
        }
      }
    }
  }
}
</style>