"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, DollarSign, Activity, Calendar, Target, PieChart, BarChart3 } from "lucide-react"

export default function Dashboard() {
  const [trades, setTrades] = useState([])
  const [loading, setLoading] = useState(true)
  const [monthlyStats, setMonthlyStats] = useState({})

  useEffect(() => {
    fetchTrades()
  }, [])

  const fetchTrades = async () => {
    try {
      const response = await fetch("/api/trades")
      const data = await response.json()
      setTrades(data)
      calculateMonthlyStats(data)
    } catch (error) {
      console.error("Error fetching trades:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateMonthlyStats = (tradesData) => {
    const stats = {}

    tradesData.forEach((trade) => {
      const date = new Date(trade.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`

      if (!stats[monthKey]) {
        stats[monthKey] = {
          totalTrades: 0,
          wins: 0,
          losses: 0,
          profit: 0,
          loss: 0,
          netPL: 0,
        }
      }

      stats[monthKey].totalTrades++

      const entryPrice = Number.parseFloat(trade.entryPrice)
      const sl = Number.parseFloat(trade.SL)
      const tp = Number.parseFloat(trade.TP)
      const lotSize = Number.parseFloat(trade.lotSize)

      // Calculate profit/loss (simplified calculation)
      const potentialProfit = Math.abs(tp - entryPrice) * lotSize * 100000
      const potentialLoss = Math.abs(entryPrice - sl) * lotSize * 100000

      // For demo purposes, randomly determine win/loss (in real app, you'd have actual outcome data)
      const isWin = Math.random() > 0.4 // 60% win rate for demo

      if (isWin) {
        stats[monthKey].wins++
        stats[monthKey].profit += potentialProfit
        stats[monthKey].netPL += potentialProfit
      } else {
        stats[monthKey].losses++
        stats[monthKey].loss += potentialLoss
        stats[monthKey].netPL -= potentialLoss
      }
    })

    setMonthlyStats(stats)
  }

  const calculateOverallStats = () => {
    let totalProfit = 0
    let totalLoss = 0
    let totalWins = 0
    let totalLosses = 0

    Object.values(monthlyStats).forEach((month) => {
      totalProfit += month.profit
      totalLoss += month.loss
      totalWins += month.wins
      totalLosses += month.losses
    })

    return {
      totalProfit,
      totalLoss,
      netPL: totalProfit - totalLoss,
      totalTrades: totalWins + totalLosses,
      winRate: totalWins + totalLosses > 0 ? ((totalWins / (totalWins + totalLosses)) * 100).toFixed(1) : 0,
    }
  }

  const overallStats = calculateOverallStats()

  const formatMonth = (monthKey) => {
    const [year, month] = monthKey.split("-")
    const date = new Date(year, Number.parseInt(month) - 1)
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-amber-400 animate-pulse mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-amber-500/20 rounded-xl">
              <BarChart3 className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Trading Dashboard</h1>
          </div>
          <p className="text-slate-400 text-lg">Track your performance and analyze monthly results</p>
        </div>

        {/* Overall Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-sm font-medium">Total Profit</span>
            </div>
            <p className="text-3xl font-bold text-white">${overallStats.totalProfit.toFixed(2)}</p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-red-400 text-sm font-medium">Total Loss</span>
            </div>
            <p className="text-3xl font-bold text-white">${overallStats.totalLoss.toFixed(2)}</p>
          </div>

          <div
            className={`bg-gradient-to-br ${overallStats.netPL >= 0 ? "from-amber-500/20 to-amber-600/10 border-amber-500/30" : "from-orange-500/20 to-orange-600/10 border-orange-500/30"} border rounded-2xl p-6 backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 ${overallStats.netPL >= 0 ? "bg-amber-500/20" : "bg-orange-500/20"} rounded-lg`}>
                <DollarSign className={`w-6 h-6 ${overallStats.netPL >= 0 ? "text-amber-400" : "text-orange-400"}`} />
              </div>
              <span className={`${overallStats.netPL >= 0 ? "text-amber-400" : "text-orange-400"} text-sm font-medium`}>
                Net P/L
              </span>
            </div>
            <p className="text-3xl font-bold text-white">${Math.abs(overallStats.netPL).toFixed(2)}</p>
            <p className={`text-sm ${overallStats.netPL >= 0 ? "text-emerald-400" : "text-red-400"} mt-1`}>
              {overallStats.netPL >= 0 ? "↑" : "↓"} {overallStats.netPL >= 0 ? "Profit" : "Loss"}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 text-sm font-medium">Win Rate</span>
            </div>
            <p className="text-3xl font-bold text-white">{overallStats.winRate}%</p>
            <p className="text-sm text-slate-400 mt-1">{overallStats.totalTrades} total trades</p>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-700/50">
            <Calendar className="w-7 h-7 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Monthly Performance</h2>
          </div>

          <div className="space-y-4">
            {Object.entries(monthlyStats)
              .sort((a, b) => b[0].localeCompare(a[0]))
              .map(([monthKey, stats]) => {
                const winRate = ((stats.wins / stats.totalTrades) * 100).toFixed(1)

                return (
                  <div
                    key={monthKey}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-500/20 rounded-xl">
                          <Calendar className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{formatMonth(monthKey)}</h3>
                          <p className="text-slate-400 text-sm">{stats.totalTrades} trades executed</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                        <div className="bg-slate-900/50 rounded-xl p-3">
                          <p className="text-emerald-400 text-xs font-medium mb-1">Wins</p>
                          <p className="text-white font-bold text-lg">{stats.wins}</p>
                        </div>

                        <div className="bg-slate-900/50 rounded-xl p-3">
                          <p className="text-red-400 text-xs font-medium mb-1">Losses</p>
                          <p className="text-white font-bold text-lg">{stats.losses}</p>
                        </div>

                        <div className="bg-slate-900/50 rounded-xl p-3">
                          <p className="text-blue-400 text-xs font-medium mb-1">Win Rate</p>
                          <p className="text-white font-bold text-lg">{winRate}%</p>
                        </div>

                        <div className={`${stats.netPL >= 0 ? "bg-emerald-500/10" : "bg-red-500/10"} rounded-xl p-3`}>
                          <p
                            className={`${stats.netPL >= 0 ? "text-emerald-400" : "text-red-400"} text-xs font-medium mb-1`}
                          >
                            Net P/L
                          </p>
                          <p className={`${stats.netPL >= 0 ? "text-emerald-400" : "text-red-400"} font-bold text-lg`}>
                            {stats.netPL >= 0 ? "+" : "-"}${Math.abs(stats.netPL).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Win/Loss Ratio</span>
                        <span>
                          {stats.wins}W - {stats.losses}L
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                          style={{ width: `${winRate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}

            {Object.keys(monthlyStats).length === 0 && (
              <div className="text-center py-12">
                <PieChart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No trading data available yet</p>
                <p className="text-slate-500 text-sm mt-2">Start creating trades to see your monthly performance</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
