import React, { useEffect } from 'react';

const projectData = {
  'qa-automation-framework': {
    title: 'Enterprise QA Automation Suite',
    category: 'QA Automation',
    tags: ['Playwright', 'JavaScript', 'GitHub Actions', 'CI/CD', 'Allure Reports'],
    image: '/assets/project_dashboard.png',
    description: 'A robust and scalable end-to-end regression and system integration testing framework engineered for enterprise portals. Implements page object models (POM), parallel test executors, and dynamic reporting mechanisms executing automatically on Git merges.',
    features: [
      'Comprehensive Page Object Model (POM) architecture',
      'Automated visual comparison testing pipelines using Playwright screenshot diffs',
      'Parallel test scheduling on GitHub Actions, cutting pipeline run times by 65%',
      'Interactive test reporting leveraging Allure and custom HTML artifacts'
    ],
    liveLink: 'https://example.com/qa-suite',
    codeLink: 'https://github.com/example/qa-automation'
  },
  'ba-process-optimization': {
    title: 'B2B Platform Process Optimization',
    category: 'Business Analysis',
    tags: ['BPMN 2.0', 'Jira / Confluence', 'SRS', 'UML Flowcharts', 'Agile Delivery'],
    image: '/assets/project_spatial.png',
    description: 'A comprehensive consulting and systems modeling project that optimized product delivery cycles. This project involved mapping existing complex supply chain operations into BPMN flows, identifying bottlenecks, and compiling detailed Software Requirements Specifications (SRS).',
    features: [
      'Visual process workflows constructed using BPMN 2.0 notation',
      'Functional and non-functional requirements compiled in standard SRS templates',
      'User journey charts and UML diagrams designed for engineer alignment',
      'Backlog management structuring with custom epic configurations in Jira'
    ],
    liveLink: 'https://example.com/ba-case-study',
    codeLink: 'https://example.com/ba-optimization'
  },
  'api-performance-suite': {
    title: 'Payment Gateway API Quality Suite',
    category: 'API Testing',
    tags: ['Postman', 'Newman', 'REST API', 'JavaScript', 'Newman Reporter'],
    image: '/assets/project_finance.png',
    description: 'An automated testing framework mapping out API integration dependencies for financial transaction modules. It checks compliance constraints, contract validations, and executes heavy concurrency loads to identify latency spikes and database lockouts.',
    features: [
      'Automated integration collection tests written in Postman sandbox',
      'Performance concurrency tests leveraging custom script parameters',
      'Continuous quality reports compiled using Newman CLI execution in build actions',
      'Detailed API documentation containing mock request/response pairs'
    ],
    liveLink: 'https://example.com/api-suite',
    codeLink: 'https://github.com/example/api-testing'
  }
};

export default function ProjectModal({ projectId, isOpen, onClose }) {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectId) return null;

  const data = projectData[projectId];
  if (!data) return null;

  return (
    <div 
      className="modal-overlay open" 
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close modal window"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-body">
          <div className="modal-img-container">
            <img src={data.image} alt={data.title} className="modal-img" />
          </div>
          <div className="modal-content">
            <span className="modal-category">{data.category}</span>
            <h3 className="modal-title">{data.title}</h3>
            
            <div className="modal-tags">
              {data.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            
            <div className="modal-description">{data.description}</div>
            
            <div className="modal-features-section">
              <h4>Key Features:</h4>
              <ul className="modal-features">
                {data.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-actions">
              <a 
                href={data.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a 
                href={data.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
