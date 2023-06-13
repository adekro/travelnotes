export default (() => {
  const localStorageKeyName = "stagestrip";
  const getItems = () => {
    return JSON.parse(localStorage.getItem(localStorageKeyName) ?? null);
  };
  const storeItems = (stagestrip) => {
    localStorage.setItem(localStorageKeyName, JSON.stringify(stagestrip));
  };
  const init = async (travel_id) => {
    const response = await fetch(
      process.env.REACT_APP_SERVER_PHP + "getstagestrip/travel_id=" + travel_id
    );
    if (response.ok) {
      let json = await response.json();
      storeItems(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  return {
    getItems,
    storeItems,
    init,
  };
})();
