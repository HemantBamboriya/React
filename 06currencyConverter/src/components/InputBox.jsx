"use client"

import React, { useId } from "react"

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
  const amountInputId = useId()

  return (
    <div className={`bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg ${className}`}>
      <div className="w-full">
        {/* Label */}
        <label
          htmlFor={amountInputId}
          className="text-white/90 mb-2 inline-block font-medium text-sm uppercase tracking-wide"
        >
          {label}
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Amount Input */}
          <div className="flex-1">
            <input
              id={amountInputId}
              className="outline-none w-full bg-white/90 backdrop-blur-sm py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 font-medium text-lg placeholder-gray-400"
              type="number"
              placeholder="0.00"
              disabled={amountDisable}
              value={amount}
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
          </div>

          {/* Currency Select */}
          <div className="flex-shrink-0">
            <select
              className="outline-none bg-white/90 backdrop-blur-sm py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer text-gray-800 font-medium uppercase min-w-[100px]"
              value={selectCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency} className="bg-white text-gray-800">
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export { InputBox }
