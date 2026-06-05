import React, { useState } from 'react';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'qa', label: 'Quality Analysis' },
    { id: 'ba', label: 'Business Analysis' },
    { id: 'api', label: 'Project Handling' },
  ];

  const projects = [
    {
      id: 'chit-funds-ecosystem',
      categories: ['qa', 'api'],
      categoryLabel: 'QA & Project Handling',
      title: 'Chit Funds (Auction & Fixed) Portal',
      excerpt: 'Comprehensive end-to-end quality assurance and client coordination for a financial chit fund ecosystem, testing the Admin Panel, customer Website, and Android/iOS Mobile Apps.',
      image: '/assets/project_chitfunds.png',
      tags: ['Admin Panel', 'Web & Mobile Testing', 'Financial Flow Testing', 'Client Demos'],
      codeLink: '#',
      type: 'live'
    },
    {
      id: 'ramesh-traders-ecommerce',
      category: 'qa',
      categoryLabel: 'Quality Analysis',
      title: 'Ramesh Traders Grocery Ecosystem',
      excerpt: 'Comprehensive quality assurance and functional testing for a multi-platform supermarket grocery e-commerce ecosystem, including the Customer Web Portal, Wholesaler App, and Delivery App.',
      image: '/assets/project_ramesh.png',
      tags: ['Admin Panel', 'Web & Mobile Testing', 'Functional Testing', 'UI Testing'],
      codeLink: '#',
      type: 'live'
    },
    {
      id: 'cni-business-forum',
      category: 'qa',
      categoryLabel: 'Quality Analysis',
      title: 'CNI Business Forum',
      excerpt: 'End-to-end quality analysis and functional testing for the CNI Business Forum platform, encompassing the Web Portal, Admin Panel, and Android/iOS Mobile Applications.',
      image: '/assets/project_cni.png',
      tags: ['Website Testing', 'Admin Panel', 'Mobile App Testing', 'Regression Testing'],
      codeLink: '#',
      type: 'live'
    },
    {
      id: 'star-business-forum',
      category: 'qa',
      categoryLabel: 'Quality Analysis',
      title: 'Star Business Forum',
      excerpt: 'Comprehensive quality assurance and UI/UX validation for the Star Business Forum ecosystem, certifying the Customer Website, Management Admin Panel, and Mobile Apps.',
      image: '/assets/project_star.png',
      tags: ['Web & Mobile Testing', 'Admin Panel', 'UI/UX Validation', 'Compatibility Testing'],
      codeLink: '#',
      type: 'live'
    },
    {
      id: 'lavenjal-water-ecommerce',
      category: 'qa',
      categoryLabel: 'Quality Analysis',
      title: 'Lavenjal E-Commerce Ecosystem',
      excerpt: 'Quality assurance and business flow verification for the Lavenjal water can selling e-commerce platform, validating the Mobile Ordering App and Central Admin Dashboard.',
      image: '/assets/project_lavenjal.png',
      tags: ['Mobile E-commerce', 'Admin Dashboard', 'Payment flow', 'Order Tracking'],
      codeLink: '#',
      type: 'live'
    },
    {
      id: 'qa-automation-framework',
      category: 'qa',
      categoryLabel: 'Quality Analysis',
      title: 'Enterprise QA Automation Suite',
      excerpt: 'A scalable end-to-end regression and system test suite built in Playwright, executing parallel tests across multiple browser layers with HTML reports generation.',
      image: '/assets/project_dashboard.png',
      tags: ['Playwright', 'JavaScript', 'GitHub Actions', 'CI/CD'],
      codeLink: 'https://github.com/example/qa-automation',
      type: 'github'
    },
    {
      id: 'ba-process-optimization',
      category: 'ba',
      categoryLabel: 'Business Analysis',
      title: 'B2B Platform Process Optimization',
      excerpt: 'A complete business analysis project mapping as-is vs to-be workflows, designing BPMN processes, and documenting SRS requirements for a supply chain upgrade.',
      image: '/assets/project_spatial.png',
      tags: ['BPMN 2.0', 'Jira / Confluence', 'SRS', 'UML'],
      codeLink: 'https://example.com/ba-optimization',
      type: 'live'
    },
    {
      id: 'api-performance-suite',
      category: 'api',
      categoryLabel: 'Project Handling',
      title: 'Payment Gateway API Quality Suite',
      excerpt: 'A custom automated integration and performance testing suite built in Postman and Newman, verifying API contract compliance and SLA limits.',
      image: '/assets/project_finance.png',
      tags: ['Postman', 'Newman', 'REST API', 'JavaScript'],
      codeLink: 'https://github.com/example/api-testing',
      type: 'github'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || (p.categories && p.categories.includes(filter)));

  return (
    <section id="projects" className="projects-section">
      <div className="ambient-glow-sphere glow-1"></div>
      <div className="ambient-glow-sphere glow-2"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">My Works</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
        </div>

        {/* Projects Filter Buttons */}
        <div className="projects-filter">
          {filterTabs.map((tab) => (
            <button 
              key={tab.id}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animation: 'fadeIn 0.4s ease forwards' }}
            >
              <div 
                className="project-img-container" 
                onClick={() => onSelectProject(project.id)}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <span className="project-view-btn">
                    <i className="fa-solid fa-expand"></i> View Details
                  </span>
                </div>
              </div>
              
              <div className="project-info">
                <span className="project-category">{project.categoryLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-excerpt">{project.excerpt}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <button 
                    className="btn-text" 
                    onClick={() => onSelectProject(project.id)}
                  >
                    Case Study <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-icon-link"
                    aria-label={project.type === 'github' ? "Github code repo" : "Live preview"}
                  >
                    {project.type === 'github' ? (
                      <i className="fa-brands fa-github"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
