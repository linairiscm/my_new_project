import { useLoaderData } from "react-router";

export default function DetailView() {
  const post = useLoaderData();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-2xl">
            Detail page
          </h1>

          <h2 className="font-semibold">
            ID: {post.id}
          </h2>

          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      </div>
    </main>
  );
}