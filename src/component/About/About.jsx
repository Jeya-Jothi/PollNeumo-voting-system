import "./About.css";
import "../MainContent/MainContent.css";
function About() {
  return (
    <div className="container">
      <div className="card about-card">
        <div>
          <p className="about-txt">About</p>
        </div>
        <div>
          <p>
            PollNeumo is a modern, minimalistic voting system built with a soft
            neumorphism UI design. It allows users to vote for their favorite
            programming language in a visually engaging and user-friendly
            interface. This project combines elegant UI design with simple
            interactive logic to display live vote results as percentages with
            smooth progress bars.
          </p>
        </div>
        <div className="feature-div">
          <p className="card">
            1. Intuitive voting experience with neumorphic buttons1
          </p>
          <p className="card">
            2. Real-time percentage updates for each option
          </p>
          <p className="card">3. Clean, glassy card layout and soft shadows</p>
          <p className="card">
            4. Fully built with React and modern CSS styling
          </p>
        </div>
        <div>
          <p className="goal-txt">Goal</p>

          <p>
            The goal of this project is to explore the combination of React
            interactivity and neumorphism design — blending functionality with
            aesthetic. It's part of a UI/UX-driven journey in front-end
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
