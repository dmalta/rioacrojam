<template>
  <div class="container">
    <header>
      <h1 class="title-main">{{ $t('title') }}</h1>
      <div class="social-links">
        <a href="https://chat.whatsapp.com/C0TqXruUYZxCwvahoUE3Y1" target="_blank">
          <font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp
        </a>
        <a href="https://instagram.com/rioacrojam" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram
        </a>
      </div>
    </header>

    <div class="intro" v-html="$t('intro')"></div>

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
      <h2>{{ $t('locationTime') }}</h2>

      <p><strong>{{ $t('locationLabel') }}</strong> <span v-html="$t('locationText')"></span></p>

      <p><strong>{{ $t('timeLabel') }}</strong> {{ $t('timeText') }}</p>

      <p><strong>{{ $t('importantLabel') }}</strong> {{ $t('importantText') }}</p>

      <p><strong>{{ $t('amenitiesLabel') }}</strong> <span v-html="$t('amenitiesText')"></span></p>

      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3845.5366229080755!2d-43.20480592449766!3d-22.974211979207716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU4JzI3LjIiUyA0M8KwMTInMDguMCJX!5e1!3m2!1sen!2sbr!4v1769116159326!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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