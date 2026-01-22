<template>
  <div class="lang-switch">
    <font-awesome-icon :icon="['fas', 'language']" class="lang-icon" />
    <button
      class="lang-btn"
      :class="{ active: route.path === '/' }"
      @click="switchLang('pt')">
      PT
    </button>
    <button
      class="lang-btn"
      :class="{ active: route.path === '/es' }"
      @click="switchLang('es')">
      ES
    </button>
    <button
      class="lang-btn"
      :class="{ active: route.path === '/en' }"
      @click="switchLang('en')">
      EN
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

const switchLang = (lang) => {
  locale.value = lang
  router.push(lang === 'pt' ? '/' : '/' + lang)
}
</script>