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
    <tr v-for="event in $store.getters.getEvents" :key="event.id">
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
}
</script>

<style>

</style>
