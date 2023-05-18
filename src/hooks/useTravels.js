import { useCallback, useEffect } from "react";
import { useState } from "react";
import travelLoader from "../data/travelsLoader";

const useTravels = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    travelLoader.init();
    setTravels(travelLoader.getItems());
  }, []);

  const addTravel = useCallback((newTravel) => {
    setTravels((previousTravels) => {
      const updated = previousTravels.concat(newTravel);

      return updated;
    });
  }, []);

  const removeTravel = useCallback((id) => {
    setTravels((previousTravels) => {
      const updated = previousTravels.filter((travel) => travel.id !== id);

      return updated;
    });
  }, []);

  const updateTravel = useCallback((id, updatedTravel) => {
    setTravels((previousTravels) => {
      const farmlandToUpdate = {
        ...previousTravels.find((travel) => travel.id === id),
        ...updatedTravel,
      };
      const updated = previousTravels.map((travel) =>
        travel.id === id ? farmlandToUpdate : travel
      );

      return updated;
    });
  }, []);

  return { travels, addTravel, removeTravel, updateTravel };
};

export default useTravels;
