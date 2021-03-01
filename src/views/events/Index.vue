<template>
  <h1>Event List</h1>
  <table>
    <th>
      ID
    </th>
    <th>
      タイトル
    </th>
    <th>
      説明
    </th>
    <tr v-for="event in events" :key="event.id">
      <td>
        {{ event.id }}
      </td>
      <td>
        {{ event.title }}
      </td>
      <td>
        {{ event.description }}
      </td>
      <td>
        <router-link :to="{ name: 'EventsDetail', params: { id: event.id }} ">
          SHOW
        </router-link>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  setup() {
    const events = [
      { id: 1, title: 'test1', description: 'test description' },
      { id: 2, title: 'test2', description: 'test description' },
      { id: 3, title: 'test3', description: 'test description' },
      { id: 4, title: 'test4', description: 'test description' },
    ]

    return { events }
  }
}
</script>

<style>

</style>
