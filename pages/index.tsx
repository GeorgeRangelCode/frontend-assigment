import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Content } from '../components/Content/Content'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  return (
    <div>
      <Layout>
        <main className="main">
          <Content />
        </main>

        <aside className="sidebar">
          <Aside />
        </aside>
      </Layout>
    </div>
  )
}

export default HomePage
