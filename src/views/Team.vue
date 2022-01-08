<template>
  <div class="layout-root">
    <div class="layout-content">
      <div class="layout-wrap">
        <main class="main app-main">
          <div class="outer-wrapper-lg">
            <h1 class="outer-title layout-animate layout-animation-1">Команда проекта</h1>
            <section :class="`outer-section ${section.id} layout-animate layout-animation-2`" v-for="section in [
                  { id: 'staff', title: 'Руководство' },
                  { id: 'cast',  title: 'Основной состав' },
                  { id: 'academy', title: 'Академия' },
                  { id: 'developer', title: 'Разработчики' }
              ]" :key="section.id">
                <h2 class="section-title font-600">{{section.title}}</h2>
                <div class="section-wrapper app-team-grid">
                  <a :href="member.vk" class="team-redirection" target="_blank" rel="noopener" v-for="member in members.filter(memberr => memberr.role === section.id)" :key="member.id">
                    <div :class="`team-grid-person bg-color-2 rounded-l flex-center flex-col ${member.vk ? 'has-link' : ''}`">
                      <div class="team-avatar position-relative">
                        <img class="team-avatar-img rounded-circle" alt :src="member.avatar">
                      </div>
                      <div class="team-nickname text-h4 font-500 text-center">{{member.name}}</div>
                      <div class="team-description text-h5 font-regular text-center">{{member.description}}</div>
                    </div>
                  </a>
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
  name: "Team",
  setup() {
    useMeta({title: 'AniHouse - Команда'})
  },
  data() {
    return {
      members: []
    }
  },
  async mounted() {
    this.members = await (await fetch(`http://localhost:3001/team`)).json()
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
}

.app-team-grid{
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 2fr));
  @include media("max", "xl") {
    grid-template-columns: repeat(4, minmax(0, 2fr));
  }
  @include media("max", "lg") {
    grid-template-columns: repeat(3, minmax(0, 2fr));
  }
  @include media("max", "md") {
    grid-template-columns: repeat(2, minmax(0, 2fr));
  }
  @include media("max", "sm") {
    grid-template-columns: repeat(1, minmax(0, 2fr));
  }
  gap: var(--space-xl);
  .team-grid-person{
    padding: var(--space-xl);
    height: var(--size-max);
    border: 1px solid var(--bg-3);
    @include media("max", "md") {
      padding: var(--space-l);
    }
    &.has-link{
      cursor: pointer;
      transition: var(--transition-normal);
      &:hover{
        background-color: var(--bg-3);
        transition: var(--transition-normal);
        .team-avatar{
          &:after{
            opacity: 0.5;
          }
          &:before{
            opacity: 1;
            transition: all .2s;
          }
          .team-avatar-img{
            opacity: .6;
            transition: var(--transition-normal);
            filter: grayscale(0.8);
          }
        }
      }
    }
    .team-avatar{
      margin-bottom: var(--space-l);
      .team-avatar-img{
        --team-avatar-width: 138px;
        max-width: var(--team-avatar-width);
      }
      &:after{
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 96%;
        top: 0;
        left: 0;
        background: #7f6df2;
        opacity: 0;
        z-index: 2;
        transition: var(--transition-normal);
        border-radius: var(--border-radius-circle);
      }
      &:before{
        content: "";
        position: absolute;
        display: block;
        top: calc(50% - 21px);
        left: calc(50% - 25px);
        width: 48px;
        height: 48px;
        background: url('/images/icons/vk.svg');
        opacity: 0;
        z-index: 3;
        transition: all .2s;
      }
    }
    .team-nickname{
      margin-bottom: var(--space-xs);
      @include media("max", "md") {
        font: var(--font-h4);
        font-weight: 500;
      }
    }
    .team-description{
      color: var(--white-alpha72);
      @include media("max", "md") {
        font: var(--font-h5);
        font-weight: 400;
      }
    }
  }
}
</style>
