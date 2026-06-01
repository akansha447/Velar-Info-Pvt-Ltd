export default function Comparison(){
  const rows = [
    ['Production Readiness','Ready in days','Weeks/months'],
    ['Execution Capability','Full workflow execution','Only recommends'],
    ['Governance & Control','Built-in by design','Added as overlay'],
    ['Enterprise Integration','Seamless','Custom dev needed'],
    ['Scalability','Scales with full visibility','Risk increases with scale'],
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Built for Execution. Not Just Pilots.</h2>
        <div className="overflow-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-sm text-gray-400 border-b border-white/6">
                <th className="py-3">Feature</th>
                <th className="py-3">Velar Info</th>
                <th className="py-3">Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=> (
                <tr key={r[0]} className="align-top border-b border-white/3">
                  <td className="py-4 font-medium text-white">{r[0]}</td>
                  <td className="py-4 text-gray-300">{r[1]}</td>
                  <td className="py-4 text-gray-300">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
