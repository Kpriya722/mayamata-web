import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Home...</p>
    </Layout>
  )
}

export default IndexPage