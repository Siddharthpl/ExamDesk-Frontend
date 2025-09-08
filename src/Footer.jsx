import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-intro">
            <h1>Stay connected with me </h1>
          </div>

          <div className="footer-social">
            <div className="linkedin">
              <img
                src="https://i.postimg.cc/0ynccSBG/linkedin.gif"
                alt=""
                srcSet=""
              />

              <a
                href="https://www.linkedin.com/in/siddharth-pundir-267799250/"
                target="_blank"
              >
                <h1>
                  <span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                  Linkedin
                </h1>
              </a>
            </div>

            <div className="github">
              <img
                src="https://i.postimg.cc/yxWH8B3t/github.gif"
                alt=""
                srcSet=""
              />
              <a href="https://github.com/Siddharthpl" target="_blank">
                <h1>
                  <span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                  Github
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <h1>
            Developed and Designed By{" "}
            <a href="https://dev-ab.netlify.app/" target="_blank">
              Siddharth Pundir
            </a>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
