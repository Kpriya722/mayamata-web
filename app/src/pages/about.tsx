import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.scss"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
          <p>About US</p>
        </Layout>
      )
 }

 export default AboutPage
