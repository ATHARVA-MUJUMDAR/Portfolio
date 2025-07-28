import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
const TextRotator = ({ texts, period = 5000 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingRef = useRef(null);

    useEffect(() => {
      const currentText = texts[textIndex];
      let typingSpeed = 500000; // Speed of typing effect
      let deletingSpeed = 1000; // Speed of deleting effect

      if (isDeleting) {
        typingSpeed = deletingSpeed;
      } else {
        typingSpeed = 100;
      }

      typingRef.current = setInterval(() => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
          if (displayedText.length === 0) {
            clearInterval(typingRef.current);
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setTimeout(() => {
              // Wait before starting to type the next text
              typingRef.current = setInterval(() => {
                setDisplayedText((prev) =>
                  texts[textIndex].slice(0, prev.length + 1)
                );
                if (displayedText.length === texts[textIndex].length) {
                  clearInterval(typingRef.current);
                  setIsDeleting(true);
                  setTimeout(() => {
                    // Wait before starting to delete
                  }, period / 2);
                }
              }, typingSpeed);
            }, period / 2); // Time to wait before deleting starts
          }
        } else {
          setDisplayedText((prev) =>
            texts[textIndex].slice(0, prev.length + 1)
          );
          if (displayedText.length === texts[textIndex].length) {
            clearInterval(typingRef.current);
            setIsDeleting(true);
            setTimeout(() => {
              // Wait before starting to delete
            }, period / 2);
          }
        }
      }, typingSpeed);

      return () => {
        clearInterval(typingRef.current);
      };
    }, [displayedText, isDeleting, textIndex, texts, period]);

    return <span className="txt-rotate">{displayedText}</span>;
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Atharva, a `}
                    <TextRotator
                      period={5000}
                      texts={["Web Developer", "Programmer", "UI/UX Designer"]}
                    />
                  </h1>
                  <p>
                    I am Atharva Mukul Mujumdar. I am a passionate programmer
                    and a MERN stack developer. This portfolio is my REACT
                    project and this can also be considered as my resume in the
                    form of a webpage.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
