<template>
  <div>
    <p>ID</p>
    <input v-model="event.id">
  </div>
  <div>
    <p>タイトル</p>
    <input v-model="event.title">
  </div>
  <div>
    <p>説明</p>
    <input v-model="event.description">
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()

    const event = store.getters.getEventById(route.params.id)

    return { event }
  }
}
</script>

<style>

</style>
