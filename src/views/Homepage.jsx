import { useState } from "react";
import useFetch from "../hooks/useFetch";

// Homepage modificata per mostrare il funzionamento del custom hook useFetch.

export default function Homepage() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Homepage
      </h1>

      <div className="flex justify-center gap-4">
        <button
          className="btn btn-primary"
          onClick={() =>
            setUrl("https://jsonplaceholder.typicode.com/posts")
          }
        >
          Posts
        </button>

        <button
          className="btn btn-primary"
          onClick={() =>
            setUrl("https://jsonplaceholder.typicode.com/users")
          }
        >
          Users
        </button>
      </div>

      <ul className="mt-6 space-y-3">
        {data && data.map((element) => {
          return (
            <li
              key={element.id}
              className="rounded-lg bg-base-100 p-4 shadow"
            >
              {element.title || element.name}
            </li>
          );
        })}
      </ul>
    </main>
  );
}