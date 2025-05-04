import { LocationIcon } from './components/LocationIcon';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiUber } from 'react-icons/si';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <img 
          src="https://github.com/tyler-french.png" 
          alt="Tyler French" 
          className="profile-picture"
        />
        <div>
          <h1>Tyler D. French</h1>
          <div className="contact">
            <span className="location">
              <LocationIcon />
              Atlanta, GA
            </span>
            • french.tyler.d@gmail.com • U.S. Citizen • 
            <a href="https://github.com/tyler-french" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/tylerdfrench" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} download="Tyler_French_Resume.pdf" className="download-button">
        <FaDownload className="download-icon" />
        Download PDF
      </a>

      <div className="section">
        <h2>Work Experience</h2>
        <div className="item">
          <div className="logo-container">
            <img src={`${import.meta.env.BASE_URL}assets/uber.svg`} alt="Uber Logo" className="company-logo" />
          </div>
          <div className="item-content">
            <h3>Uber Technologies Inc. <span className="location-date">
              <span className="location">
                <LocationIcon />
                New York, NY
              </span>
              <span className="date">Aug 2023 – Present</span>
            </span></h3>
            <div className="job-title">Sr. Software Engineer / Developer Platform & Infrastructure <span className="location-date">
              <span className="date">Aug 2023 – Present</span>
            </span></div>
            <div className="job-title">Software Engineer II <span className="location-date">
              <span className="date">Feb 2022 – Aug 2023</span>
            </span></div>
            <div className="job-title">Software Engineer I <span className="location-date">
              <span className="date">Feb 2021 – Feb 2022</span>
            </span></div>
            <ul>
              <li>Led build infrastructure for Uber's monorepos (~1M files, 10K+ commits/week), driving Bazel upgrades and CI modernization</li>
              <li>Migrated 300+ Go libraries into the monorepo, integrating millions of lines of build files</li>
              <li>Redesigned components for library safety initiative, boosting usage 40x after a major incident</li>
              <li>Eliminated all orphaned code via ownership enforcement and metadata checks</li>
              <li>Led Remote Build Execution (RBE) implementation and tuning</li>
              <li>Maintainer of Gazelle and rules_go; Bazelcon 2024 speaker</li>
              <li>Modernized CI with dynamic steps; created intelligent build probe alerts</li>
              <li>Designed Uber's change management system for AI-generated changes and refactors</li>
              <li>Built a company-wide greenkeeping system for dependency upgrades</li>
              <li>Founded DevPlat Ops Leads, revamped on-call policies and postmortem process</li>
              <li>Mentored 3 engineers, 2 interns; led 10+ trainings and 50+ technical interviews</li>
              <li>Jumped into critical incidents and infra issues, resolving bottlenecks and CI problems</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="logo-container">
            <img src={`${import.meta.env.BASE_URL}assets/uber.svg`} alt="Uber ATG Logo" className="company-logo" />
          </div>
          <div className="item-content">
            <h3>Uber ATG (acquired by Aurora) <span className="location-date">
              <span className="location">
                <LocationIcon />
                Remote
              </span>
              <span className="date">May 2020 – Aug 2020</span>
            </span></h3>
            <div className="job-title">Scenario Systems and Data Science Intern <span className="location-date">
              <span className="date">May 2020 – Aug 2020</span>
            </span></div>
            <ul>
              <li>Built automated vehicle simulation pipeline and log analysis tools in Python</li>
              <li>Applied shallow learning and statistics to identify critical road situations</li>
              <li>Created interactive dashboard for analyzing historical autonomous vehicle data</li>
              <li>Trained 6 engineers on data-mining tooling and testing optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="item">
          <div className="logo-container">
            <img src={`${import.meta.env.BASE_URL}assets/gt.png`} alt="Georgia Tech Logo" className="school-logo" />
          </div>
          <div className="item-content">
            <h3>Georgia Institute of Technology, College of Engineering <span className="location-date">
              <span className="location">
                <LocationIcon />
                Atlanta, GA
              </span>
              <span className="date">Dec 2020</span>
            </span></h3>
            <div>Bachelor of Science in Electrical Engineering, with Highest Honors <span className="location-date">
              <span className="date">Dec 2020</span>
            </span></div>
            <div>GPA: 4.00</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Skills & Interests</h2>
        <div className="skills">
          <div className="skill-group">
            <strong>Languages:</strong><br />Go, Python, SQL, C/C++
          </div>
          <div className="skill-group">
            <strong>Systems & Tooling:</strong><br />Infrastructure, DevOps, CI/CD, Containers, Service Design, Databases
          </div>
          <div className="skill-group">
            <strong>AI & Data:</strong><br />Machine Learning, AI, Data Analysis, Visualization, Dashboards
          </div>
          <div className="skill-group">
            <strong>Math & Theory:</strong><br />Statistics, Calculus, Linear Algebra
          </div>
          <div className="skill-group">
            <strong>Creative Interests:</strong><br />Graphic Design, Music Production, Oil Painting
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
