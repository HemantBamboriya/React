"use client"

import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(Number.parseFloat(amount) * currencyInfo[to])
  }

  return (
    <div
      className="min-h-screen w-full flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg')`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="w-full relative z-10 px-4">
        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Currency Converter</h1>
            <p className="text-gray-200 text-lg">Convert currencies in real-time</p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}
              className="space-y-4"
            >
              {/* From Input */}
              <div className="space-y-2">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* Swap Button */}
              <div className="relative flex justify-center py-2">
                <button
                  type="button"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full border-4 border-white shadow-lg transform hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                  onClick={swap}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </div>

              {/* To Input */}
              <div className="space-y-2">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              {/* Convert Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300/50 text-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>

            {/* Exchange Rate Info */}
            {currencyInfo[to] && (
              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-white/80 text-sm text-center">
                  1 {from.toUpperCase()} = {currencyInfo[to].toFixed(4)} {to.toUpperCase()}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/60 text-sm">Real-time exchange rates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
