import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Lista dei post
      </h1>

      <ul className="space-y-3">
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="flex items-center justify-between gap-4 rounded-lg bg-base-100 p-4 shadow"
            >
              <span>{post.title}</span>

              <Link
                to={`/posts/${post.id}`}
                className="btn btn-primary btn-sm"
              >
                Detail
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}