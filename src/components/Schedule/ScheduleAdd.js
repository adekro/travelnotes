import React from "react";
import { Button, Input } from "adekroui";
import InputList from "../Input/InputList";

const ScheduleAdd = ({ list, onClose, onSubmit }) => {
  const closehandler = () => {
    onClose();
  };
  const saveHandler = (evt) => {
    onSubmit(evt);
  };
  console.log("listaaaa", list);
  return (
    <div>
      <Button onClick={closehandler}>X</Button>
      <form onSubmit={saveHandler}>
        <InputList list={list} id="start" label="start" />
        <Input label="date" type="date" id="startdate" />
        <Input label="time" type="time" id="starttime" />
        <InputList list={list} id="arrive" label="arrive" />
        <Input label="time" type="time" id="arrivetime" />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
export default ScheduleAdd;
