export default (() => {
  const localStorageKeyName = "stages";
  const getItems = () => {
    return JSON.parse(localStorage.getItem(localStorageKeyName) ?? null);
  };
  const storeItems = (stages) => {
    localStorage.setItem(localStorageKeyName, JSON.stringify(stages));
  };
  const init = async () => {
    const response = await fetch(
      process.env.REACT_APP_SERVER_PHP + "getstages/"
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
