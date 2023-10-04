import logo from './logo.svg';
import './App.css';
import Celda from './Celda';

function App() {
  return (
    <div className="container text-center" style={{ width: 340 }}>
      <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
        <div className="row bg-body-secondary borderInside ">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="lcdText text-danger pe-2 m-2 borderInsideS">10</div>
            <div className="align-self-center m-2 borderInsideS">
              <img src="acierto.png" style={{ width: 50 }} />
            </div>
            <div
              className="lcdText text-danger pe-2 m-2 borderInsideS"
              style={{ width: 54 }}
            >
              00
            </div>
          </div>
        </div>
        <div className="row borderInside bg-body-secondary text-center justify-content-center">
          <div className="col my- p-0">
            <div className="d-flex flex-wrap justify-content-center">
              <Celda valor="1"/>
              <Celda valor="2"/>
              <Celda/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
