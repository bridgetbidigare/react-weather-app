import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div>
      <span class="footer">
        <a
          href="https://github.com/bridgetbidigare/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
          class="footerLinks"
        >
          open-source code
        </a>{" "}
        by bridget bidigare{" "}
        <a
          href="https://www.linkedin.com/in/bridget-bidigare/"
          target="_blank"
          rel="noopener noreferrer"
          class="footerLinks"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </span>
    </div>
  );
}
