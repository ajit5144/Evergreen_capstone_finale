// RecentQuotes.tsx (provided - Day 3, REPLACES src/components/RecentQuotes.tsx)
// The list now reads from context: no props, no fetch of its own. The
// loading / error / success states still show; they just come from the
// provider, which owns the data. Saved quotes appear at the top instantly.
// You drop it in; you don't modify it.
import { formatCurrency } from "../premium";
import { useQuotes } from "../context/QuotesContext";

function RecentQuotes() {
  const { quotes, loading, error } = useQuotes();

  return (
    <aside className="recent-quotes">
      <h2>Recent quotes</h2>
      {loading && <p className="loading">Loading recent quotes…</p>}
      {error && <p className="message">{error}</p>}
      {!loading && !error && (
        <ul className="recent-list">
          {quotes.map((quote) => {
            const imageType = quote.type === "renters" ? "home" : quote.type;

            return (
              <li key={quote.id} className="recent-quote">
                <img
                  className="quote-image"
                  src={`/${imageType}.svg`}
                  alt={`${quote.type} coverage`}
                />
                <div className="quote-details">
                  <span className="quote-type">{quote.type}</span>
                  <span className="quote-premium">
                    {formatCurrency(quote.monthlyPremium)}/mo
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}

export default RecentQuotes;
