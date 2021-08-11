import './App.css';
import ContactForm from './components/ContactForm';
import TitleCard from './components/TitleCard'



function App() {
  return (
    <>
      <TitleCard/>
      <div id="projects">
        <div className="flexWrapper">
          <div className="projectCard">
            Here are Nicole's projects.
          </div>
          <div className="right arrows">
              <span>{`>`}</span>
              <span>{`>`}</span>
              <span>{`>`}</span>
              <span>{`>`}</span>
              <span>{`>`}</span>
          </div>
        </div>
        <div className="flexWrapper">
          <div className="left arrows">
              <span>{`<`}</span>
              <span>{`<`}</span>
              <span>{`<`}</span>
              <span>{`<`}</span>
              <span>{`<`}</span>
          </div>
          <div className="projectCard">
            Here are Austin's projects. 
          </div>
        </div>
      </div>
      <h6>Built by Austin and Nicole</h6>
    </>
  );
}

export default App;
