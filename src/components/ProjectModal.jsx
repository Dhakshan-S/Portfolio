import React, { useEffect } from 'react';

const projectData = {
  'chit-funds-ecosystem': {
    title: 'Chit Funds (Auction & Fixed) Portal',
    category: 'QA & Project Handling',
    tags: ['Web & Mobile Testing', 'Admin Panel', 'Auction & Fixed Chit Funds', 'Financial Flows', 'Client Coordination'],
    image: '/assets/project_chitfunds.png',
    description: 'End-to-end quality assurance and client coordination for a financial chit fund platform supporting both Auction-based and Fixed-interest chit models. Ensured transaction accuracy, customer trust, and seamless backend tracking across web and mobile.',
    features: [
      'Tested the Admin Panel for manager approval cycles, dividend calculations, and member allocations',
      'Validated fixed and auction chit subscription flows on the customer Web Portal',
      'Conducted cross-platform testing of Android & iOS apps, checking push notifications, bid submissions, and payment receipts',
      'Led feature demonstrations for client stakeholders, gathered change requests, and verified fixes through to release'
    ],
    liveLink: '#',
    codeLink: '#'
  },
  'ramesh-traders-ecommerce': {
    title: 'Ramesh Traders Grocery Ecosystem',
    category: 'Quality Analysis',
    tags: ['Web & Mobile Testing', 'Admin Panel', 'Wholesaler & Salesman App', 'Delivery App', 'End-to-End QA'],
    image: '/assets/project_ramesh.png',
    description: 'A complete multi-platform e-commerce ecosystem for a supermarket grocery business. Led the end-to-end testing process, client demo coordination, and quality assurance across the entire product suite to guarantee smooth operational flows.',
    features: [
      'Tested the Web Customer Portal and Admin Panel for product inventory and order management',
      'Validated functional flows in the Wholesaler & Salesman mobile application for ordering and dispatching',
      'Conducted UI and real-time tracking validation for the Delivery Agent mobile application',
      'Interacted directly with clients to demonstrate new builds, gather feedback, and coordinate live releases'
    ],
    liveLink: '#',
    codeLink: '#'
  },
  'cni-business-forum': {
    title: 'CNI Business Forum',
    category: 'Quality Analysis',
    tags: ['Website Testing', 'Admin Panel', 'Mobile App Testing', 'Regression Testing', 'Cross-Browser Compatibility'],
    image: '/assets/project_cni.png',
    description: 'Conducted rigorous functional, regression, and cross-platform testing for the CNI Business Forum ecosystem. Ensured flawless performance across the member website, admin control center, and native Android & iOS mobile applications.',
    features: [
      'Validated member registrations, business matchmaking algorithms, and event booking modules on the Web Portal',
      'Tested Admin Panel for member verification workflows, event management, and content moderation tools',
      'Conducted exhaustive testing on Android and iOS mobile apps, verifying offline access, push notifications, and profile updates',
      'Created detailed bug reports, collaborated with developers for hotfixes, and conducted regression runs prior to release'
    ],
    liveLink: '#',
    codeLink: '#'
  },
  'star-business-forum': {
    title: 'Star Business Forum',
    category: 'Quality Analysis',
    tags: ['Web & Mobile Testing', 'Admin Panel', 'UI/UX Validation', 'Compatibility Testing', 'Performance Check'],
    image: '/assets/project_star.png',
    description: 'Managed complete Quality Assurance cycles for the Star Business Forum, verifying consistent UX across Web, Admin Panel, and Mobile clients. Focused heavily on high-concurrency event registration flows and payment integrations.',
    features: [
      'Executed responsive design and UI testing across multiple browser sizes and screen resolutions',
      'Verified admin metrics dashboards, notification dispatchers, and privilege authorization settings',
      'Conducted localization and compatibility checks on mobile apps to guarantee standard experiences on older operating systems',
      'Created test scenarios for membership subscriptions, forum chat rooms, and feedback submissions'
    ],
    liveLink: '#',
    codeLink: '#'
  },
  'lavenjal-water-ecommerce': {
    title: 'Lavenjal E-Commerce Ecosystem',
    category: 'Quality Analysis',
    tags: ['Mobile E-commerce', 'Admin Dashboard', 'Payment flow', 'Order Tracking', 'Functional Testing'],
    image: '/assets/project_lavenjal.png',
    description: 'Led end-to-end testing for Lavenjal, a specialized on-demand water can delivery e-commerce application. Certified secure transaction checkouts, real-time map tracking for deliveries, and quick order handling in the Admin Dashboard.',
    features: [
      'Validated cart management, subscription ordering options, and multi-gateway payment flows in the Customer App',
      'Tested the Admin Panel for dispatcher assignment algorithms, stock inventory alerts, and billing invoice generation',
      'Conducted latency and network transition testing for real-time driver navigation and order tracking status',
      'Performed smoke, usability, and boundaries/boundary-value testing on promo code and discount rules'
    ],
    liveLink: '#',
    codeLink: '#'
  },
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
