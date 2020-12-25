import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrancyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState()
  
  let toAmount, fromAmount, toAddition
  toAmount = amount * exchangeRate
  fromAmount = amount
  
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        console.log(firstCurrency)
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
        })
  }, [])
  
  useEffect(() => { 
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
    
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
  }
  return (
    <>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrencyFrom={fromCurrency}
        selectedCurrencyTo={toCurrency}
        onChangeCurrencyFrom={e => setFromCurrency(e.target.value)}
        onChangeCurrencyTo={e => setToCurrency(e.target.value)}
        fromAmount={fromAmount}
        toAmount={toAmount}
        onChangeAmount={handleFromAmountChange}
      />
    </>
  );
}
export default App;