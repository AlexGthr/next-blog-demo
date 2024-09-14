import { db } from '@/lib/db'
import React from 'react'

const ArticlePage = async () => {

  // Récupérer la liste des articles
  const articles =  await db.article.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>
        <h1 className='text-2xl font-bold uppercase m-5'>Titre du blog</h1>
        
        {/* Liste des articles */}
        {articles.map((article: any) => (
            <div>
              <h2 className='font-bold text-center'>{article.title}</h2>
              <p className='italic m-4'>{article.text}</p>
              <hr className='w-40 border-1 border-emerald-600 m-auto pb-8'/>
            </div>
          ))}
    </div>
  )
}

export default ArticlePage