import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import './course.css';

const courseMap = {
  Angular: Angular,
  Bootstrap5: Bootstrap5,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};
function Course({ courseName }) {
  console.log(courseName);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
