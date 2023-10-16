import { useState, useEffect } from 'react';
import './App.css';
import CasaRow from './CasaRow'

/*
const casasArray = [
  {
    "id": 1,
    "address": "12 Valley of Kings, Geneva",
    "country": "Switzerland",
    "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
    "price": 900000,
    "photo": "277667"
  },
  {
    "id": 2,
    "address": "89 Road of Forks, Bern",
    "country": "Switzerland",
    "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
    "price": 500000,
    "photo": "462358"
  },
  {
    "id": 3,
    "address": "Grote Hof 12, Amsterdam",
    "country": "The Netherlands",
    "description": "This house has been designed and built to an impeccable standard offering luxurious and elegant living. The accommodation is arranged over four floors comprising a large entrance hall, living room with tall sash windows, dining room, study and WC on the ground floor.",
    "price": 200500,
    "photo": "259600"
  },
  {
    "id": 4,
    "address": "Meel Kade 321, The Hague",
    "country": "The Netherlands",
    "description": "Discreetly situated a unique two storey period home enviably located on the corner of Krom Road and Recht Road offering seclusion and privacy. The house features a magnificent double height reception room with doors leading directly out onto a charming courtyard garden.",
    "price": 259500,
    "photo": "534182"
  },
  {
    "id": 5,
    "address": "Oude Gracht 32, Utrecht",
    "country": "The Netherlands",
    "description": "This luxurious three bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
    "price": 400500,
    "photo": "164558"
  }
];
*/

function App() {
  const [casas, setCasas] = useState([]);

  useEffect(() => {
    const consigueCasas= async () => {
      const response = await fetch("/api/casas.json"); //Peticion
      const casasJson = await response.json(); //Extraemos JSON
      console.log(casasJson)
      setCasas(casasJson.casas) //Cambiamos estado de casas
    }

    consigueCasas()
  });
 
  return (
    <>
      <div className="row mb-2">
        <h5>
          Casas del mercado
        </h5>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Direccion</th>
            <th>País</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {casas.map((h) => (
            <CasaRow key={h.id} casa={h} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
