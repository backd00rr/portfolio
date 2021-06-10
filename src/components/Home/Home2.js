import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Kendimi Tanıtayım
 </span>
            </h1>
            <p className="home-about-body">


              <i>
                <b className="purple"> Javascript and Python. </b> {" "} gibi klasiklerde akıcıyım,
              </i>
              <br />
              <br />
              İlgi alanlarım ağırlıklı olarak &nbsp;
              <i>
                <b className="purple">Web Teknolojileri ve Siber Güvenlik </b>
                <br>
                </br>
                Hobilerim ise;
                <b className="purple">
                  Yapay Zeka ve Görüntü İşleme.
                </b>
              </i>
              <br />
              <br />
              Zaman buldukça,
              <i>
                <b className="purple"> Modern Javascript Teknolojileri</b>
              </i>
              &nbsp; veya
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i> üzerinde kendimi geliştiririm.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <p>
              Herhangi birisini seçerek benimle iletişim kur<span className="purple"></span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
