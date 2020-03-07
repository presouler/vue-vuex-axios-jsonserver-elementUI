<template>
  <div class="list">
    <div @click="jump">
      {{ Users.id }}
      {{ Users.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Users: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    jump() {
      this.$router.push({ name: 'UserDetail', params: { id: this.Users.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.list{
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cccccc;
  width: 100px;
  height: 50px;
  margin-top: 20px;
}
</style>
