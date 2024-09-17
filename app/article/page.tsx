"use client"

import ArticleCard from '@/components/ArticleCard'
import Button from '@/components/Button'
import { redirect } from 'next/dist/server/api-utils'
import React, { useEffect, useState } from 'react'

const ArticlePage = () => {
  
  // HOOKS
  // Je déclare une constance articles avec comme valeur un tableau vide []
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/article')
      const data = await response.json()
      setArticles(data)
    }

    fetchArticles()
  }, [])


  return (
    <>
        <h1 className='text-2xl font-bold uppercase m-5'>Titre du blog</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {/* Liste des articles */}
        {articles.map((article: any) => (
            // J'importe mon components ArticleCard en définissant la valeur de la propriété article avec l'objet article
            <ArticleCard article={article} />
          ))}
          </div>
    </>
  )
}

export default ArticlePage