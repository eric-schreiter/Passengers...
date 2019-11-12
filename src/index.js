import React, { useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import PassengerList from "./PassengerList";

const PassengerContext = React.createContext(null);

const initialState = {
  passengers: null
};

const updatePassengers = "updatePassengers";

function reducer(state, action) {
  switch (action.type) {
    case updatePassengers:
      return {
        passengers: action.passengers
      };
    default:
      return initialState;
  }
}

function App() {
  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <PassengerContext.Provider value={{ user, dispatch }}>
        <PassengerList />
        {user.passengers && <h1>{user.passengers} Passagiere</h1>}
      </PassengerContext.Provider>
    </div>
  );
}

// function PassengerList() {
//   const sumPassengers = 11;
//   const { dispatch } = useContext(PassengerContext);

//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() =>
//           dispatch({ type: updatePassengers, passengers: sumPassengers })
//         }
//       >
//         Passenger adden
//       </button>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
