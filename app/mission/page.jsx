"use client"

import { Calendar, Target, TrendingUp, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react"

export default function MissionPage() {
  const monthlyGoals = [
    {
      month: "December 2025",
      goals: [
        "Master Trading Fundamental And Technical Analysis",
        "Push Trading Capital To $200",
        "Complete IT Setup",
        "Complete A Web Journal",
      ],
    },
    {
      month: "January 2026",
      goals: [
        "Push Trading capital To $300",
        "Start Crypto And Gold Trading At XMGlobal",
        "Start A Life Savings Account",
        "Meet Mertenal Parent",
      ],
    },
    {
      month: "April 2026",
      goals: ["Push Trading Capital To $2000"],
    },
  ]

  const yearlyGoals = [
    "$5000 Trading Capital",
    "Car",
    "Own Space",
    "Full Time Trader",
    "Retire My Mom",
    "Upgrade Personal Relationships",
    "Master Dark Psychologist",
    "Strong physically, mental and spiritualy",
  ]

  const dailyMust = [
    "Jounaling",
    "Trading",
    "Gym",
    "Maditation/Praying",
    "Spiritual Rehasals",
    "Nature Personal Relationshirp/s",
  ]

  const redFlags = [
    "Unnecessary waste of money",
    "Emotional weaknesses",
    "Trading Outside The Edge",
    "Non Documented Trades",
    "Revealed Plans",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/abstract-trading-charts-pattern.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">The Mission Book</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Vision 2025-2026
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your roadmap to financial freedom and personal mastery
          </p>
        </div>

        {/* Monthly Goals Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Monthly Milestones</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyGoals.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-4">{item.month}</h3>
                <ul className="space-y-3">
                  {item.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Yearly Goals Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Yearly Goals</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {yearlyGoals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-slate-200 font-medium text-sm">{goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Column Layout for Daily Must and Red Flags */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Daily Must Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Daily Must</h2>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-6 md:p-8">
              <p className="text-slate-400 text-sm mb-6">Non-negotiable daily habits for success</p>
              <ul className="space-y-4">
                {dailyMust.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 bg-slate-900/50 rounded-lg p-4 border border-emerald-700/20 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Red Flags Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Red Flags</h2>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-sm border border-red-700/30 rounded-xl p-6 md:p-8">
              <p className="text-slate-400 text-sm mb-6">Behaviors to avoid at all costs</p>
              <ul className="space-y-4">
                {redFlags.map((flag, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 bg-slate-900/50 rounded-lg p-4 border border-red-700/20 hover:border-red-500/50 transition-all duration-300"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-8">
            <p className="text-slate-300 text-lg md:text-xl font-medium italic">
              "Success is the sum of small efforts repeated day in and day out."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
