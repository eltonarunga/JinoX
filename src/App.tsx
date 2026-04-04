export default function App() {
  return (
    <>
      {/* ====== COVER ====== */}
      <div className="cover">
        <div className="cover-noise"></div>
        <div className="cover-grid"></div>
        <div className="cover-accent"></div>
        <div className="cover-accent-2"></div>

        <div className="cover-top">
          <div className="cover-badge">Google.org Impact Challenge: AI for Science</div>
          <div className="cover-meta">Proposal · 2025 · Kenya</div>
        </div>

        <div className="cover-body">
          <div className="cover-eyebrow">AI for Health &amp; Life Sciences</div>
          <h1 className="cover-title">JinoX <em>AI</em></h1>
          <p className="cover-subtitle">
            A Multimodal Platform for Oral &amp; Craniofacial Discovery,<br />
            Simulation, and Precision Health — Beginning in Kenya
          </p>

          <div className="cover-tags">
            <span className="cover-tag active">Foundational AI Model</span>
            <span className="cover-tag active">Open Dataset</span>
            <span className="cover-tag active">Digital Twin</span>
            <span className="cover-tag">Genomics</span>
            <span className="cover-tag">Low-Resource Deployment</span>
            <span className="cover-tag">Climate–Health Intelligence</span>
          </div>

          <div className="cover-stat-row">
            <div className="cover-stat">
              <div className="cover-stat-num">3.5B</div>
              <div className="cover-stat-label">People with oral disease</div>
            </div>
            <div className="cover-stat">
              <div className="cover-stat-num">1:50k</div>
              <div className="cover-stat-label">Dentist ratio in Kenya</div>
            </div>
            <div className="cover-stat">
              <div className="cover-stat-num">$2M</div>
              <div className="cover-stat-label">Requested budget</div>
            </div>
            <div className="cover-stat">
              <div className="cover-stat-num">24mo</div>
              <div className="cover-stat-label">Implementation window</div>
            </div>
          </div>
        </div>

        <div className="cover-bottom">
          <div className="cover-org">Submitted to Google.org · AI for Science Open Call · $30M Global Grant</div>
          <div className="cover-org">Kenya · Africa-First · Open-Source</div>
        </div>
      </div>

      {/* ====== DOCUMENT BODY ====== */}
      <div className="doc">

        {/* ========== SECTION 1: EXECUTIVE SUMMARY ========== */}
        <div className="section-label">
          <span className="section-num">01</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Executive Summary</h2>

        <p>
          JinoX AI is an open, multimodal artificial intelligence platform designed to accelerate scientific discovery and measurably improve oral health outcomes — beginning in Kenya and scaling across Africa and the Global South.
        </p>

        <div className="callout">
          "Oral health is the most prevalent non-communicable disease domain on earth. It has no foundational AI model, no large-scale African dataset, and no integrated research infrastructure. JinoX builds all three."
        </div>

        <p>
          The platform integrates large-scale real-world multimodal datasets, foundational AI models trained on African clinical data, biological simulation via digital twins, and low-resource clinical deployment tools — forming a self-improving scientific and clinical intelligence system.
        </p>

        <p>
          JinoX is positioned at the intersection of two of Google.org's priority domains: <strong>AI for Health &amp; Life Sciences</strong> (oral disease genomics, precision diagnostics, microbiome modeling) and <strong>AI for Climate Resilience</strong> (climate-fluoride-disease correlation intelligence). It is open-source by design, enabling downstream use by researchers worldwide.
        </p>

        {/* ========== SECTION 2: PROBLEM STATEMENT ========== */}
        <div className="section-label">
          <span className="section-num">02</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>The Problem</h2>

        <div className="problem-grid">
          <div className="problem-cell">
            <div className="problem-cell-title">Global Scale</div>
            <div className="problem-stat">3.5B</div>
            <div className="problem-desc">People affected by oral diseases — the most prevalent non-communicable disease cluster globally, yet one of the least AI-resourced research domains.</div>
          </div>
          <div className="problem-cell">
            <div className="problem-cell-title">Research Gap</div>
            <div className="problem-stat">0</div>
            <div className="problem-desc">Publicly available foundational AI models trained on African oral health data. Global models reflect Western patient demographics and clinical contexts.</div>
          </div>
          <div className="problem-cell">
            <div className="problem-cell-title">Kenya Dentist Ratio</div>
            <div className="problem-stat">1:50k</div>
            <div className="problem-desc">One dentist per 50,000 people in Kenya vs. 1:1,500 globally recommended. AI-powered diagnostic tools are not a convenience — they are a necessity.</div>
          </div>
          <div className="problem-cell">
            <div className="problem-cell-title">Dataset Inequality</div>
            <div className="problem-stat">&lt;2%</div>
            <div className="problem-desc">Estimated proportion of global medical imaging datasets from Sub-Saharan Africa — creating systematic AI bias in any model applied to this population.</div>
          </div>
        </div>

        <h3>The Core Research Gap</h3>

        <p>
          There is no unified, AI-powered infrastructure for oral health research, prediction, and clinical deployment — particularly in low-resource settings. Existing tools are fragmented, proprietary, Western-centric, and disconnected from environmental or genomic context. This is not a marginal problem: the consequences include delayed diagnoses, preventable tooth loss, oral cancer missed at early stages, and systemic underinvestment in a disease burden that disproportionately affects the poorest populations.
        </p>

        <p>
          In Kenya specifically, fluorosis (from high-fluoride groundwater), advanced periodontitis driven by limited access to preventive care, and late-stage oral cancer detection represent three evidence-based, addressable scientific problems where AI-driven research could generate both new biological insights and clinical tools with immediate population impact.
        </p>

        {/* ========== KENYA CONTEXT ========== */}
        <div className="kenya-box">
          <div className="kenya-box-label">Kenya Context — Why Here, Why Now</div>
          <div className="kenya-box-title">The ideal proving ground for Africa-first AI science</div>
          <p>
            Kenya hosts a robust digital health infrastructure (M-Pesa interoperability, NHIF digitization, active telemedicine ecosystem), a growing cadre of clinical AI researchers at institutions including the University of Nairobi, Kenyatta National Hospital, and Aga Khan University Hospital, and an oral health burden that spans all three of Google.org's scientific interest areas: genomics (genetic susceptibility to caries and fluorosis), climate (fluoride-water-diet nexus), and life sciences (oral microbiome dynamics in Sub-Saharan populations).
          </p>
          <p>
            JinoX will anchor its initial dataset collection and clinical deployment network in Kenya before expanding to East Africa and the broader continent — creating an open infrastructure that future researchers can build upon.
          </p>
          <div className="kenya-facts">
            <div>
              <div className="kenya-fact-num">54M</div>
              <div className="kenya-fact-label">Kenya population — large, diverse, understudied</div>
            </div>
            <div>
              <div className="kenya-fact-num">47</div>
              <div className="kenya-fact-label">Counties — geographic &amp; environmental diversity for dataset breadth</div>
            </div>
            <div>
              <div className="kenya-fact-num">High</div>
              <div className="kenya-fact-label">Endemic fluorosis risk in Rift Valley — unique research signal</div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 3: SOLUTION ========== */}
        <div className="section-label">
          <span className="section-num">03</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Solution Architecture — Six Integrated Layers</h2>

        <p>
          JinoX AI is not a single model or application. It is a <strong>self-improving scientific system</strong> composed of six interdependent layers — each generating outputs that feed the next, creating compounding scientific value over time.
        </p>

        <div className="layers">
          <div className="layer-card" data-num="1">
            <div className="layer-icon-box">🗄️</div>
            <div className="layer-title">Pan-African Multimodal Dataset</div>
            <p className="layer-desc">Dental X-rays, intraoral images, clinical records, environmental data (fluoride, water quality, climate zone), and genomic markers collected across Kenyan counties and partner African institutions.</p>
            <div className="layer-outcome">→ Largest open oral health dataset in the Global South</div>
          </div>
          <div className="layer-card" data-num="2">
            <div className="layer-icon-box">🤖</div>
            <div className="layer-title">Foundational AI Model</div>
            <p className="layer-desc">A multimodal foundation model trained simultaneously on imaging, structured clinical data, environmental signals, and genetic markers — the first of its kind for oral health.</p>
            <div className="layer-outcome">→ Diagnosis · Risk prediction · Treatment recommendation</div>
          </div>
          <div className="layer-card" data-num="3">
            <div className="layer-icon-box">🧠</div>
            <div className="layer-title">Digital Twin Simulation Engine</div>
            <p className="layer-desc">Virtual models of oral cavity biology: tooth structure, gingival tissue, oral microbiome, and biochemical environment. Enables disease progression modeling and treatment simulation without patient risk.</p>
            <div className="layer-outcome">→ Hypothesis testing · Pre-clinical simulation</div>
          </div>
          <div className="layer-card" data-num="4">
            <div className="layer-icon-box">🧬</div>
            <div className="layer-title">Genetic Risk Prediction</div>
            <p className="layer-desc">AI-driven genomic analysis to identify susceptibility variants for dental caries, periodontal disease, fluorosis, and developmental anomalies — driving personalized prevention in Kenya's diverse ethnic populations.</p>
            <div className="layer-outcome">→ Precision oral health for African genomes</div>
          </div>
          <div className="layer-card" data-num="5">
            <div className="layer-icon-box">📱</div>
            <div className="layer-title">Low-Resource AI Diagnostics</div>
            <p className="layer-desc">On-device and low-bandwidth diagnostic tools deployable via smartphone cameras, designed for Community Health Promoters (CHPs), rural dispensaries, and mission hospitals across Kenya's 47 counties.</p>
            <div className="layer-outcome">→ Reaches the last mile of oral health access</div>
          </div>
          <div className="layer-card" data-num="6">
            <div className="layer-icon-box">🌍</div>
            <div className="layer-title">Climate–Health Intelligence</div>
            <p className="layer-desc">Integration of water quality (fluoride concentration), climate pattern data, and agricultural land use to model regional oral disease risk — connecting environmental science to clinical predictions at county level.</p>
            <div className="layer-outcome">→ Predictive disease mapping for public health planning</div>
          </div>
        </div>

        {/* ========== FLYWHEEL ========== */}
        <div className="flywheel">
          <div className="flywheel-title">The JinoX Self-Improving Flywheel</div>
          <div className="flywheel-steps">
            <div className="flywheel-step">
              <div className="flywheel-node highlight">Real-World Data</div>
              <div className="flywheel-arrow">→</div>
            </div>
            <div className="flywheel-step">
              <div className="flywheel-node">AI Model Training</div>
              <div className="flywheel-arrow">→</div>
            </div>
            <div className="flywheel-step">
              <div className="flywheel-node">Simulation &amp; Discovery</div>
              <div className="flywheel-arrow">→</div>
            </div>
            <div className="flywheel-step">
              <div className="flywheel-node">Validated Predictions</div>
              <div className="flywheel-arrow">→</div>
            </div>
            <div className="flywheel-step">
              <div className="flywheel-node">Clinical Deployment</div>
              <div className="flywheel-arrow">→</div>
            </div>
            <div className="flywheel-step">
              <div className="flywheel-node highlight">New Data</div>
            </div>
          </div>
          <p className="flywheel-desc">
            Each deployment generates new annotated clinical data. That data retrains the model. The simulation engine becomes more accurate. Predictions improve. This is a compounding scientific asset — not a one-time project.
          </p>
        </div>

        {/* ========== SECTION 4: SCIENTIFIC INNOVATION ========== */}
        <div className="section-label">
          <span className="section-num">04</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Scientific &amp; Technical Innovation</h2>

        <h3>AI Innovation</h3>
        <p>
          JinoX will train the world's first multimodal foundation model for oral health — a model that simultaneously processes radiographic imaging, structured clinical data, genomic sequences, and environmental signals. Existing oral health AI models are narrow, single-modality, and trained almost entirely on Western clinical datasets. JinoX will be trained on African patient data from the start, making it the only model that reflects the biological and environmental context of the continent's 1.4 billion people.
        </p>

        <h3>Biological Science</h3>
        <p>
          The digital twin simulation engine will create, for the first time, a computationally tractable virtual model of the oral cavity as a biological system — integrating tooth morphology, periodontal dynamics, salivary chemistry, and microbiome composition. This enables in-silico hypothesis testing that would otherwise require expensive or infeasible longitudinal clinical studies. Novel hypotheses about fluorosis pathways, caries progression under high-starch diets (prevalent in Kenya), and the role of the oral microbiome in systemic disease can be tested computationally before clinical validation.
        </p>

        <h3>Data Science &amp; Environmental Health</h3>
        <p>
          The integration of fluoride concentration data (drawn from Kenya's hydrogeological surveys and WRMA water quality reports), climate zone data, and oral disease outcomes is a methodologically novel research direction. No existing study has attempted to build a predictive AI model connecting environmental variables to oral disease outcomes at sub-county resolution across Sub-Saharan Africa. JinoX will produce this as an open dataset and a publishable scientific contribution.
        </p>

        <div className="callout callout-green">
          "JinoX does not apply existing AI to oral health. It builds the scientific infrastructure — the datasets, models, and simulation tools — that the field currently lacks entirely."
        </div>

        {/* ========== SECTION 5: IMPACT ========== */}
        <div className="section-label">
          <span className="section-num">05</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Expected Impact</h2>

        <table className="metrics">
          <thead>
            <tr>
              <th>Domain</th>
              <th>Impact Area</th>
              <th>18-Month Target</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dataset</td>
              <td>Annotated patient records, images, genomic + environmental data</td>
              <td className="metric-target">50,000+ records</td>
              <td className="metric-cat">Data Science</td>
            </tr>
            <tr>
              <td>AI Accuracy</td>
              <td>Diagnostic accuracy on internal validation set</td>
              <td className="metric-target">&gt;85% AUC</td>
              <td className="metric-cat">AI Science</td>
            </tr>
            <tr>
              <td>Publications</td>
              <td>Peer-reviewed scientific outputs from JinoX research</td>
              <td className="metric-target">6–10 papers</td>
              <td className="metric-cat">Science Output</td>
            </tr>
            <tr>
              <td>Clinical Deployment</td>
              <td>Kenyan facilities using JinoX diagnostic tools</td>
              <td className="metric-target">50+ facilities</td>
              <td className="metric-cat">Health Equity</td>
            </tr>
            <tr>
              <td>Patient Reach</td>
              <td>Patients screened using AI-assisted tools</td>
              <td className="metric-target">100,000+</td>
              <td className="metric-cat">Clinical Impact</td>
            </tr>
            <tr>
              <td>Open Access</td>
              <td>Researchers accessing open JinoX dataset + model via API</td>
              <td className="metric-target">200+ institutions</td>
              <td className="metric-cat">Scientific Commons</td>
            </tr>
            <tr>
              <td>Environmental</td>
              <td>Counties with fluorosis-climate risk maps generated</td>
              <td className="metric-target">20+ counties</td>
              <td className="metric-cat">Climate-Health</td>
            </tr>
          </tbody>
        </table>

        {/* ========== SECTION 6: ROADMAP ========== */}
        <div className="section-label">
          <span className="section-num">06</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Implementation Roadmap — 24 Months</h2>

        <div className="roadmap">
          <div className="phase-card">
            <div className="phase-period">Months 0–6</div>
            <div className="phase-name">Foundation</div>
            <ul className="phase-items">
              <li>Establish clinical partnerships: KNH, UoN Dental School, Aga Khan, county hospitals</li>
              <li>IRB ethics approval — Kenya and institutional</li>
              <li>Data collection protocol design and CHP training</li>
              <li>Baseline dataset: 10,000 annotated records</li>
              <li>Prototype classification models (caries, periodontitis)</li>
            </ul>
          </div>
          <div className="phase-card">
            <div className="phase-period">Months 6–12</div>
            <div className="phase-name">Model Build</div>
            <ul className="phase-items">
              <li>Scale dataset to 30,000+ records across 10 counties</li>
              <li>Train multimodal foundational model v1</li>
              <li>Launch smartphone diagnostic tool beta</li>
              <li>Begin fluoride-climate data integration</li>
              <li>First 3 peer-reviewed submissions</li>
            </ul>
          </div>
          <div className="phase-card">
            <div className="phase-period">Months 12–18</div>
            <div className="phase-name">Simulation</div>
            <ul className="phase-items">
              <li>Digital twin engine development and validation</li>
              <li>Genomic risk prediction module launch</li>
              <li>Rural facility deployment: 30+ sites</li>
              <li>Climate-health risk maps: 15 counties</li>
              <li>Open dataset v1 public release</li>
            </ul>
          </div>
          <div className="phase-card">
            <div className="phase-period">Months 18–24</div>
            <div className="phase-name">Scale &amp; Open</div>
            <ul className="phase-items">
              <li>System optimization and model iteration</li>
              <li>Open Research API launch for global access</li>
              <li>East Africa expansion: Uganda, Tanzania</li>
              <li>50+ facilities, 100k+ patients reached</li>
              <li>Sustainability model: academic licensing + NHIF integration pathway</li>
            </ul>
          </div>
        </div>

        {/* ========== SECTION 7: BUDGET ========== */}
        <div className="section-label">
          <span className="section-num">07</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Budget Overview — $2M (24 Months)</h2>

        <div className="budget-bars">
          <div className="budget-row">
            <div className="budget-label">Data Collection &amp; Partnerships</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '30%' }}></div></div>
            <div className="budget-pct">30% · $600k</div>
          </div>
          <div className="budget-row">
            <div className="budget-label">AI Model Development</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '25%' }}></div></div>
            <div className="budget-pct">25% · $500k</div>
          </div>
          <div className="budget-row">
            <div className="budget-label">Digital Twin Simulation</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '15%', background: 'var(--jade)' }}></div></div>
            <div className="budget-pct">15% · $300k</div>
          </div>
          <div className="budget-row">
            <div className="budget-label">Field Deployment &amp; Clinical Tools</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '15%', background: 'var(--jade)' }}></div></div>
            <div className="budget-pct">15% · $300k</div>
          </div>
          <div className="budget-row">
            <div className="budget-label">Cloud Infrastructure (Google Cloud)</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '10%', background: 'var(--gold)' }}></div></div>
            <div className="budget-pct">10% · $200k</div>
          </div>
          <div className="budget-row">
            <div className="budget-label">Operations &amp; Ethics Compliance</div>
            <div className="budget-track"><div className="budget-fill" style={{ width: '5%', background: 'var(--muted)' }}></div></div>
            <div className="budget-pct">5% · $100k</div>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
          The highest allocation to data collection reflects the primacy of building genuine African clinical data infrastructure — the foundational scientific contribution from which all other components derive their validity. Cloud infrastructure costs assume Google Cloud partnership and credit support.
        </p>

        {/* ========== SECTION 8: GOOGLE.ORG ALIGNMENT ========== */}
        <div className="section-label">
          <span className="section-num">08</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Alignment with Google.org Criteria</h2>

        <div className="align-grid">
          <div className="align-card">
            <div className="align-check">🔬</div>
            <div className="align-title">Scientific Ambition &amp; Impact</div>
            <p className="align-desc">JinoX pursues genuinely high-stakes research: the first African oral health foundational model, the first climate-oral disease correlation dataset, and the first oral digital twin. Each is a publishable, citable scientific contribution. Success metrics are quantifiable: dataset size, model AUC, publication count, patient reach.</p>
          </div>
          <div className="align-card">
            <div className="align-check">🤖</div>
            <div className="align-title">Innovative &amp; Responsible AI</div>
            <p className="align-desc">AI is the core scientific instrument, not a wrapper. The platform is fully open-source (Apache 2.0 licensed), compliant with Google's Responsible AI Principles, and designed to create a foundational open dataset — directly enabling future AI use cases by researchers globally. Bias mitigation is built into data collection protocol design.</p>
          </div>
          <div className="align-card">
            <div className="align-check">⚙️</div>
            <div className="align-title">Feasibility</div>
            <p className="align-desc">The team brings clinical expertise (dental surgery, CAD/CAM digital dentistry research), AI/ML engineering, and established relationships with Kenyan clinical institutions. The 24-month roadmap is phased and milestone-gated. Budget is grounded in actual Kenya data-collection costs (CHP training, equipment, IRB compliance).</p>
          </div>
          <div className="align-card">
            <div className="align-check">🌍</div>
            <div className="align-title">Scalability &amp; Sustainability</div>
            <p className="align-desc">The open Research API enables global researcher adoption beyond the grant period. The flywheel model (deployment → new data → better models) is self-sustaining scientifically. Sustainability pathways include academic licensing, NHIF integration, and expansion to East African partners who contribute data and share infrastructure costs.</p>
          </div>
        </div>

        {/* ========== SECTION 9: RESPONSIBLE AI ========== */}
        <div className="section-label">
          <span className="section-num">09</span>
          <div className="section-rule"></div>
          <span className="section-icon">⬛</span>
        </div>

        <h2>Responsible AI &amp; Ethics Framework</h2>

        <h3>Data Ethics</h3>
        <p>
          All data collection will operate under Kenya Medical Research Institute (KEMRI) ethical approval and institutional IRB clearance. Patient consent is informed, opt-in, and multilingual (Swahili, English, relevant county languages). Data is pseudonymised at point of collection with strict access control tiers.
        </p>

        <h3>Bias Mitigation</h3>
        <p>
          Dataset collection is stratified by county, age group, gender, and socioeconomic proxy to ensure representativeness across Kenya's demographic diversity. Model evaluation will include disaggregated performance metrics across these strata. No model will be deployed clinically until performance benchmarks are met across all demographic subgroups.
        </p>

        <h3>Clinical Oversight</h3>
        <p>
          JinoX diagnostic tools are designed as clinical decision support instruments — not autonomous diagnostic systems. Every AI output is presented as a probability score for clinician review. The system is designed in compliance with Kenya Medical Practitioners and Dentists Council (KMPDC) regulatory requirements.
        </p>

        <h3>Open Access</h3>
        <p>
          All models, code, and de-identified datasets will be released under open licenses. Scientific outputs will be submitted to open-access journals. The Research API will be free for academic and non-commercial use globally — maximising the scientific commons value of the grant.
        </p>

        {/* ========== VISION ========== */}
        <div className="vision">
          <div className="vision-eyebrow">Long-Term Vision</div>
          <div className="vision-title">
            "JinoX AI becomes the global intelligence layer for oral and craniofacial science — built in Africa, open to the world."
          </div>
          <p className="vision-subtitle">
            Future expansions include regenerative dentistry simulation, biomaterials discovery, integration with Kenya's broader digital health stack (SHA, formerly NHIF), and cross-disciplinary linkage with microbiome and systemic disease research — positioning oral health as a window into whole-body health intelligence.
          </p>
        </div>

      </div>

      {/* ====== FOOTER ====== */}
      <div className="footer">
        <div className="footer-brand">JinoX AI</div>
        <div className="footer-meta">
          Google.org Impact Challenge: AI for Science<br />
          AI for Health &amp; Life Sciences · AI for Climate Resilience<br />
          Kenya · Open-Source · 2025
        </div>
      </div>
    </>
  );
}
