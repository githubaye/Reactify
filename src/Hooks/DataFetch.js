import axios from "axios";
import React, { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";

const DataFetch = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    //Using Fetch

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));

    //Using Axios

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data.slice(0, limit))
      .then((data) => setPosts(data));
  }, [limit]);

  return (
    <>
      {posts.map((p) => {
        return <DataDisplay poster={p} />;
      })}

      {limit < 100 && (
        <button
          className="btn btn-warning"
          onClick={() => setLimit(limit + 20)}
        >
          Load More
        </button>
      )}

      {limit > 0 && (
        <button
          className="btn btn-warning"
          onClick={() => setLimit(limit - 20)}
        >
          Showless
        </button>
      )}
    </>
  );
};

export default DataFetch;
