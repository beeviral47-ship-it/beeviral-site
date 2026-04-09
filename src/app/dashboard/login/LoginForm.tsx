'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { verifyDashboardCredentials } from '../actions'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const ok = await verifyDashboardCredentials(username, password)
      if (ok) {
        localStorage.setItem('dashboard_auth', 'true')
        router.replace('/dashboard')
      } else {
        setError('Incorrect credentials')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo-transparent.png"
            alt="Bee Viral"
            width={130}
            height={65}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Card */}
        <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-8">
          <div className="mb-6">
            <span className="inline-block text-[10px] font-semibold text-[#FFC512] uppercase tracking-widest border border-[#FFC512]/30 rounded px-2.5 py-1 mb-4">
              Internal Access Only
            </span>
            <h1 className="font-display font-bold text-2xl text-white leading-tight">
              SEO Dashboard
            </h1>
            <p className="text-white/40 text-sm mt-2">
              Enter your credentials to access the Bee Viral internal dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="username"
                className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FFC512] focus:ring-1 focus:ring-[#FFC512] transition-colors duration-200"
                placeholder="Username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FFC512] focus:ring-1 focus:ring-[#FFC512] transition-colors duration-200"
                placeholder="Password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-md px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm tracking-wide py-3 rounded-md transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
            >
              {loading ? 'Verifying…' : 'Log In'}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Bee Viral · Internal Tools · Not publicly accessible
        </p>
      </div>
    </div>
  )
}
