import { TrendingUp, Shield, BarChart3 } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-80 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="relative" style={{ zIndex: 1 }}>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-warning/10 via-gray-900 to-success/10" />
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
            <div className="text-center space-y-8">
              <div className="inline-block">
                <span className="text-warning text-sm md:text-base font-semibold tracking-wider uppercase">
                  Trade Smarter, Not Harder
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Master Your Trading
                <span className="block text-warning mt-2">Journey Today</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of traders who trust TradeHub for real-time analytics, secure transactions, and powerful
                insights that turn market opportunities into success stories.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-warning">TradeHub</span>?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to succeed in trading, all in one powerful platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 border-warning transition-all duration-500 shadow-xl shadow-2xl shadow-warning/20">
                <div className="bg-warning/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Real-Time Analytics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Get instant market insights with our advanced real-time analytics engine.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 border-success transition-all duration-500 shadow-xl shadow-2xl shadow-success/20">
                <div className="bg-success/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Bank-Level Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your assets are protected with military-grade encryption and multi-layer security protocols.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 border-warning transition-all duration-500 shadow-xl shadow-2xl shadow-warning/20">
                <div className="bg-warning/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Advanced Dashboard</h3>
                <p className="text-gray-400 leading-relaxed">
                  Visualize your portfolio performance with customizable charts and comprehensive reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-950 border-t border-gray-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-warning" />
                  <span className="text-2xl font-bold text-white">TradeHub</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted partner in professional trading. Empowering traders worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Products</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 text-warning transition-colors duration-300">
                      Trading Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 text-warning transition-colors duration-300">
                      Analytics Dashboard
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 text-success transition-colors duration-300">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 text-success transition-colors duration-300">
                      Trading Guides
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 text-warning transition-colors duration-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 text-warning transition-colors duration-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© 2025 TradeHub. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 text-warning transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 text-warning transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
