const overviewMarkup = `
  <div class="overview-grid">
    <article class="wave wave-2024">
      <p class="wave-source">RAND AIRS · Spring 2024</p>
      <p class="wave-value">23.5%</p>
      <p class="wave-description">used AI for instructional planning or teaching.</p>
      <ul class="wave-list">
        <li><strong>18.0%</strong><span>of AI planners used it weekly or more often.</span></li>
        <li><strong>16.0%</strong><span>of elementary-path teachers reported instructional use.</span></li>
        <li><strong>35.1%</strong><span>of high-school-path teachers reported instructional use.</span></li>
      </ul>
      <p class="wave-note">Public file: 9,126 cases. Adoption item valid n = 8,814.</p>
    </article>
    <article class="wave wave-2025">
      <p class="wave-source">Gallup-sponsored RAND ATP · Fall 2025</p>
      <p class="wave-value">68.9%</p>
      <p class="wave-description">reported using AI tools during the 2025-26 school year.</p>
      <ul class="wave-list">
        <li><strong>72.5%</strong><span>said AI makes teachers' jobs easier.</span></li>
        <li><strong>61.9%</strong><span>said AI makes students' learning harder.</span></li>
        <li><strong>12.5%</strong><span>reported clear-policy coverage.</span></li>
      </ul>
      <p class="wave-note">Public file: 2,012 cases. AI-use item valid n = 1,985.</p>
    </article>
    <article class="wave wave-2026">
      <p class="wave-source">Gallup-sponsored RAND ATP · Winter 2026</p>
      <p class="wave-value">12.8%</p>
      <p class="wave-description">reported both a student AI-use policy and very or extremely clear policy.</p>
      <ul class="wave-list">
        <li><strong>55.3%</strong><span>received any guidance for preparing to teach.</span></li>
        <li><strong>9.3%</strong><span>received formal written guidance for that task.</span></li>
        <li><strong>31.1%</strong><span>did not know whether a student AI-use policy existed.</span></li>
      </ul>
      <p class="wave-note">Public file: 2,069 cases. Valid denominators vary by item.</p>
    </article>
  </div>
`;

const gradeData = {
  2024: [
    ["Elementary", 16.0],
    ["Middle", 28.7],
    ["High", 35.1]
  ],
  2025: [
    ["Elementary", 63.1],
    ["Middle", 72.7],
    ["High", 74.4]
  ]
};

const guidanceData = [
  ["Preparing to teach", 55.3, 9.3],
  ["Worksheets and assignments", 52.8, 8.3],
  ["Assessments", 52.4, 9.1],
  ["Modifying materials", 50.9, 7.6],
  ["Grading and feedback", 42.5, 7.9],
  ["Student-facing supplementation", 42.5, 7.3],
  ["Analyzing learning data", 35.7, 5.9],
  ["One-on-one tutoring", 31.5, 4.9],
  ["Coaching on teaching", 29.1, 6.5]
];

function barRow(label, value, colorClass = "") {
  return `
    <div class="bar-row">
      <span class="bar-label">${label}</span>
      <span class="bar-track" aria-hidden="true"><span class="bar-fill ${colorClass}" style="width:${value}%"></span></span>
      <span class="bar-value">${value.toFixed(1)}%</span>
    </div>
  `;
}

function gradeMarkup() {
  return `
    <div class="comparison-view">
      <p class="chart-intro">
        Reported use rises by grade band within both surveys. Because the questions differ,
        the two columns should be read as parallel snapshots, not as percentage-point change.
      </p>
      <div class="comparison-grid">
        <section class="comparison-column">
          <h3>2024: instructional planning or teaching</h3>
          <p>RAND AIRS · valid responses within grade path</p>
          ${gradeData[2024].map(([label, value]) => barRow(label, value)).join("")}
        </section>
        <section class="comparison-column">
          <h3>2025: used AI tools in 2025-26</h3>
          <p>Gallup-sponsored RAND ATP · valid responses within grade band</p>
          ${gradeData[2025].map(([label, value]) => barRow(label, value, "red")).join("")}
        </section>
      </div>
    </div>
  `;
}

function guidanceMarkup() {
  return `
    <div class="guidance-view">
      <p class="chart-intro">
        Any guidance was substantially more common than formal written guidance for every
        instructional task measured in Winter 2026.
      </p>
      <div class="legend" aria-label="Chart legend">
        <span><i></i>Any guidance</span>
        <span><i class="formal-key"></i>Formal written guidance</span>
      </div>
      ${guidanceData.map(([label, anyGuidance, formalGuidance]) => `
        <div class="guidance-pair">
          <p>${label}</p>
          <div class="paired-bar">
            <span class="paired-track" aria-hidden="true"><span class="bar-fill" style="width:${anyGuidance}%"></span></span>
            <span class="bar-value">${anyGuidance.toFixed(1)}%</span>
          </div>
          <div class="paired-bar">
            <span class="paired-track" aria-hidden="true"><span class="bar-fill formal" style="width:${formalGuidance}%"></span></span>
            <span class="bar-value">${formalGuidance.toFixed(1)}%</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

const views = {
  overview: overviewMarkup,
  grade: gradeMarkup(),
  guidance: guidanceMarkup()
};

const chartPanel = document.querySelector("#chart-panel");
const tabs = [...document.querySelectorAll("[data-view]")];

function setView(viewName) {
  chartPanel.innerHTML = views[viewName];
  tabs.forEach((tab) => {
    const selected = tab.dataset.view === viewName;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    tabs[nextIndex].focus();
    setView(tabs[nextIndex].dataset.view);
  });
});

setView("overview");
