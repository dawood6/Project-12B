import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { READ_OPERATION, REMOVE_OPERATION } from "../graphql/graphql.js";
import "./main.css";
import AddNew  from "./AddNew";
import FlipMove from "react-flip-move";
import Loader from "./Loader";
import Header from './Header'

function Index() {
  const { loading, error, data } = useQuery(READ_OPERATION);
  const [removeRecord] = useMutation(REMOVE_OPERATION);
  let removeData = async (e) => {
    removeRecord({
      variables: {
        id: e,
      },
      refetchQueries: [{ query: READ_OPERATION }],
    });
  };
  if (loading) {
    return <Loader />;
  }
  console.log(data)
  console.log(error);
  if (error) {
    return <div>error hagh...</div>;
  }
  const listItems = data.read.map((d) => {
    return (
      <div>
      <div className="list" key={d.id}>
        <p>
          <input className="add" type="text" disabled value={d.wish} />
          <span>
            <span className="i" onClick={() => removeData(d.id)}>
              🗑️
            </span>
          </span>
        </p>
      </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
    <div className="App">
      <div>
        <h1 className="h1">Wish List</h1>
        <AddNew />
        <FlipMove duration={300} easing="ease-in-out">
          {listItems}
        </FlipMove>
      </div>
    </div>
    </div>
  );
}

export default Index