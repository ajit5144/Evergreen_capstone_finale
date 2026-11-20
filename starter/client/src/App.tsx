// App.tsx - the page shell the engineering team handed off.
// (Solution state, end of Day 3: components assembled, provider wired.)

import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";
import { QuotesProvider } from "./context/QuotesContext";

const APP_TITLE =
  import.meta.env.VITE_APP_TITLE ?? "Evergreen Insurance - Get a Quote";

function LandingPage() {
  document.title = "Evergreen Insurance";

  return (
    <>
      <header className="landing-header">
        <div className="brand">Evergreen Insurance</div>
        <nav className="landing-nav" aria-label="Main navigation">
          <a className="nav-badge" href="#quote">We launched</a>
          <a href="#coverage">Coverage</a>
          <a href="#why">Why Evergreen</a>
          <a href="/quote">Get a quote</a>
        </nav>
      </header>

      <div className="launch-banner">Get your quote in under 60 seconds</div>

      <main>
        <section className="landing-hero">
          <h1>Coverage that grows with you</h1>
          <p className="tagline">
            Auto, home, and life coverage with an instant estimate. No account,
            no phone call, no waiting.
          </p>
          <a className="cta" href="/quote">Get your quote</a>
        </section>

        <section id="coverage" className="features">
          <h2>Coverage that fits</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Auto</h3>
              <p>From first cars to family fleets, with rates that reward experience.</p>
            </article>
            <article className="feature-card">
              <h3>Home</h3>
              <p>Protection for the place everything else lives, from studio to farmhouse.</p>
            </article>
            <article className="feature-card">
              <h3>Life</h3>
              <p>Coverage that quietly keeps its promise, so the people you love can keep theirs.</p>
            </article>
          </div>
        </section>

        <section id="why" className="why">
          <h2>Why Evergreen</h2>
          <ul>
            <li>An estimate in under a minute, computed the same way our agents compute it.</li>
            <li>Your saved quotes are there when you come back.</li>
            <li>Clear prices, plain words, no surprises at renewal.</li>
          </ul>
        </section>

        <section id="quote" className="closing-cta">
          <h2>Ready when you are</h2>
          <p>The quote takes less than a minute.</p>
          <a className="cta" href="/quote">Start your quote</a>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </>
  );
}

function QuotePage() {
  document.title = APP_TITLE;

  return (
    <QuotesProvider>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Evergreen Insurance home">
          Evergreen Insurance
        </a>
        <nav className="site-nav" aria-label="Quote navigation">
          <a href="/">Home</a>
          <a href="#quote-form">Coverage</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <h1>Coverage that grows with you</h1>
          <p>Get an estimated premium in under a minute, no account needed.</p>
        </section>

        <section id="quote-form" className="quote-form-section">
          <QuoteForm />
          <RecentQuotes />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </QuotesProvider>
  );
}

function App() {
  return window.location.pathname === "/quote" ? <QuotePage /> : <LandingPage />;
}

export default App;
