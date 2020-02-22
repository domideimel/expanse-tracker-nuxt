<template>
  <h1 id="balance">{{ getBalance }}€</h1>
</template>

<script>
  export default {
    name: 'Balance',
    computed: {
      getBalance() {
        return this.$store.state.expanses.balance
      }
    }
  }
</script>
