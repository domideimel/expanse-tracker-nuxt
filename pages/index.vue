<template>
  <div>
    <h2>Expense Tracker</h2>

    <div class="container">
      <h4>Your Balance</h4>
      <Balance/>
      <IncomeExpanses/>

      <h3>History</h3>
      <ExpanseList/>

      <h3>Add new transaction</h3>
      <ExpanseForm/>
    </div>
  </div>
</template>

<script>
  import Balance from '../components/Balance'
  import IncomeExpanses from '../components/IncomeExpanses'
  import ExpanseList from '../components/ExpanseList'
  import ExpanseForm from '../components/ExpanseForm'

  export default {
    components: {
      ExpanseForm,
      ExpanseList,
      Balance,
      IncomeExpanses
    },
    fetch({store}) {
      // Possible to hook up to a database
      store.dispatch('expanses/update')
    }
  }
</script>
