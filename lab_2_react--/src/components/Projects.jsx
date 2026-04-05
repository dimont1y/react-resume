export default function Projects() {
  return (
    <div className="card">
      <div className="section-title">Academic Projects</div>
      <div className="item">
        <h3>Vulnerability &amp; Risk Analysis (ISO 27001)</h3>
        <p className="meta">Structured gap analysis and qualitative risk assessment</p>
        <ul>
          <li>Performed structured gap analysis for simulated enterprise environments.</li>
          <li>Proposed mitigation strategies aligned with international standards.</li>
        </ul>
      </div>
      <div className="item">
        <h3>Network Security Laboratories</h3>
        <p className="meta">Traffic analysis &amp; wireless security assessments</p>
        <ul>
          <li>Conducted WPA2/WPA3 security assessments in controlled lab environments.</li>
        </ul>
      </div>
      <div className="item">
        <h3>Secure Web Development</h3>
        <p className="meta">XSS, SQL Injection prevention &amp; secure session management</p>
        <ul>
          <li>Developed a web application focused on preventing common vulnerabilities.</li>
        </ul>
      </div>
    </div>
  );
}
