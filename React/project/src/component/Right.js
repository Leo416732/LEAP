import "../style/global.css";
import "../style/right.css";
import Main from "./Main.jsx";

export default function rightSide() {
  return (
    <div class="right-side">
      <div class="main">
        <h1 class="main-title">Search Result</h1>
        <Main />
      </div>
      <div class="question"></div>
    </div>
  );
}
