import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_OPERATION, READ_OPERATION } from "../graphql/graphql";

const AddNew = () => {
  const [addNewRecord] = useMutation(ADD_OPERATION);
  const [wish, setwish] = React.useState("");

  let addRecord = (e) => {
    e.preventDefault();
    try {
      addNewRecord({
        variables: {
          wish: wish,
        },
        refetchQueries: [{ query: READ_OPERATION }],
      });
    } catch (err) {
      return <div>error</div>;
    }
  };
  const handleChange = (e) => {
    setwish(e.target.value);
  };
  let number = 0;
  console.log(number++)
  console.log(++number)
  console.log(number)
  return (
    <>
      <form onSubmit={(e) => addRecord(e)} id="to-do-form">
        <input className="input" onChange={handleChange} type="text" placeholder="Enter Wish" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddNew