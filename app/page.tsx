'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

declare global {
  interface Window {
    ethereum?: any
  }
}

export default function Home() {
  const [connectedWallet, setConnectedWallet] = useState<any>(null)
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    evmAddress: '',
    xAccount: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  // Check if MetaMask or other EVM wallet is available
  const checkWalletAvailability = () => {
    return typeof window.ethereum !== 'undefined'
  }

  // Connect wallet function
  const connectWallet = async () => {
    if (!checkWalletAvailability()) {
      alert('No EVM wallet detected. Please install MetaMask, Rabby, or another EVM-compatible wallet.')
      return
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0]
      setConnectedAddress(address)
      setConnectedWallet(window.ethereum)
      setFormData(prev => ({ ...prev, evmAddress: address }))
      console.log('Wallet connected:', address)
    } catch (error) {
      console.error('Error connecting wallet:', error)
      alert('Failed to connect wallet. Please try again.')
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!connectedWallet) {
      alert('Please connect your wallet first')
      return
    }
    
    if (!formData.email || !formData.evmAddress || !formData.xAccount) {
      alert('Please fill in all fields')
      return
    }
    
    if (!formData.evmAddress.startsWith('0x') || formData.evmAddress.length !== 42) {
      alert('Please enter a valid EVM address')
      return
    }
    
    if (!formData.xAccount.startsWith('@')) {
      alert('Please enter a valid X account starting with @')
      return
    }
    
    const submissionData = {
      email: formData.email,
      evmAddress: formData.evmAddress,
      xAccount: formData.xAccount,
      connectedWallet: connectedWallet.isMetaMask ? 'MetaMask' : 'Other EVM Wallet',
      timestamp: new Date().toISOString()
    }
    
    console.log('Form submitted:', submissionData)
    setShowSuccess(true)
    setFormData({ email: '', evmAddress: connectedAddress || '', xAccount: '' })
    
    // Open Twitter with pre-filled tweet
    const tweetText = encodeURIComponent('I registered to ThalorFi, the autonomous DeFi infrastructure that orchestrates real-time capital movements across protocols with AI-native intelligence. Join the revolution. https://thalorfi.com https://x.com/ThalorFi')
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`
    window.open(twitterUrl, '_blank')
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  // Handle wallet account changes
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          setConnectedWallet(null)
          setConnectedAddress(null)
          setFormData(prev => ({ ...prev, evmAddress: '' }))
        } else {
          setConnectedAddress(accounts[0])
          setFormData(prev => ({ ...prev, evmAddress: accounts[0] }))
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-thalor-blue-50 via-thalor-blue-100 to-thalor-blue-200 bg-[length:200%_200%] animate-gradient-shift text-gray-800 flex items-center justify-center p-5 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-[20%] left-[10%] w-[120px] h-[120px] bg-radial-gradient-white rounded-full animate-float1 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[60%] right-[15%] w-[100px] h-[100px] bg-radial-gradient-blue1 rounded-full animate-float2 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[30%] right-[30%] w-[80px] h-[80px] bg-radial-gradient-blue2 rounded-full animate-float3 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[70%] left-[20%] w-[60px] h-[60px] bg-radial-gradient-blue3 rounded-full animate-float4 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[15%] right-[5%] w-[70px] h-[70px] bg-radial-gradient-white-light rounded-full animate-float5 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[80%] left-[5%] w-[50px] h-[50px] bg-radial-gradient-white rounded-full animate-float6 pointer-events-none blur-[1px]"></div>
      <div className="absolute top-[45%] left-[5%] w-[90px] h-[90px] bg-radial-gradient-white-very-light rounded-full animate-float7 pointer-events-none blur-[1px]"></div>

      {/* Logo top left */}
      <div className="fixed top-[30px] left-[30px] w-[70px] h-[70px] bg-white/90 rounded-full flex items-center justify-center shadow-lg z-[1000] transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/30">
        <Image src="/logo.png" alt="ThalorFi Logo" width={50} height={50} className="object-contain" />
      </div>

      {/* Connect wallet button */}
      <button
        onClick={connectWallet}
        className={`fixed top-[30px] right-[30px] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 z-[1000] shadow-lg hover:-translate-y-0.5 hover:shadow-xl ${
          connectedWallet
            ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
            : 'bg-gradient-to-br from-thalor-blue-200 to-thalor-blue-300 text-gray-800 hover:shadow-thalor-blue-200/40'
        }`}
      >
        {connectedWallet ? `${connectedAddress?.slice(0, 6)}...${connectedAddress?.slice(-4)}` : 'Connect Wallet'}
      </button>

      {/* Main container */}
      <div className="max-w-[500px] w-full bg-white/90 backdrop-blur-[20px] rounded-3xl p-12 border border-white/30 shadow-2xl relative z-[1]">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Thalor<span className="text-2xl align-super font-semibold">Fi</span>
          </h1>
        </div>

        {/* Hero title */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-gray-800 leading-relaxed max-w-[600px] mx-auto">
            Autonomous and transparent DeFi infrastructure powered by AI
          </h2>
        </div>

        {/* Form container */}
        <div className={`bg-white/70 rounded-2xl p-8 border border-white/50 relative ${!connectedWallet ? 'form-disabled' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-300 focus:outline-none focus:border-thalor-blue-200 focus:bg-white/95 focus:ring-3 focus:ring-thalor-blue-200/20"
              />
            </div>

            <div>
              <label htmlFor="evmAddress" className="block text-sm font-medium text-gray-800 mb-2">
                EVM Address
              </label>
              <input
                type="text"
                id="evmAddress"
                value={formData.evmAddress}
                onChange={(e) => setFormData(prev => ({ ...prev, evmAddress: e.target.value }))}
                placeholder="0x..."
                required
                readOnly={!!connectedWallet}
                className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-300 focus:outline-none focus:border-thalor-blue-200 focus:bg-white/95 focus:ring-3 focus:ring-thalor-blue-200/20"
              />
            </div>

            <div>
              <label htmlFor="xAccount" className="block text-sm font-medium text-gray-800 mb-2">
                X Account
              </label>
              <input
                type="text"
                id="xAccount"
                value={formData.xAccount}
                onChange={(e) => setFormData(prev => ({ ...prev, xAccount: e.target.value }))}
                placeholder="@username"
                required
                className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-300 focus:outline-none focus:border-thalor-blue-200 focus:bg-white/95 focus:ring-3 focus:ring-thalor-blue-200/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-thalor-blue-200 to-thalor-blue-300 border-none rounded-xl text-gray-800 text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-thalor-blue-200/40 active:translate-y-0"
            >
              Register
            </button>
          </form>

          {showSuccess && (
            <div className="text-center text-green-600 font-medium mt-4">
              Thank you for joining ThalorFi! We'll be in touch soon.
            </div>
          )}
        </div>
      </div>

      {/* X icon */}
      <a
        href="https://x.com/ThalorFi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-[999] hover:-translate-y-0.5 hover:shadow-xl hover:bg-white"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-800">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      <style jsx>{`
        .bg-radial-gradient-white {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
        }
        .bg-radial-gradient-blue1 {
          background: radial-gradient(circle, rgba(180, 200, 230, 0.5) 0%, transparent 70%);
        }
        .bg-radial-gradient-blue2 {
          background: radial-gradient(circle, rgba(160, 180, 220, 0.4) 0%, transparent 70%);
        }
        .bg-radial-gradient-blue3 {
          background: radial-gradient(circle, rgba(200, 220, 240, 0.5) 0%, transparent 70%);
        }
        .bg-radial-gradient-white-light {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
        }
        .bg-radial-gradient-white-very-light {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
        }
      `}</style>
    </div>
  )
} 