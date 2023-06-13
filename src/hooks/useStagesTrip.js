import { useCallback, useEffect } from "react";
import { useState } from "react";
import stagestripLoader from "../data/stagestripLoader";

const useStagesTrip = () => {
  const [stagestrip, setStagesTrip] = useState([]);

  const reloadStagesTrip = useCallback(() => {
    setStagesTrip(stagestripLoader.getItems());
  }, []);

  return {
    stagestrip,
    reloadStagesTrip,
  };
};

export default useStagesTrip;
