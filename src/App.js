import "./App.css";

import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />

        <div className="row">
          <div className="col-sm-8">
            <footer>
              This app is coded by{" "}
              <a
                href="https://www.linkedin.com/in/kamogelo-m-4a9425298/"
                target="_blank"
                rel="noreferrer"
              >
                Kamogelo
              </a>{" "}
              and open-source on{" "}
              <a href="https://github.com/Kamogelo-MM/Awesome-React-Weather-App.git">
                Github
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
