import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '500+', label: 'Test Cases Run' },
    { number: '98%', label: 'Bug Detection Rate' },
  ];

  return (
    <section id="about" className="about-section">
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
              I am a Quality Analyst and Business Analyst with a passion for software quality assurance, automated test frameworks, and requirement modeling. I specialize in aligning business demands with software verification strategies, mapping test coverage, and establishing continuous integration testing loops.
            </p>
            <p className="about-text">
              My expertise lies in analyzing business requirements, mapping user journeys, designing comprehensive test documentation, and implementing automation engines to ensure secure, bug-free, and accessible deployments.
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
                  <h4>Quality Assurance & Testing</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-square-check"></i> Playwright / Cypress</span>
                    <span className="skill-tag"><i className="fa-solid fa-gears"></i> Postman / API Testing</span>
                    <span className="skill-tag"><i className="fa-solid fa-bug"></i> Regression / Integration</span>
                    <span className="skill-tag"><i className="fa-solid fa-list-check"></i> Test Case Documentation</span>
                    <span className="skill-tag"><i className="fa-solid fa-vial"></i> Selenium Webdriver</span>
                    <span className="skill-tag"><i className="fa-solid fa-clipboard-list"></i> UAT / Manual Testing</span>
                  </div>
                </div>
                
                <div className="skills-category">
                  <h4>Business Analysis & Frameworks</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-solid fa-sitemap"></i> BPMN / Process Mapping</span>
                    <span className="skill-tag"><i className="fa-solid fa-comments"></i> Requirements Gathering</span>
                    <span className="skill-tag"><i className="fa-solid fa-rectangle-list"></i> User Stories / Jira</span>
                    <span className="skill-tag"><i className="fa-solid fa-diagram-project"></i> UML Flowcharts</span>
                    <span className="skill-tag"><i className="fa-solid fa-bolt"></i> Agile / Scrum / Kanban</span>
                    <span className="skill-tag"><i className="fa-solid fa-book"></i> Confluence / Visio</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Automation & Environments</h4>
                  <div className="skills-tags">
                    <span className="skill-tag"><i className="fa-brands fa-js"></i> JavaScript / Node.js</span>
                    <span className="skill-tag"><i className="fa-brands fa-python"></i> Python / SQL</span>
                    <span className="skill-tag"><i className="fa-solid fa-terminal"></i> CI/CD / GitHub Actions</span>
                    <span className="skill-tag"><i className="fa-brands fa-git-alt"></i> Git / Version Control</span>
                    <span className="skill-tag"><i className="fa-brands fa-docker"></i> Docker Containers</span>
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
                    <span className="timeline-date">2024 - Present</span>
                    <h4 className="timeline-title">Lead QA & Business Systems Analyst</h4>
                    <span className="timeline-company">Centric QA Solutions</span>
                    <p className="timeline-desc">Gathered system requirements and managed end-to-end test pipelines. Designed custom automated regression tests in Playwright, decreasing manual validation efforts by 70%.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">2022 - 2024</span>
                    <h4 className="timeline-title">Quality Analyst & Systems Evaluator</h4>
                    <span className="timeline-company">Apex Enterprise Lab</span>
                    <p className="timeline-desc">Validated microservices APIs using Postman automation. Documented software requirements specifications (SRS) and process workflow maps for enterprise upgrades.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">2020 - 2022</span>
                    <h4 className="timeline-title">Associate Business Analyst Intern</h4>
                    <span className="timeline-company">Vanguard Tech</span>
                    <p className="timeline-desc">Conducted user interviews, gathered product feedback, translated requirements into user stories in Jira, and performed User Acceptance Testing (UAT).</p>
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
