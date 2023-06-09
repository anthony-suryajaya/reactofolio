import "./styles.css";
import { ChangeEventHandler } from "react";

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <label class="f">
        <input
          class="f__input"
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <span class="f__switch">
          <span class="f__handle">
            <span class="f__1"></span>
            <span class="f__2">
              <span class="f__2a"></span>
              <span class="f__2b"></span>
              <span class="f__2c"></span>
              <span class="f__2d"></span>
              <span class="f__2e"></span>
            </span>
            <span class="f__3"></span>
            <span class="f__4"></span>
            <span class="f__5"></span>
            <span class="f__6"></span>
            <span class="f__7"></span>
            <span class="f__8"></span>
            <span class="f__9"></span>
            <span class="f__10"></span>
            <span class="f__11"></span>
            <span class="f__12"></span>
            <span class="f__13"></span>
            <span class="f__14"></span>
            <span class="f__15"></span>
            <span class="f__16"></span>
            <span class="f__17"></span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkMode;