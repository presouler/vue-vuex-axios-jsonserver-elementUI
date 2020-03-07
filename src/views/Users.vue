<template>
  <div>
    <user-list v-for="user in users"
    :key="user.id"
    :Users="user"
    >
    </user-list>
  </div>
</template>

<script>
import UserList from '../components/UserList.vue';

export default {
  components: {
    UserList,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$UserServers.getUsers().then((res) => { this.users = res.data; });
  },
};
</script>

<style lang="scss" scoped>

</style>
