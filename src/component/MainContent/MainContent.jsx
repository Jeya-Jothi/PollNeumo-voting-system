import { useEffect, useState } from "react";
import "./MainContent.css";

function MainContent() {
  const [options, setOptions] = useState([
    { id: 1, text: "Javascript", vote: 0 },
    { id: 2, text: "Python", vote: 0 },
    { id: 3, text: "Java", vote: 0 },
    { id: 4, text: "C++", vote: 0 },
  ]);
  const [selected, setSelected] = useState(null);
  // const [levelSelect, setLevelSelect] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);

  const submitVote = () => {
    console.log(selected); // 3 -> { id: 3, text: "Java", vote: 0 }

    if (!selected) {
      alert("Please select an option.");
      return;
    }

    const updateVotes = options.map((option) => {
      return option.id === selected
        ? { ...option, vote: option.vote + 1 }
        : option;
    });
    const voteArray = updateVotes.filter((option) => {
      return option.vote > 0;
    });
    console.log(voteArray);
    const array = voteArray.map((a) => {
      return a.vote;
    });
    console.log(array);
    const total = array.reduce((acc, num) => acc + num, 0);
    setTotalVotes(total);
    console.log(total);

    setOptions(updateVotes);
  };

  useEffect(() => {
    console.log(options);
  }, [options]);

  const resetButton = () => {
    const updateVotes = options.map((option) => {
      return { ...option, vote: 0 };
    });
    setOptions(updateVotes);
  };

  return (
    <div className="container">
      <div className="card">
        <div>
          <p className="card-head-txt">Poll System</p>
          <p className="ques-txt">What is your favorite programming?</p>
        </div>
        <div className="pro-btn-div">
          {options.map((option, index) => {
            return (
              <div className="btn" key={index}>
                <input
                  type="radio"
                  name="poll"
                  id={`option${option.id}`}
                  value={option.text}
                  onChange={() => setSelected(option.id)}
                />
                <label htmlFor={`option${option.id}`} className="poll-label">
                  {option.text}
                </label>
              </div>
            );
          })}
        </div>
        <div className="submit-div">
          <button onClick={submitVote}>Submit Vote</button>
          <button onClick={resetButton}>Reset</button>
        </div>
        <div className="result-div">
          {options.map((option, index) => {
            const percentage =
              totalVotes > 0 ? Math.round((option.vote / totalVotes) * 100) : 0;
            return (
              <div className="txt-level" key={index} id={option.id}>
                <p>{option.text}</p>
                <div className="total">
                  <div
                    className="level"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p>{percentage}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MainContent;
