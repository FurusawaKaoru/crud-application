<template>
  <h1>ホーム画面</h1>
  <button @click="hundleClick">初期データ作成</button>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const hundleClick = () => {
      store.dispatch('setEvents',
        [
          { id: 1, title: 'test1', description: 'test description' },
          { id: 2, title: 'test2', description: 'test description' },
          { id: 3, title: 'test3', description: 'test description' },
          { id: 4, title: 'test4', description: 'test description' },
        ]
      )

      router.push('/events')
    }

    return { hundleClick }
  }
}
</script>
