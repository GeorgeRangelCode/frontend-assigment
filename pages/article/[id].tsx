import React from 'react'
import { useRouter } from 'next/router'

const ArticlePage = () => {
  const { query } = useRouter()

  return (
    <section>
      <h1>Página Artículo: {query.id}</h1>
    </section>
  )
}

export default ArticlePage
