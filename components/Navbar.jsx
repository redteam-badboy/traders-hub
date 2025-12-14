"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, LogOut, User, Home, TrendingUp, LayoutDashboard, LogIn, X } from "lucide-react"

export default function Navbar({ session, signIn, signOut }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const userMenuRef = useRef(null)

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section - Mobile Menu + Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <div className="lg:hidden relative" ref={mobileMenuRef}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-warning hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-warning hover:bg-gray-800 transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-warning hover:bg-gray-800 transition-colors"
                >
                  <TrendingUp className="h-5 w-5" />
                  <span>Mission</span>
                </Link>
                {session?.user && (
                  <>
                    <Link
                      href="/trade"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-warning hover:bg-gray-800 transition-colors"
                    >
                      <TrendingUp className="h-5 w-5" />
                      <span>Trade</span>
                    </Link>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-warning hover:bg-gray-800 transition-colors"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                    <div className="border-t border-gray-700 my-2"></div>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        signOut()
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors w-full"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2 hover:opacity-80 transition-opacity">
            <TrendingUp className="h-7 w-7 text-warning" />
            <span className="text-warning font-bold text-xl hidden sm:inline">Makhosi Traders-Hub</span>
          </Link>
        </div>

        {/* Center Section - Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-warning hover:bg-gray-700 font-medium transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/mission"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-warning hover:bg-gray-700 font-medium transition-colors"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Mission</span>
          </Link>
          {session?.user && (
            <>
              <Link
                href="/trade"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-warning hover:bg-gray-700 font-medium transition-colors"
              >
                <TrendingUp className="h-5 w-5" />
                <span>Trade</span>
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-warning hover:bg-gray-700 font-medium transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </>
          )}
        </div>

        {/* Right Section - Auth */}
        <div className="flex items-center">
          {session?.user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-warning bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <User className="h-5 w-5 text-warning" />
                <span className="text-gray-300 hidden md:inline">{session?.user?.name}</span>
              </button>

              {/* User Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide">Account</div>
                  <Link
                    href="/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-warning hover:bg-gray-800 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={() => {
                      setUserMenuOpen(false)
                      signOut()
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors w-full"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={signIn}
              className="flex items-center gap-2 px-6 py-2 bg-warning text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-warning/50"
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
