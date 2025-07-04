import { useState } from "react";
import "./App.css";
import HeadNav from "./component/HeadNav/HeadNav";
import MainContent from "./component/MainContent/MainContent";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

function App() {
  const [view, setView] = useState("main");
  const [aboutContent, setAboutContent] = useState("About");
  const [contactContent, setContactContent] = useState("Contact");
  const [animation, setAnimation] = useState(false);

  const switchToAbout = () => {
    setAboutContent("Home");
    setAnimation(true);
    setTimeout(() => {
      setView("about");
      setAnimation(false);
    }, 800);
  };

  const switchToMain = () => {
    setAboutContent("About");
    setContactContent("Contact");
    setAnimation(true);
    setTimeout(() => {
      setView("main");
      setAnimation(false);
    }, 800);
  };

  const switchToContact = () => {
    setContactContent("Home");
    setAnimation(true);
    setTimeout(() => {
      setView("contact");
      setAnimation(false);
    }, 800);
  };

  function check() {
    if (view === "main") {
      return <MainContent />;
    }
    if (view === "about") {
      return <About />;
    }
    if (view === "contact") {
      return <Contact />;
    }
  }

  return (
    <div className="App">
      <HeadNav
        about={switchToAbout}
        main={switchToMain}
        contact={switchToContact}
        aboutText={aboutContent}
        contactText={contactContent}
      />
      <div className={animation ? "fade-out-up" : "fade-in-up"}>{check()}</div>
      <div className="copyright-div">
        <p>{new Date().getFullYear()} © Jeya Jothi | All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
