<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+{{ getIncome }}€</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-{{ getExpanses }}€</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'IncomeExpanses',
    computed: {
      getExpanses() {
        return this.$store.state.expanses.expanse
      },
      getIncome() {
        return this.$store.state.expanses.income
      }
    }
  }
</script>
