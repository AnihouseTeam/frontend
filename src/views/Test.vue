<template>
  <main class="main app-main">
    <div class="all">
      <div class="test-container">
        <h1 class="test-title">Текст</h1>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>Заголовок текст</h1>
        <h2>Заголовок текст</h2>
        <h3>Заголовок текст</h3>
        <h4>Заголовок текст</h4>
        <h5>Заголовок текст</h5>
        <h6>Заголовок текст</h6>
        <p class="text-primary">Regular</p>
        <p class="text-primary-bold">Bold</p>
        <p class="text-small">Small</p>
        <p class="text-small-bold">Small Bold</p>
        <p class="color-danger">Danger</p>
        <p class="color-warning">Warning</p>
        <p class="color-success">Success</p>
        <p class="color-info">Info</p>
        <p class="color-primary">Primary</p>
        <p class="color-bg-1">Background 1</p>
        <p class="color-bg-2">Background 2</p>
        <p class="color-bg-3">Background 3</p>
        <p class="color-bg-4">Background 4</p>
      </div>
      <div class="test-container">
        <h1 class="test-title">Цвета</h1>
        <div class="color-container">
          <div class="bg-color-1 test-color"></div>
          <div class="bg-color-2 test-color"></div>
          <div class="bg-color-3 test-color"></div>
          <div class="bg-color-4 test-color"></div>
        </div>
        <div class="color-container">
          <div class="bg-danger test-color"></div>
          <div class="bg-warning test-color"></div>
          <div class="bg-success test-color"></div>
          <div class="bg-info test-color"></div>
          <div class="bg-primary test-color"></div>
          <div class="bg-white test-color"></div>
          <div class="bg-black test-color"></div>
        </div>
      </div>
    </div>
    <div class="ani-grid">
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
      <div class="ani-demo"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style scoped lang="scss" type="text/scss">
@import 'public/styles/mixins';

.all{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.ani-grid{
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 24px;
  .ani-demo{
    width: 100%;
    height: 50vh;
    background: var(--bg-2);
  }
}

.test-container{
  margin-top: var(--space-2xl);
  .test-title{
    margin-bottom: var(--space-l);
  }
  .test-color{
    width: var(--size-4xl);
    height: var(--size-4xl);
    border-radius: var(--border-radius-circle);
    margin-bottom: var(--space-s);
    box-shadow: 0 0 0 0.1rem var(--bg-2);
  }
  .color-container{
    display: grid;
    grid-template-columns: repeat(7, minmax(0, var(--size-4xl)));
    gap: 20px;
  }
}
</style>