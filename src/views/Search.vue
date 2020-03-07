<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model="items">
      <button @click="submit">Search</button>
    </form>
    <div v-for="(item,index) in searchHistory"
      :key=index
    > {{ item }}
    </div>
  </div>
</template>

<script>

export default {
  created() {
    this.get();
  },
  data() {
    return {
      items: '',
      searchHistory: [],
    };
  },
  methods: {
    submit() {
      if (!this.searchHistory.includes(this.items)) {
        this.searchHistory.push(this.items);
      }
      this.items = '';
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    },
    get() {
      this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    },
  },
};
</script>

<style>

</style>
