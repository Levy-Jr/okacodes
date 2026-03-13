import { PageTracker } from "@/lib/page-tracker"

const BlogPage = () => {
  return (
    <main className="min-h-screen grid place-content-center">
      <PageTracker
        eventName="ViewContent"
        contentName="Diretorio_Blog"
        contentCategory="Blog_Home"
      />
      <h1 className="text-2xl font-bold">Em desenvolvimento.</h1>
    </main>
  )
}

export default BlogPage