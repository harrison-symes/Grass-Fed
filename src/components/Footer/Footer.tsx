import * as React from "react";
import GithubIcon from "../Icons/Github";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content is-size-5">
        <div className="mb3 text-center">
          Website by <p className="fw7">Harrison Symes</p>
        </div>
        <div className="flex items-center justify-center">
          Check out the code on{" "}
          <a
            target="blank"
            href="https://github.com/harrison-symes/Grass-Fed"
            className="flex items-center"
          >
            <GithubIcon />
            Github
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
