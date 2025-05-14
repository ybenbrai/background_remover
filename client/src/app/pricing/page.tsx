export default function PricingPage() {
  return (
    <div
      className="text-center"
      style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
        Pricing
      </h1>
      <p
        style={{
          color: "var(--brand-secondary)",
          fontSize: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        Simple, transparent pricing. No hidden fees.
      </p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        {/* Free Plan */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 16px #0001",
            padding: "2rem 1.5rem",
            minWidth: 260,
            flex: "1 1 260px",
          }}
        >
          <h2 style={{ color: "var(--brand-primary)" }}>Free</h2>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0" }}>
            $0
          </div>
          <ul style={{ textAlign: "left", margin: "1rem 0", color: "#334155" }}>
            <li>✔ 3 images/month</li>
            <li>✔ Standard quality</li>
            <li>✔ No signup required</li>
            <li>✖ API access</li>
            <li>✖ Priority support</li>
          </ul>
          <a href="/signup" className="btn" style={{ width: "100%" }}>
            Get Started
          </a>
        </div>
        {/* Pro Plan */}
        <div
          style={{
            background: "var(--brand-secondary)",
            color: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 24px #6366f133",
            padding: "2rem 1.5rem",
            minWidth: 260,
            flex: "1 1 260px",
            border: "2px solid var(--brand-accent)",
          }}
        >
          <h2 style={{ color: "var(--brand-accent)" }}>Pro</h2>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0" }}>
            $9<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span>
          </div>
          <ul style={{ textAlign: "left", margin: "1rem 0", color: "#e0e7ef" }}>
            <li>✔ 100 images/month</li>
            <li>✔ High quality cutouts</li>
            <li>✔ API access</li>
            <li>✔ Commercial use</li>
            <li>✔ Priority support</li>
          </ul>
          <a
            href="/signup"
            className="btn"
            style={{
              width: "100%",
              background: "var(--brand-accent)",
              color: "var(--brand-text)",
            }}
          >
            Start Pro
          </a>
        </div>
        {/* Enterprise Plan */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 16px #0001",
            padding: "2rem 1.5rem",
            minWidth: 260,
            flex: "1 1 260px",
          }}
        >
          <h2 style={{ color: "var(--brand-primary)" }}>Enterprise</h2>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0" }}>
            Custom
          </div>
          <ul style={{ textAlign: "left", margin: "1rem 0", color: "#334155" }}>
            <li>✔ Unlimited images</li>
            <li>✔ Highest quality</li>
            <li>✔ Dedicated API & support</li>
            <li>✔ SLA & custom features</li>
            <li>✔ Team management</li>
          </ul>
          <a href="/contact" className="btn" style={{ width: "100%" }}>
            Contact Sales
          </a>
        </div>
      </div>
      {/* Comparison Table */}
      <div style={{ overflowX: "auto", margin: "2rem 0" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 1px 8px #0001",
          }}
        >
          <thead>
            <tr style={{ background: "var(--brand-bg)" }}>
              <th
                style={{ padding: "1rem", fontWeight: 700, textAlign: "left" }}
              >
                Features
              </th>
              <th style={{ padding: "1rem", fontWeight: 700 }}>Free</th>
              <th style={{ padding: "1rem", fontWeight: 700 }}>Pro</th>
              <th style={{ padding: "1rem", fontWeight: 700 }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>
                Monthly Images
              </td>
              <td>3</td>
              <td>100</td>
              <td>Unlimited</td>
            </tr>
            <tr style={{ background: "var(--brand-bg)" }}>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>Quality</td>
              <td>Standard</td>
              <td>High</td>
              <td>Highest</td>
            </tr>
            <tr>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>
                API Access
              </td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr style={{ background: "var(--brand-bg)" }}>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>
                Commercial Use
              </td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>Support</td>
              <td>Community</td>
              <td>Priority</td>
              <td>Dedicated</td>
            </tr>
            <tr style={{ background: "var(--brand-bg)" }}>
              <td style={{ padding: "0.75rem", textAlign: "left" }}>
                Team Management
              </td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <a
          href="/signup"
          className="btn"
          style={{ fontSize: "1.2rem", padding: "1rem 2.5rem" }}
        >
          Get Started for Free
        </a>
      </div>
    </div>
  );
}
