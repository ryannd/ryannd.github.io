import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text text-red-500 text-4xl text-center">ERROR: NOT FOUND</h1>
      <a className="text text-red-500 text-4xl text-center mt-4" href="/">{`<<< `}</a>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
