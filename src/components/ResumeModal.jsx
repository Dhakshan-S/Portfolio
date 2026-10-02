import React, { useState } from 'react';
import {
  X,
  Download,
  FileText,
  ExternalLink,
  Eye,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Wrench
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'sheet'

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const resumeSkills = [
    {
      category: "Manual Testing",
      skills: "SDLC, STLC, Functional, Integration, System, Regression, Smoke, Adhoc, Bug Life Cycle, Test Cases, Test Scenarios, Severity, Priority."
    },
    {
      category: "API Testing",
      skills: "Postman, API Validation, Request & Response Testing, Status Code Validation."
    },
    {
      category: "Automation Testing",
      skills: "Playwright (AI-assisted prompt-based testing), Selenium WebDriver (Basic Knowledge), TestNG, XPath, Page Object Model."
    },
    {
      category: "Defect Management",
      skills: "Bug Reporting and Tracking using Jira & Excel, Defect Analysis, Retesting."
    },
    {
      category: "Database",
      skills: "SQL (Joins, Sub Query, Normalization, DDL, DML, TCL, DCL, DQL)."
    },
    {
      category: "Business Analysis",
      skills: "Requirement Gathering, Requirement Analysis, Client Communication, User Story Understanding."
    },
    {
      category: "Agile Methodology",
      skills: "Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective."
    },
    {
      category: "AI Tools",
      skills: "AI-assisted Test Case Generation, Prompt-based Test Automation, Test Scenario Generation."
    }
  ];

  const experiencePoints = [
    "Independently handled testing activities across 25+ projects, covering web and mobile applications.",
    "Managed 5 end-to-end projects independently, including requirement gathering, project coordination, testing, and client demonstrations.",
    "Executed Manual, Functional, UI, Integration, Regression, and API testing using Postman across 25+ projects, identifying release-blocking defects and validating fixes before deployment.",
    "Designed and executed positive and negative test cases to validate business requirements and application functionality.",
    "Identified, documented and tracked defects using Excel-based reports, collaborating closely with developers to resolve critical and high-priority issues within project timelines.",
    "Worked closely with clients to gather requirements and acted as a liaison between clients and the development team.",
    "Verified bug fixes, performed retesting, and ensured quality releases before deployment.",
    "Participated in requirement analysis, test planning, test execution, and quality assurance activities throughout the Software Development Life Cycle (SDLC)."
  ];

  const resumeProjects = [
    {
      title: "Business Networking Platforms – Star Business Forum, Trusted Network & CNI",
      points: [
        "Tested business networking platforms designed to help businesses connect, build professional relationships, share business opportunities, and grow their network.",
        "Tested business profiles, networking, posts, connections, referrals, and user interactions.",
        "Performed Functional, UI, Regression & Integration Testing across web and mobile-responsive platforms.",
        "Validated end-to-end business workflows, identified defects, and verified fixes before release."
      ]
    },
    {
      title: "E-commerce Applications – Web & Mobile",
      points: [
        "Performed end-to-end testing for 20+ e-commerce applications across diverse business domains.",
        "Tested Web, Android & iOS platforms with mobile/tablet responsiveness.",
        "Validated Razorpay & PhonePe payment integrations using positive and negative scenarios.",
        "Performed Functional, UI, Regression, Responsive & Cross-Browser Testing.",
        "Identified defects, tracked issues, and verified fixes before release."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-5xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left flex flex-col h-[92vh]">

        {/* Header */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Dhakshan S — Resume
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-mono font-normal">
                  Updated
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs font-mono text-slate-400">
                Software Tester | QA Analyst • 1.5 Years Experience
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 text-xs">
              <button
                onClick={() => setViewMode('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-medium ${
                  viewMode === 'pdf'
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setViewMode('sheet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-medium ${
                  viewMode === 'sheet'
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </button>
            </div>

            {/* External link to PDF */}
            <a
              href="/Dhakshan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors hidden md:flex items-center gap-1 text-xs"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-[11px]">Open Tab</span>
            </a>

            {/* Download Button */}
            <a
              href="/Dhakshan-Resume.pdf"
              download="Dhakshan-Resume.pdf"
              onClick={handleDownload}
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md shadow-teal-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-hidden bg-[#0A0E17] flex flex-col">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src="/Dhakshan-Resume.pdf#toolbar=1&navpanes=0"
                className="w-full h-full border-0 bg-slate-900"
                title="Dhakshan S Resume PDF"
              />
            </div>
          ) : (
            <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto font-sans">
              {/* Header Block */}
              <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-wide">{personalDetails.name}</h1>
                  <p className="text-base sm:text-lg font-bold text-teal-400 mt-0.5">{personalDetails.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{personalDetails.location}</p>
                </div>
                <div className="space-y-1.5 text-xs font-mono text-slate-300">
                  <div><span className="text-slate-500">Email:</span> <a href={`mailto:${personalDetails.email}`} className="text-teal-400 hover:underline">{personalDetails.email}</a></div>
                  <div><span className="text-slate-500">Mobile:</span> <a href={`tel:${personalDetails.phone}`} className="hover:text-white">{personalDetails.phone}</a></div>
                  <div><span className="text-slate-500">LinkedIn:</span> <a href="https://linkedin.com/in/dhakshan-s" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">linkedin.com/in/dhakshan-s</a></div>
                </div>
              </div>

              {/* Career Objective */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  Career Objective
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Quality Analyst with 1.5 years of experience in Manual Testing, API Testing, Functional Testing, and
                  Business Analysis. Experienced in handling end-to-end testing activities for web and mobile applications,
                  requirement analysis, client communication, and defect management. Seeking a challenging position to
                  leverage my testing skills and contribute to delivering high-quality software solutions.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-teal-400" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {resumeSkills.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="font-bold text-teal-300 font-mono text-[11px] block mb-1">
                        ● {item.category}:
                      </span>
                      <span className="text-slate-300 text-[11px] leading-relaxed">
                        {item.skills}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                  Professional Experience
                </h2>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white text-xs sm:text-sm gap-1">
                    <span className="text-teal-300">SOFTWARE TESTING (QA) & BUSINESS ANALYST</span>
                    <span className="font-mono text-slate-400 text-xs">Ocean Softwares Pvt Ltd | May 2025 – Present</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {experiencePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 shrink-0">●</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
                  <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />
                  Projects
                </h2>
                <div className="space-y-3">
                  {resumeProjects.map((proj, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <h3 className="text-xs sm:text-sm font-bold text-cyan-300">
                        {proj.title}
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {proj.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5 shrink-0">●</span>
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                  Education
                </h2>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-1">
                  <span><strong>B.E. Computer Science and Engineering</strong> | Kingston Engineering College</span>
                  <span className="font-mono text-teal-400">CGPA: 8.01 | 2024</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs">Document: Dhakshan-Resume.pdf • Official QA Analyst Resume</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors text-xs font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
