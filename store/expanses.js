export const state = () => ({
  transactions: [],
  balance: 0.00,
  income: 0.00,
  expanse: 0.00
})

export const mutations = {
  DELETE_TRANSACTIONS(state, id) {
    state.transactions = state.transactions.filter(transaction => transaction.id !== id)
  },
  ADD_TRANSACTION(state, transaction) {
    state.transactions = [transaction, ...state.transactions]
  },
  SET_BALANCE(state) {
    state.balance = state.transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)
  },
  SET_EXPANSE(state) {
    state.expanse = (state.transactions
      .filter(item => item.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0) * -1)
      .toFixed(2)
  },
  SET_INCOME(state) {
    state.income = state.transactions
      .filter(item => item.amount > 0)
      .reduce((acc, item) => (acc += item.amount), 0)
      .toFixed(2)
  }
}

export const actions = {
  ADD_TRANSACTION({commit, dispatch}, transaction) {
    commit('ADD_TRANSACTION', transaction)
    dispatch('update')
  },
  update({commit}) {
    commit('SET_BALANCE')
    commit('SET_EXPANSE')
    commit('SET_INCOME')
  }
}
