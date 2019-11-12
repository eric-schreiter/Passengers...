import React, { useContext } from "react";

const PassengerContext = React.createContext(null);

function PassengerList() {
  const sumPassengers = 11;
  const { dispatch } = useContext(PassengerContext);

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: updatePassengers, passengers: sumPassengers })
        }
      >
        Passenger adden
      </button>
    </div>
  );
}

export default PassengerList;
