<template>
  <form id="form" @submit.prevent="submit">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="text" type="text" id="text" placeholder="Enter text..."/>
    </div>
    <div class="form-control">
      <label for="amount"
      >Amount <br/>
        (negative - expense, positive - income)</label
      >
      <input v-model="amount" type="number" id="amount" placeholder="Enter amount..."/>
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script>
  export default {
    name: 'ExpanseForm',
    data() {
      return {
        text: '',
        amount: 0
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('expanses/ADD_TRANSACTION', {
          id: this.$uuid.v1(),
          text: this.text,
          amount: +this.amount
        })
        this.text = ''
        this.amount = 0
      }
    }
  }
</script>
