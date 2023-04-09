import * as React from "react";
import GithubIcon from "../Icons/Github";
import InstagramIcon from "../Icons/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content is-size-5">
        <div className="mb3 text-center">
          Website by <p className="inline-flex fw7">Harrison Symes</p>
        </div>
        <div className="flex items-center justify-center mb2">
          Follow Grass-Fed on{" "}
          <a
            target="blank"
            href="https://www.instagram.com/grassfed_nz/"
            className="flex items-center ml1"
          >
            <InstagramIcon />
            Instagram
          </a>{" "}
        </div>
        <div className="flex items-center justify-center mb2">
          Check out the code on{" "}
          <a
            target="blank"
            href="https://github.com/harrison-symes/Grass-Fed"
            className="flex items-center ml1"
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
