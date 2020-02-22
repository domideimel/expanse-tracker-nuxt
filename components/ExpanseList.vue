<template>
  <ul id="list" class="list" v-if="getTransactions">
    <li
      v-for="transaction in getTransactions"
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{transaction.text}} <span>{{ transaction.amount > 0 ? '+' : '-' }} {{ Math.abs(transaction.amount) }}€</span>
      <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script>

  export default {
    name: 'ExpanseList',
    computed: {
      getTransactions() {
        return this.$store.state.expanses.transactions
      }
    },
    methods: {
      deleteTransaction(id) {
        this.$store.commit('expanses/DELETE_TRANSACTIONS', id)
        this.$store.dispatch('expanses/update')
      }
    }
  }
</script>
