"use client"

import { useState, useCallback, useEffect, useRef } from "react"
 import { Copy, RefreshCw, Shield, Check } from "lucide-react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const getPasswordStrength = () => {
    let strength = 0
    if (length >= 8) strength++
    if (length >= 12) strength++
    if (numberAllowed) strength++
    if (charAllowed) strength++

    if (strength <= 1) return { text: "Weak", color: "bg-red-500", width: "25%" }
    if (strength === 2) return { text: "Fair", color: "bg-yellow-500", width: "50%" }
    if (strength === 3) return { text: "Good", color: "bg-blue-500", width: "75%" }
    return { text: "Strong", color: "bg-green-500", width: "100%" }
  }

  const strength = getPasswordStrength()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Password Generator</h1>
          <p className="text-gray-400">Create secure passwords with customizable options</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 space-y-6">
          {/* Password Display */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">Generated Password</label>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className={`w-2 h-2 rounded-full ${strength.color}`}></div>
                {strength.text}
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={password}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                placeholder="Your secure password will appear here"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Strength Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Password Strength</span>
                <span>{strength.text}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
                  style={{ width: strength.width }}
                ></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Length Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Password Length</label>
                <span className="text-sm font-semibold text-purple-400 bg-purple-500/20 px-2 py-1 rounded-lg">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>6</span>
                <span>50</span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-300">Include Characters</h3>

              <div className="grid grid-cols-1 gap-3">
                <label className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-white">Numbers</div>
                    <div className="text-xs text-gray-400">0-9</div>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    className="w-5 h-5 text-purple-500 bg-transparent border-2 border-white/30 rounded focus:ring-purple-500 focus:ring-2"
                    onChange={() => {
                      setNumberAllowed((prev) => !prev)
                    }}
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-white">Special Characters</div>
                    <div className="text-xs text-gray-400">!@#$%^&*</div>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    className="w-5 h-5 text-purple-500 bg-transparent border-2 border-white/30 rounded focus:ring-purple-500 focus:ring-2"
                    onChange={() => {
                      setCharAllowed((prev) => !prev)
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={passwordGenerator}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Generate New Password
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>Keep your accounts secure with strong, unique passwords</p>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default App
