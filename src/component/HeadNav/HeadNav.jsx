import "./HeadNav.css";
function HeadNav() {
  return (
    <div className="heading">
      <div className="left-head">
        <img src="/images/logo.svg" alt="logo" className="logo-img" />
        <p className="head-txt">PollNeumo</p>
      </div>
      <div className="right-head">
        <p className="card">About</p>
        <p className="card">Contact</p>
      </div>
    </div>
  );
}
export default HeadNav;
