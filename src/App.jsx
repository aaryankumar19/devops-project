import React from 'react';
import { Github, ExternalLink, Rocket } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon-title">
          <div className="icon-circle">
            <Rocket size={24} color="#fff" />
          </div>
          <h1>React + Vite AWS Deployment</h1>
        </div>

        <p>
          This page demonstrates an automated deployment using a <strong>CI/CD pipeline</strong> powered by
          GitHub Actions and <strong>AWS S3 static website hosting</strong>.
        </p>

        <p>Go to my GitHub for more details:</p>

        <a
          className="github-button"
          href="https://github.com/aaryankumar19/devops-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span>GitHub</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

export default App;
