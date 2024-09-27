import React, { FunctionComponent } from 'react'
import { formatDate } from '@/lib/utils'
import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
import Button from './Button'
import Tag from './Tag'
moment.locale('fr')

interface ArticleCardProps {
  article: ArticleWithTagsAndComments;
}

const ArticleCard:React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className='flex flex-col justify-around border border-slate-500 p-6 rounded-lg hover:bg-slate-700 ease-in duration-200 cursor-pointer group' key={article.id}>

    {/* Titre de l'article */}
    <div className='flex flex-col min-h-16'>
      <h2 className='font-bold text-center'>{article.title}</h2>

    {/* Durée de la sortie de l'article */}
      <p className='text-center text-xs'>{moment(article.createdAt).startOf('hour').fromNow()}</p>
      </div>

    {/* Tags de l'article */}
    <div className='flex items-center justify-center mt-2'>
      {article.tags.map((tagArticle) => (
        // <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 content-center group-hover:bg-pink-700 group-hover:text-white duration-300 ' key={tagArticle.tag.id}>
        //   {tagArticle.tag.name}
        // </span>
        <Tag key={tagArticle.tag.id} name={tagArticle.tag.name} />
      ))}
    </div>

    <div>
    {/* Texte de l'article */}
    <p className='italic m-6 text-justify text-slate-300 select-none line-clamp-3'>{article.text}</p>
    </div>

    <div>
      {/* Date de l'article */}
      <hr className='w-40 border-1 border-emerald-600 m-auto pb-8'/>
      <p className='mb-2'>Le {formatDate(article.createdAt)}</p>

      {/* Button voir plus */}
      <Button  href={`article/${article.id}`} label="Lire plus.."/>
    </div>
  </div>
  )
}

export default ArticleCard