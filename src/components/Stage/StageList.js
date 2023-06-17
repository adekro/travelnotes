import { Button, Card, Input } from "adekroui";
import React, { useEffect, useState } from "react";
import { postData } from "../../lib/api";
const StageList = () => {
  const [stage, setStage] = useState(null);
  const [formdati, setFormDati] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_PHP + "getstages")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("HTTP-Error: " + response.status);
        }
      })
      .then((data) => {
        setStage(data);
      });
  }, []);

  const newStagehandler = () => {
    setFormDati(true);
  };
  const saveHandler = (evt) => {
    evt.preventDefault();
    console.log(evt);

    const name = document.getElementById("name").value;
    const cover = document.getElementById("cover").value;
    const coordinates = document.getElementById("coordinates").value;

    const response = postData(process.env.REACT_APP_SERVER_PHP + "poststages", {
      id: 0,
      name: name,
      cover: cover,
      coordinates: coordinates,
    });
    //setFormDati(false);
  };

  return (
    <>
      <Button onClick={newStagehandler}>New Stage</Button>
      {stage &&
        !formdati &&
        stage.map((item) => {
          return <Card>{item.name}</Card>;
        })}
      {formdati && (
        <Card>
          <form onSubmit={saveHandler}>
            <Input label="name" id="name" />
            <Input label="cover" id="cover" />
            <Input label="coordinates" id="coordinates" />
            <Button type="submit">Save</Button>
          </form>
        </Card>
      )}
    </>
  );
};
export default StageList;
