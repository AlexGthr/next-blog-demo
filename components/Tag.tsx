import React from 'react'

interface TagProps {
    name: string;
}

const Tag:React.FC<TagProps> = ( { name } ) => {
  return (
    <div>
        <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 content-center group-hover:bg-green-700 group-hover:text-white duration-300 '>
            { name }
        </span>
    </div>
  )
}

export default Tag