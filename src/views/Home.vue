<template>
  <div class="container">
    <header>
      <h1 class="title-main">{{ $t('title') }}</h1>
      <div class="social-links">
        <a href="https://chat.whatsapp.com/C0TqXruUYZxCwvahoUE3Y1" target="_blank">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://instagram.com/rioacrojam" target="_blank">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    </header>

    <div class="intro">
      {{ $t('intro') }}
    </div>

    <section>
      <h2>{{ $t('principles') }}</h2>
      <ul>
        <li v-for="item in $tm('principlesList')" :key="item" v-html="item"></li>
      </ul>
    </section>

    <section>
      <h2>{{ $t('recommendations') }}</h2>

      <h3>{{ $t('respectLimits') }}</h3>
      <p>{{ $t('respectLimitsText') }}</p>

      <h3>{{ $t('safetyWord') }}</h3>
      <p>{{ $t('safetyWordText') }}</p>

      <h3>{{ $t('physicalContact') }}</h3>
      <p>{{ $t('physicalContactText') }}</p>

      <h3>{{ $t('collaboration') }}</h3>
      <p>{{ $t('collaborationText') }}</p>

      <h3>{{ $t('spotters') }}</h3>
      <p>{{ $t('spottersText') }}</p>
      <ul>
        <li v-for="item in $tm('spottersList')" :key="item">{{ item }}</li>
      </ul>

      <h3>{{ $t('photosVideos') }}</h3>
      <p>{{ $t('photosVideosText') }}</p>

      <h3>{{ $t('mediation') }}</h3>
      <p>{{ $t('mediationText') }}</p>
    </section>

    <section>
      <h2>{{ $t('spirit') }}</h2>
      <p>{{ $t('spiritText') }}</p>
      <div v-for="item in $tm('spiritList')" :key="item"><strong>{{ item.split(':')[0] }}:</strong> {{ item.split(':')[1].trim() }}</div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const { locale } = useI18n()
    const route = useRoute()

    watch(
      () => route.params.lang,
      (newLang) => {
        const lang = newLang || 'pt'
        locale.value = lang
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-419' : 'en-US'
      },
      { immediate: true }
    )

    return {}
  }
}
</script>