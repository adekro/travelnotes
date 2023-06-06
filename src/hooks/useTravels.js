import { useCallback, useEffect } from "react";
import { useState } from "react";
import travelLoader from "../data/travelsLoader";

const useTravels = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    if (!travelLoader.getItems()) {
      travelLoader.init();
    }
    setTravels(travelLoader.getItems());
  }, []);

  const reloadTravel = useCallback(() => {
    setTravels(travelLoader.getItems());
  }, []);

  const addTravel = useCallback((newTravel) => {
    setTravels((previousTravels) => {
      const newFieldWithId = newTravel.id
        ? newTravel
        : { ...newTravel, id: `${new Date().getTime()}` };
      const updated = previousTravels.concat(newFieldWithId);

      travelLoader.storeItems(updated);

      return updated;
    });
  }, []);

  const addSchedule = useCallback((idTravel, newSchedule) => {
    setTravels((previousTravels) => {
      const newFieldWithId = newSchedule.id
        ? newSchedule
        : { ...newSchedule, id: `${new Date().getTime()}` };
      const updated = previousTravels
        .find((travel) => travel.id === idTravel)
        .trip.concat(newFieldWithId);

      travelLoader.storeItems(updated);

      return updated;
    });
  }, []);

  const removeTravel = useCallback((id) => {
    setTravels((previousTravels) => {
      const updated = previousTravels.filter((travel) => travel.id !== id);

      travelLoader.storeItems(updated);

      return updated;
    });
  }, []);

  const updateTravel = useCallback((id, updatedTravel) => {
    setTravels((previousTravels) => {
      const travelToUpdate = {
        ...previousTravels.find((travel) => travel.id === id),
        ...updatedTravel,
      };
      const updated = previousTravels.map((travel) =>
        travel.id === id ? travelToUpdate : travel
      );

      return updated;
    });
  }, []);

  return {
    travels,
    addTravel,
    addSchedule,
    removeTravel,
    updateTravel,
    reloadTravel,
  };
};

export default useTravels;
