'use client';
import { useState, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const contact = 'https://www.spade.com/contact';
export default function Home() {
  const [menu, setMenu] = useState(false);
  const cards = useRef<HTMLDivElement>(null);
  return (
    <main>
      <header className="wrap">
        <a className="logo" href="#">
          SPADE<sup>®</sup>
        </a>
        <nav className={menu ? 'open' : ''}>
          <a href="#solutions">Solutions ↗</a>
          <a href="#customers">Customers</a>
          <a href="#company">Company ↗</a>
          <a href="https://www.spade.com/blog">Docs</a>
        </nav>
        <a className="button pale" href={contact}>
          Contact sales
        </a>
        <button
          className="mobile"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
      </header>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">
            <i>▧</i> RISK & AUTHORIZATION
          </p>
          <h1>
            Confidence in
            <br />
            every authorization
          </h1>
          <p className="intro">
            Spade enriches every transaction with real-time merchant and
            location context, so you can verify legitimacy in under 50
            milliseconds.
          </p>
          <a className="button" href={contact}>
            Contact sales
          </a>
        </div>
        <img
          src="/images/lock.png"
          alt="Topographic line illustration of an open padlock, surrounded by enriched transaction data"
        />
      </section>
      <section className="trust wrap">
        <p>
          Decisioning billions of transactions for companies defining fintech
          and finance 50 times every month
        </p>
        <div className="eyebrow">
          ENTERPRISE-GRADE COVERAGE &nbsp; · &nbsp; PROVEN ACCURACY &nbsp; ·
          &nbsp; REAL-TIME RELIABILITY
        </div>
        <div className="logos">
          <span>FIS</span>
          <span>Citizens</span>
          <span>coinbase</span>
          <span>◧ Cash App</span>
          <span>current.</span>
          <span>◌ quartile</span>
        </div>
      </section>
      <section className="statement wrap">
        <h2>
          When issuer systems rely on unenriched data, every transaction becomes
          harder to trust — leading to false declines, preventable fraud, and
          challenges delivering vendor-locked card experiences.
        </h2>
        <div className="data-orbit">
          <img src="/images/lock.png" alt="" />
          <span className="micro orbit-one">
            RAW TRANSACTION
            <br />
            <br />
            SQ *MKT 0829 CA
          </span>
          <span className="transaction orbit-two">
            <b>▣ &nbsp; Joe & The Juice</b>
            <small>Food & beverage · New York</small>
            <strong>−$24.96</strong>
          </span>
        </div>
      </section>
      <section className="wrap" id="solutions">
        <h2>
          The intelligence layer
          <br />
          beneath every authorization
        </h2>
        <p className="intro">
          Spade enriches transaction data in real time, giving verified merchant
          and location context so issuers can make confident authorization
          decisions — faster and with fewer errors.
        </p>
      </section>

      <section className="features wrap">
        <div className="arrows">
          <button
            aria-label="Previous features"
            onClick={() =>
              cards.current?.scrollBy({ left: -400, behavior: 'smooth' })
            }
          >
            ←
          </button>
          <button
            aria-label="Next features"
            onClick={() =>
              cards.current?.scrollBy({ left: 400, behavior: 'smooth' })
            }
          >
            →
          </button>
        </div>
        <div className="feature-scroll" ref={cards}>
          <article>
            <div className="feature-art mint">
              <div className="merchant-list">
                <span className="micro">◈ Matched transactions</span>
                {[
                  'Whole Foods Market',
                  'Starbucks',
                  'Sweetgreen',
                  'Target',
                  'Joe & The Juice',
                ].map((name, i) => (
                  <div key={name}>
                    <i
                      style={{
                        background: [
                          '#176445',
                          '#00643d',
                          '#465736',
                          '#c74424',
                          '#e991ae',
                        ][i],
                      }}
                    >
                      ▣
                    </i>
                    <span>
                      {name}
                      <small>Verified merchant</small>
                    </span>
                    <b>✓</b>
                  </div>
                ))}
              </div>
            </div>
            <h3>Reduce false declines</h3>
            <p>
              Differentiate real customers from fraud with verified merchant and
              location data.
            </p>
          </article>
          <article>
            <div className="feature-art forest">
              <div className="latency micro">
                LATENCY <span>00:00:000</span>
              </div>
              <div className="transaction">
                <b className="target">◎</b>
                <b>Target</b>
                <small>Shopping · Seattle, WA</small>
                <strong>−$86.23</strong>
              </div>
              <div className="micro result">
                ✓ MERCHANT VERIFIED
                <br />✓ LOCATION MATCHED
                <br />✓ CATEGORY CONFIRMED
              </div>
            </div>
            <h3>Enrich data in real time</h3>
            <p>
              Power every transaction in under 50 milliseconds to keep pace with
              your authorization flow.
            </p>
          </article>
          <article>
            <div className="feature-art orange">
              <div className="micro code">
                merchant: verified
                <br />
                risk_signal: trusted
                <br />
                location: matched
              </div>
              <div className="fraud">
                <span>▧</span>
                <b>
                  Transaction blocked
                  <br />
                  unnecessarily?
                </b>
                <a href="#enrichment">Improve your signal</a>
              </div>
            </div>
            <h3>Prevent fraud proactively</h3>
            <p>
              Detect anomalous activity before bad actors can complete a
              transaction.
            </p>
          </article>
          <article>
            <div className="feature-art cream">
              <div className="transaction">
                <b>▣ &nbsp; Verified intelligence</b>
                <small>One API. Every transaction.</small>
                <strong>✓</strong>
              </div>
            </div>
            <h3>Integrate with confidence</h3>
            <p>
              Consistent, structured data that works with your existing systems.
            </p>
          </article>
        </div>
      </section>
      <section className="quotes">
        <div className="quote-peek">
          <span className="micro">
            AUTHORIZATION
            <br />
            WITH CONFIDENCE
          </span>
          <strong>$0</strong>
        </div>
        <blockquote>
          <p className="micro">◉ MERCURY</p>
          <p>
            “When we can correctly identify the type of spend that’s happening
            at a company, we can set up rules to automatically categorize those
            transactions. This alone can save hours for our customers each
            month.”
          </p>
          <cite className="micro">MERCURY TEAM, TRANSACTION ENRICHMENT</cite>
          <strong>&gt;99%</strong>
        </blockquote>
        <blockquote className="quote-secondary">
          <p className="micro">◇ Sardine</p>
          <p>
            “We make Spade part of our customer experience — helping our
            customers make better decisions with fewer false positives and
            better protection.”
          </p>
        </blockquote>
      </section>
      <section className="wrap deployment-intro">
        <p className="eyebrow">TWO PATHS. ONE INTELLIGENCE PLATFORM.</p>
        <h2>
          Whether you’re enriching data directly or deploying Spade’s Agent to
          automate real-time decisioning, every authorization benefits from
          verified merchant intelligence.
        </h2>
      </section>
      <section className="enrichment" id="enrichment">
        <h2>
          Real-time enrichment.
          <br />
          Full control.
        </h2>
        <Tabs defaultValue="data" className="demo-tabs">
          <TabsList className="tab-list">
            <TabsTrigger value="data">Using Spade Data</TabsTrigger>
            <TabsTrigger value="platform">
              Using our intelligence platform
            </TabsTrigger>
          </TabsList>
          <TabsContent value="data">
            <div className="demo">
              <div className="transaction">
                <b className="juice">▧</b>
                <b>Joe & The Juice</b>
                <small>Food & beverage · New York, NY</small>
                <strong>−$24.96</strong>
              </div>
              <div className="demo-code micro">{`{
  "merchant": "Joe & The Juice",
  "category": "Food & Beverage",
  "confidence": 0.99
}`}</div>
            </div>
          </TabsContent>
          <TabsContent value="platform">
            <div className="demo">
              <div className="transaction">
                <b>✦ Spade Agent</b>
                <small>Merchant verified · Location confirmed</small>
                <strong>Approve ✓</strong>
              </div>
              <div className="demo-code micro">
                VERIFIED MERCHANT INTELLIGENCE
                <br />↓<br />
                YOUR POLICIES + REAL-TIME CONTEXT
                <br />↓<br />
                CONFIDENT AUTHORIZATION
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="benefits">
          {[
            [
              'CAPTURE LIVE TRANSACTION DATA',
              'Your authorization stream connects directly to Spade’s API in real time.',
            ],
            [
              'ADD STRUCTURE AND CONTEXT',
              'Merchant descriptions are standardized and matched with verified business intelligence.',
            ],
            [
              'RETURN ENRICHED INSIGHTS',
              'Data is returned instantly so you can make a decision with confidence.',
            ],
            [
              'ENABLE LOWER-LEVEL INTELLIGENCE',
              'Your team applies fraud rules, thresholds, or models using the enriched data.',
            ],
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="micro">• &nbsp;{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="agent wrap">
        <span className="micro agent-input">
          Buy me a pair of black sneakers in size 9 &nbsp; ↗
        </span>
        <div className="transaction floating">
          <b>▣ &nbsp; Nike</b>
          <small>Verified merchant · Apparel</small>
          <strong>−$87.56</strong>
        </div>
        <div className="agent-frame">
          <h2>
            Agentic commerce starts
            <br />
            with structured intelligence
          </h2>
          <p>
            Before AI agents can act, they need trusted data. Spade provides the
            structured merchant and location intelligence required for
            autonomous decisioning — powering the next generation of adaptive,
            agentic commerce.
          </p>
        </div>
        <div className="transaction agent-output">
          <b>▣ &nbsp; Nike</b>
          <small>✓ Verified purchase</small>
          <strong>$87.56</strong>
        </div>
      </section>
      <section className="industries" id="company">
        <div className="wrap industry-grid">
          <div>
            <p className="eyebrow">INDUSTRIES</p>
            <h2>
              Built for every layer
              <br />
              of modern finance
            </h2>
          </div>
          <a href={contact} className="industry fintech">
            <p className="micro">FINTECHS</p>
            <h2>
              Infrastructure for
              <br />
              innovation
            </h2>
            <p>
              Power new products, payments, and capabilities with a data
              foundation that scales.
            </p>
            <span className="micro">↗ LEARN MORE</span>
            <img src="/images/lock.png" alt="" loading="lazy" />
          </a>
          <a href={contact} className="industry banks">
            <p className="micro">BANKS</p>
            <h2>Clarity at enterprise scale</h2>
            <p>
              Verify authorizations, analyze, and act on real-world patterns.
            </p>
            <span className="micro">↗ LEARN MORE</span>
            <img src="/images/lock.png" alt="" loading="lazy" />
          </a>
        </div>
      </section>
      <section className="customers wrap" id="customers">
        <h2>
          Trusted by customers processing
          <br />
          $100B+ in payments each year
        </h2>
        <a className="micro" href="https://www.spade.com">
          ↗ See all case studies
        </a>
        <div className="stories">
          <a className="story mercury" href="https://www.spade.com">
            <span className="micro">◉ MERCURY</span>
            <div>
              <p className="micro">FINTECHS</p>
              <h3>
                How Mercury Scaled Financial Workflows with Transaction
                Enrichment
              </h3>
              <span className="micro">↗ Read more</span>
            </div>
          </a>
          <a className="story sardine" href="https://www.spade.com">
            <span className="story-brand">◇ Sardine</span>
            <div>
              <p className="micro">FINTECHS</p>
              <h3>
                How Sardine Uses Transaction Intelligence to Improve Real-Time
                Fraud Decisions
              </h3>
              <span className="micro">↗ Read more</span>
            </div>
          </a>
        </div>
      </section>
      <section className="more wrap">
        <h2>
          Why stop at risk
          <br />
          and authorization
        </h2>
        <div className="more-grid">
          {[
            [
              '▣',
              'REWARDS & AFFILIATION',
              'Connect every purchase to the right reward',
            ],
            ['◩', 'ANALYTICS & AI', 'Feed cleaner data into every model'],
            [
              '▤',
              'USER EXPERIENCE',
              'Turn transaction data into customer clarity',
            ],
          ].map(([icon, label, title]) => (
            <a href={contact} key={label}>
              <span>{icon}</span>
              <p className="micro">{label}</p>
              <h3>{title}</h3>
              <span className="micro">↗ LEARN MORE</span>
            </a>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer-cta">
          <h2>
            Add intelligence
            <br />
            to <em>every layer</em> of
            <br />
            your data
          </h2>
          <a className="button" href={contact}>
            Contact sales
          </a>
        </div>
        <div className="wrap footer-links">
          <div>
            <p className="micro">USE CASES</p>
            <a href="#solutions">Risk & Authorization</a>
            <a href="#solutions">Rewards & Affiliation</a>
            <a href="#solutions">Analytics & AI</a>
            <a href="#solutions">User Experience</a>
          </div>
          <div>
            <p className="micro">INDUSTRIES</p>
            <a href="#company">Fintechs</a>
            <a href="#company">Banks</a>
            <a href="#customers">Customer Stories</a>
          </div>
          <div>
            <p className="micro">COMPANY</p>
            <a href="https://www.spade.com">About</a>
            <a href="https://www.spade.com">Careers</a>
            <a href={contact}>Contact</a>
            <a href="https://www.spade.com/blog">Resources</a>
          </div>
          <div className="newsletter">
            <p className="micro">Stay up to date with Spade</p>
            <a href="https://www.spade.com/blog" className="newsletter-link">
              Explore the latest insights <span>↗</span>
            </a>
          </div>
        </div>
        <div className="wrap legal">
          <span className="logo">
            SPADE<sup>®</sup>
          </span>
          <span>
            © {new Date().getFullYear()} Spade &nbsp; · &nbsp; Reference
            recreation
          </span>
          <a href="https://www.spade.com">Visit Spade ↗</a>
        </div>
      </footer>
    </main>
  );
}
