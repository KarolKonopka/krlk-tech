import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">Home</h1>
        <p className="text-xl mt-0 text-neutral-700 dark:text-neutral-200">
          Welcome to my website!
        </p>
      <hr className="my-4" />
      {allPosts.map((post) => (
        <article className="pb-4" key={post._id}>
          <Link href={post.slug}>
            <h2 className="my-0">{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
