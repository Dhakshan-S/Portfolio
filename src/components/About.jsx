import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '500+', label: 'Test Cases Run' },
    { number: '98%', label: 'Bug Detection Rate' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="ambient-glow-sphere glow-1"></div>
      <div className="ambient-glow-sphere glow-2"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">My Story</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-info">
            <h3>Who I Am</h3>
            <p className="about-text">
              I am a Quality Analyst and Software Tester with 1 year of experience ensuring software quality across web and mobile applications. I specialize in both functionality and UI testing, identifying bugs from positive and negative test scenarios while keeping the customer's perspective in mind.
            </p>
            <p className="about-text">
              In addition to my testing expertise, I have strong experience in client coordination. I handle projects end-to-end, interact directly with clients to demonstrate features, gather feedback, and coordinate necessary corrections until the project goes live.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Timeline Column */}
          <div className="about-skills-timeline">
            {/* Tab Buttons */}
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills & Stack
              </button>
              <button 
                className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                Experience
              </button>
            </div>

            {/* Tab Content: Skills */}
            {activeTab === 'skills' && (
              <div className="tab-content active">
                <div className="skills-category">
                  <h4>Manual Testing</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-arrows-spin"></i> SDLC & STLC</span>
                    <span className="skill-tag"><i className="fa-solid fa-puzzle-piece"></i> Functional, Integration & System Testing</span>
                    <span className="skill-tag"><i className="fa-solid fa-bug-slash"></i> Regression, Smoke & Adhoc Testing</span>
                    <span className="skill-tag"><i className="fa-solid fa-bug"></i> Bug Life Cycle</span>
                    <span className="skill-tag"><i className="fa-solid fa-list-check"></i> Test Cases & Scenarios</span>
                    <span className="skill-tag"><i className="fa-solid fa-triangle-exclamation"></i> Severity & Priority Analysis</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Automation Testing & Programming</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-square-check"></i> Selenium WebDriver</span>
                    <span className="skill-tag"><i className="fa-solid fa-sitemap"></i> WebDriver Architecture</span>
                    <span className="skill-tag"><i className="fa-solid fa-cubes"></i> Page Object Model (POM)</span>
                    <span className="skill-tag"><i className="fa-solid fa-crosshairs"></i> Locators & XPath</span>
                    <span className="skill-tag"><i className="fa-solid fa-flask"></i> TestNG Framework & Synchronization</span>
                    <span className="skill-tag"><i className="fa-brands fa-java"></i> Core Java (OOPs & Fundamentals)</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Business Analysis & Project Handling</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-diagram-project"></i> End-to-End Project Handling</span>
                    <span className="skill-tag"><i className="fa-solid fa-people-arrows"></i> Client Coordination & Demos</span>
                    <span className="skill-tag"><i className="fa-solid fa-circle-check"></i> Corrections & Feedback Management (Until Live)</span>
                    <span className="skill-tag"><i className="fa-solid fa-clipboard-question"></i> Requirements Gathering</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Database, Tools & IDEs</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-database"></i> SQL (Joins & Sub-queries)</span>
                    <span className="skill-tag"><i className="fa-solid fa-table-cells"></i> Database Normalization</span>
                    <span className="skill-tag"><i className="fa-solid fa-code"></i> DDL, DML, TCL, DCL, DQL Subsets</span>
                    <span className="skill-tag"><i className="fa-solid fa-server"></i> Oracle SQL*Plus</span>
                    <span className="skill-tag"><i className="fa-solid fa-laptop-code"></i> Eclipse IDE & EditPlus</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Agile & Delivery</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-calendar-check"></i> Sprint Planning & Reviews</span>
                    <span className="skill-tag"><i className="fa-solid fa-users"></i> Daily Scrum/Standup Meetings</span>
                    <span className="skill-tag"><i className="fa-solid fa-chart-line"></i> Sprint Retrospectives</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: Experience Timeline */}
            {activeTab === 'timeline' && (
              <div className="tab-content active">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">May 2025 - Present</span>
                    <h4 className="timeline-title">Quality Analyst (Software Testing)</h4>
                    <span className="timeline-company">Ocean Software Pvt. Ltd.</span>
                    <p className="timeline-desc">
                      Ensuring software quality through test planning, execution, defect reporting, and validation of business requirements. Conducted functionality and UI testing of web and mobile applications.
                    </p>
                    <p className="timeline-desc" style={{ marginTop: '8px' }}>
                      Managed end-to-end projects and client coordination, including demonstrating project features, gathering feedback, and coordinating corrections and updates until final approval and go-live.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
