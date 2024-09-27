"use client"

import Button from '@/components/Button'
import Tag from '@/components/Tag'
import { formatDate } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const ArticleDetailPage = ({ params }: {params: {articleId: string}}) => {

  const [article, setArticle] = useState<ArticleWithTagsAndComments | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/article/${params.articleId}`)
      const data: ArticleWithTagsAndComments = await response.json()
      setArticle(data)
    }

    fetchArticle();
  }, [params.articleId])

  return (
    <div>

      <h1>{ article?.title }</h1>

      <div className='flex'>
        {article?.tags.map((tagArticle: TagArticleType) => (
          <Tag key={tagArticle.tag.id} name={tagArticle.tag.name} />
        ))}
      </div>

      <p>{ article?.text }</p>

      <Button href="/article" label="Retour" />
    </div>
  )
}

export default ArticleDetailPage