
import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Lista dei post</h1>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title} - <Link to={`/posts/${post.id}`}>Detail</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
