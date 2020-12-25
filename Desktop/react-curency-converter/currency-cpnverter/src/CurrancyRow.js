import React, { useState } from 'react';

function CurrencyRow(props) {
     const {
          currencyOptions,
          selectedCurrencyFrom,
          selectedCurrencyTo,
          onChangeCurrencyTo,
          onChangeCurrencyFrom,
          fromAmount,
          toAmount,
          onChangeAmount,
     } = props;
     
     const [data, setData] = useState([])
     
     let TemData = [
          <div className="row-from">
               <div className="input-1">
                    <div className="from-input">
                         <select value={selectedCurrencyFrom} onChange={onChangeCurrencyFrom}>
                              {currencyOptions.map(option => (
                                   <option key={option} value={option}>{option}</option>
                              ))}
                         </select>
                         <input type="number" value={fromAmount} onChange={onChangeAmount} />
                    </div>
               </div>
          </div>,
          <div className="equal">
               =
               </div>,
          <div className="row-to">
               <div className="input-1">
                    <div className="to-input">
                         <select value={selectedCurrencyTo} onChange={onChangeCurrencyTo}>
                              {currencyOptions.map(option => (
                                   <option key={option} value={option}>{option}</option>
                              ))}
                         </select>
                         <input type="number" value={toAmount} />
                    </div>
               </div>
          </div>,
          <button onClick={handleToAdditionBtn} className="shit-btn">+</button>,
     ]
     
     const toAddition = [
          <div className="row-to">
               <div className="input-1">
                    <div className="to-input">
                         <select value={selectedCurrencyTo} onChange={onChangeCurrencyTo}>
                              {currencyOptions.map(option => (
                                   <option key={option} value={option}>{option}</option>
                              ))}
                         </select>
                         <input type="number" value={toAmount} />
                    </div> 
               </div>
          </div>
     ]
     
     let ButtonAddition = <div><button>+</button></div>
     
     // data.concat(ButtonAddition)
     function handleToAdditionBtn(e) {
          
          alert("pushed")
          TemData.pop()
          TemData.concat(toAddition)
          TemData.concat(ButtonAddition)
          console.log(TemData)
          setData(toAddition)
     }
     
     
     return (
          <div className="container">{TemData}</div>
     )
}

export default CurrencyRow;
