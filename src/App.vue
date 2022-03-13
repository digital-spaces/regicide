<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            <RouterLink to="/characterGeneration">Character Generation</RouterLink>
            <ul>
              <RouterLink to="/characterGeneration/characteristics">Characteristics</RouterLink>
            </ul>
          </li>
          <li><RouterLink to="/improvingStatistics">Improving Statistics</RouterLink></li>
          <li><RouterLink to="/characterGeneration/characteristics">Characteristics</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <RouterLink to="ogl">OGL</RouterLink>
  </footer>
</template>

<style>
@import '@/assets/base.css';
</style>
