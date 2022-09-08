import * as React from "react";
import "../sass/main.css";

const Navbar = () => {
  return (
    <div class="navigation">
      <input
        type="checkbox"
        class="navigation__checkbox"
        id="nav-toggle"
      ></input>
      <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="/milan/" class="navigation__link">
              Home
            </a>
          </li>
          <li class="navigation__item">
            <a href="/milan/schedule" class="navigation__link">
              Schedule
            </a>
          </li>
          <li class="navigation__item">
            <a href="/milan/events" class="navigation__link">
              Events
            </a>
          </li>
          <li class="navigation__item">
            <a href="/milan/sponsors" class="navigation__link">
              Sponsors
            </a>
          </li>
          <li class="navigation__item">
            <a href="/milan/members" class="navigation__link">
              Team
            </a>
          </li>
          <li class="navigation__item">
            <a
              href="https://heyzine.com/flip-book/59f3755f85.html"
              class="navigation__link"
            >
              Rulebook
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
