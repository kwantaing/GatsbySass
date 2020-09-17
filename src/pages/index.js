import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone</h1>
    <p>Welcome to your Live Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/coffees">Go to all Coffees</Link> <br />
    <Link to="/main/">Go to Main</Link> <br />
    <Link to="/categories/"> Go to Coffee Types</Link> <br/>
  </Layout>
)

export default IndexPage
