
import { useLoaderData } from "react-router";

export default function DetailView() {
  const post = useLoaderData();

  return (
    <>
      <h1>Detail page</h1>
      <h2>ID: {post.id}</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </>
  );
}
