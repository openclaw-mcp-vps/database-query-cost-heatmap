export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Visualize Expensive<br />
          <span className="text-[#58a6ff]">Database Queries</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your database, analyze query logs and execution plans, and instantly see interactive heatmaps of your costliest queries — by time and money.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Get Access — $25/mo
        </a>
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            { label: 'Query Cost Heatmaps', desc: 'Color-coded by execution cost' },
            { label: 'Execution Plan Analysis', desc: 'Drill into slow query plans' },
            { label: 'Background Collection', desc: 'Periodic automated sampling' },
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-semibold mb-2">{f.label}</div>
              <div className="text-[#8b949e] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Heatmap Preview */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
          <div className="text-xs text-[#8b949e] mb-4 font-mono">Query Cost Heatmap — Last 24h</div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 96 }).map((_, i) => {
              const intensity = Math.random()
              const bg =
                intensity > 0.85 ? 'bg-red-600' :
                intensity > 0.65 ? 'bg-orange-500' :
                intensity > 0.45 ? 'bg-yellow-500' :
                intensity > 0.25 ? 'bg-green-600' : 'bg-[#21262d]'
              return <div key={i} className={`${bg} rounded h-6 opacity-90`} />
            })}
          </div>
          <div className="flex gap-4 mt-4 text-xs text-[#8b949e]">
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-red-600"></span>Critical</span>
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-orange-500"></span>High</span>
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-yellow-500"></span>Medium</span>
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-green-600"></span>Low</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited database connections',
              'Real-time query cost heatmaps',
              'Execution plan deep-dive',
              'Background job scheduler',
              'Aggregated metrics storage',
              'Email alerts for cost spikes',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and MariaDB are supported via standard connection strings. More adapters are on the roadmap.'
            },
            {
              q: 'How is query cost calculated?',
              a: 'We use EXPLAIN ANALYZE output to extract planner cost estimates and actual execution times, then normalize them into a unified cost score.'
            },
            {
              q: 'Is my data sent to any third-party servers?',
              a: 'No. The app runs entirely in your own environment. Query data and metrics are stored locally and never leave your infrastructure.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} DB Query Cost Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
