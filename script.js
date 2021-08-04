const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
    {id: 1, name: 'Bolo', amount: -20},
    {id: 2, name: 'Salário', amount: 2000},
    {id: 3, name: 'Coxinha', amount: -3},
    {id: 4, name: 'IR', amount: 450}
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator} </span><button class="delete-btn"></button>
    `
    transactionsUl.append(li)
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
}

init()