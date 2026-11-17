export default function ProductLeadTime({ leadTime }: { leadTime?: string }) {
  return <div className="lead-time-panel">
    <p className="font-semibold text-[#334055]">Lead time</p>
    {leadTime ? <p className="mt-2 text-sm leading-6 text-[#607086]">{leadTime}</p> : <>
      <dl className="lead-time-grid">
        {[["Samples", "7 days"], ["50 pcs", "15 days"], ["500 pcs", "20 days"], ["3,000 pcs", "35 days"]].map(([quantity, time]) => <div key={quantity}><dt>{quantity}</dt><dd>{time}</dd></div>)}
      </dl>
      <p className="lead-time-note">Samples after design approval. Special configurations, tooling, peak periods and other exceptions are discussed separately.</p>
    </>}
  </div>;
}
