import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>          
        </div>
      </section>
      <div className="container">
        <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione ut soluta. Numquam vitae ullam laboriosam, omnis perferendis, quas beatae expedita velit fugiat vero rem excepturi debitis, ut sequi voluptas?"
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap5}
              title="Bootstrap5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione ut soluta. Numquam vitae ullam laboriosam, omnis perferendis, quas beatae expedita velit fugiat vero rem excepturi debitis, ut sequi voluptas?"
            />
          </div>
          <div className="column">
            <Course
              image={Ccsharp}
              title="Komple Web"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione ut soluta. Numquam vitae ullam laboriosam, omnis perferendis, quas beatae expedita velit fugiat vero rem excepturi debitis, ut sequi voluptas?"
            />
          </div>
          <div className="column">
            <Course
              image={KompleWeb}
              title="Front-End"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione ut soluta. Numquam vitae ullam laboriosam, omnis perferendis, quas beatae expedita velit fugiat vero rem excepturi debitis, ut sequi voluptas?"
            />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
