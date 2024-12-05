import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Resources.css';

const resources = [
  {
    title: "AP Macroeconomics CED",
    link: "https://apcentral.collegeboard.org/pdf/ap-macroeconomics-course-and-exam-description.pdf",
    description: "AP® Macroeconomics Course and Exam Description"
  },
  {
    title: "AP Macro Exam Questions",
    link: "https://apcentral.collegeboard.org/courses/ap-macroeconomics/exam",
    description: "AP Macroeconomics Exam Questions – AP Central | College Board"
  },
  {
    title: "AP Microeconomics CED",
    link: "https://apcentral.collegeboard.org/pdf/ap-microeconomics-course-and-exam-description.pdf",
    description: "AP® Microeconomics Course and Exam Description, Effective Fall 2022"
  },
  {
    title: "AP Micro Exam Questions",
    link: "https://apcentral.collegeboard.org/courses/ap-microeconomics/exam",
    description: "AP Microeconomics Exam Questions – AP Central | College Board"
  },
  {
    title: "IB Econ HL Exam Questions",
    link: "https://www.example.com/DP_IB_Economics_HL_Exam_Questions_2020",
    description: "DP IB Economics: HL Exam Questions 2020"
  },
  {
    title: "2016 Honors Exam",
    link: "https://www.example.com/2016_honors_exam.pdf",
    description: "2016_honors_exam.pdf"
  },
  {
    title: "Columbia Uni Past Tests",
    link: "https://libguides.college.columbia.edu/economics/sample-tests",
    description: "Economics - Sample Tests - LibGuides at Columbia College (BC)"
  },
  {
    title: "Definite Integral Examples",
    link: "https://www.example.com/definite_integral_examples",
    description: "Definite Integral Calculus Examples, Integration - Basic Introduction, Practice Problems"
  },
  {
    title: "Derivative Rules",
    link: "https://www.example.com/derivative_rules",
    description: "Derivative Rules"
  }
];

const Resources = () => {
  return (
    <div className="resources-container">
      <h1 className="resources-title">Recommended Resources</h1>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <div className="resource-header">
              <h3 className="resource-header-title">{resource.title}</h3>
            </div>
            <div className="resource-content">
              <p className="resource-description">{resource.description}</p>
            </div>
            <div className="resource-footer">
              <button 
                className="resource-button"
                onClick={() => window.open(resource.link, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="button-icon" />
                Access Resource
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;