import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-xl text-sm flex items-center justify-between shadow-md ${className}`}>
      <div className="w-1/2 pr-2">
        <label htmlFor={amountInputId} className="text-gray-600 font-medium mb-1 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(parseFloat(e.target.value))} // Number me lena
          className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
      <div className="w-1/2 pl-2 text-right">
        <label className="text-gray-600 font-medium mb-1 inline-block w-full">
          Currency Type
        </label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}> 
                                                
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;