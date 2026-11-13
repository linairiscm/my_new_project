
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  // Homepage modificata solo per mostrare il funzionamento del custom hook useFetch.
  
  return (
    <>
      <h1>Homepage</h1>

      <button
        onClick={() =>
          setUrl("https://jsonplaceholder.typicode.com/posts")
        }
      >
        Posts
      </button>

      <button
        onClick={() =>
          setUrl("https://jsonplaceholder.typicode.com/users")
        }
      >
        Users
      </button>

      <ul>
        {data && data.map((element) => {
          return (
            <li key={element.id}>
              {element.title || element.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
