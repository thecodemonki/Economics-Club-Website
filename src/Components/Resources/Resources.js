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
    title: "IB Economics HL Questionbank",
    link: "https://dl.ibdocs.re/IB%20QUESTIONBANKS/6.%20Sixth%20Edition%20-%20Group%204%202025/questionbank/en/teachers/ibdocs2/questionbanks/48-dp-economics/syllabus_sections.html",
    description: "DP IB Economics: HL exam questionbank"
  },
  {
    title: "IB Economics HL Textbook",
    link: "https://static1.squarespace.com/static/5e1db2db7fbc921eae5c733f/t/64085c6247b33408fa32810f/1678269544721/ib-academy.nl+Economics+HL.pdf",
    description: "Condensed IB HL Economics textbook"
  },
  {
    title: "Harvard Honours Exams",
    link: "https://www.economics.harvard.edu/files/economics/files/2016_honors_exam.pdf",
    description: "Past Exam from Harvard University"
  },
  {
    title: "UBC Economics Exam",
    link: "https://econ101.sites.olt.ubc.ca/exams/",
    description: "Past Exams from UBC"
  },
  {
    title: "Econ + Dal",
    link: "https://www.econplusdal.com/",
    description: "Videos from a IB & A Level Economics teacher"
  },
  {
    title: "Columbia College Practice Exams",
    link: "https://columbiacollege-ca.libguides.com/sampletests",
    description: "Past papers from Columbia College"
  },
  {
    title: "AP Calc AB: Definite Integral Practice",
    link: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
    description: "Definite Integral Calculus Examples, Integration - Basic Introduction, Practice Problems"
  },
  {
    title: "AP Calc AB: Derivative Rules",
    link: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new",
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