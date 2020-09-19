/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img
            alt="Logo"
            src="https://imnick.dev/content/images/2019/08/LogoMakr_5x4BsM-copy.png"
            height="30"
          />
        </a>
        <ul>
          <li>
            <a rel="noreferrer" target="_blank" href="https://imnick.dev">
              Blog
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="http://linkedin.com/in/nicklewanowicz"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/nicklewanowicz"
            >
              Github ↗
            </a>
          </li>
        </ul>
      </nav>
      <h1>
        I like to <u>build cool things</u> and <u>share them</u>.
      </h1>
      <p>
        Please reach out on{" "}
        <mark>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/imnickdev"
          >
            twitter
          </a>
        </mark>{" "}
        if you like anything here.
      </p>
    </header>
  );
}
