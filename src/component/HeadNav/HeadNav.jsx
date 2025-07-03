import "./HeadNav.css";
function HeadNav(props) {
  function displayAbout() {
    if (props.aboutText === "About") {
      props.about();
    }
    if (props.aboutText === "Home") {
      props.main();
    }
  }
  function displayContact() {
    if (props.contactText === "Contact") {
      props.contact();
    }
    if (props.contactText === "Home") {
      props.main();
    }
  }
  return (
    <div className="heading">
      <div className="left-head">
        <img src="/images/logo.svg" alt="logo" className="logo-img" />
        <p className="head-txt">PollNeumo</p>
      </div>
      <div className="right-head">
        <p className="card" onClick={displayAbout}>
          {props.aboutText}
        </p>
        <p className="card" onClick={displayContact}>
          {props.contactText}
        </p>
      </div>
    </div>
  );
}
export default HeadNav;
