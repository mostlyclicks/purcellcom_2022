import * as React from "react"
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="text-3xl font-bold">
          Welcome to Purcell Communications
        </h1>
        <p>
          Think of us as your “general contractor” for all of your marketing
          communication needs.
        </p>
        <p>
          As a business owner, you know you need to focus on marketing. But not
          everyone knows where to start. It’s easy to spend a lot of money
          without much return. We can help you be strategic and effective within
          your budget.
        </p>
      </main>
    </Layout>
  );
}

export default IndexPage
