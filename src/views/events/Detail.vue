<template>
  <div>
    <p>ID</p>
    <input v-model="state.id" readonly="readonly">
  </div>
  <div>
    <p>タイトル</p>
    <input v-model="state.title">
  </div>
  <div>
    <p>説明</p>
    <input v-model="state.description">
  </div>
  <div>
    <button @Click="hundleBtnClick">保存</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const event = store.getters.getEventById(route.params.id)

    const state = reactive({ id: event.id, title: event.title, description: event.description })

    const hundleBtnClick = () => {
      store.commit('updateEvent', { ...state })
      router.push('/')
    }

    return { state, hundleBtnClick }
  }
}
</script>
