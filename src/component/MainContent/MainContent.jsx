import "./MainContent.css";

function MainContent() {
  return (
    <div className="container">
      <div className="card">
        <div>
          <p className="card-head-txt">Poll System</p>
          <p className="ques-txt">What is your favorite programming?</p>
        </div>
        <div className="pro-btn-div">
          <button>JavaScript</button>
          <button>Python</button>
          <button>Java</button>
          <button>C++</button>
        </div>
        <div className="submit-div">
          <button>Submit Vote</button>
        </div>
        <div className="result-div">
          <div className="txt-level">
            <p>JavaScript</p>
            <div className="total">
              <div className="level"></div>
            </div>
            <p>%</p>
          </div>

          <div className="txt-level">
            <p>Python</p>
            <div className="total">
              <div className="level"></div>
            </div>
            <p>%</p>
          </div>

          <div className="txt-level">
            <p>Java</p>
            <div className="total">
              <div className="level"></div>
            </div>
            <p>%</p>
          </div>

          <div className="txt-level">
            <p>C++</p>
            <div className="total">
              <div className="level"></div>
            </div>
            <p>%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
