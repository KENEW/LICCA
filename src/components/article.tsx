import type { PropsWithChildren } from 'react'

export function Article({ children }: PropsWithChildren) {
  return (
    <article className="article text-center lg:w-full lg:text-left infoTitle padding:10px;">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative">{children}</div>
      </div>
    </article>
  )
}

export function ArticleContent({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className='contentBox boardText'>
      <div className="mx-auto">
        {title && (
          <div className='info'>
            {children}
          </div>
        )}


      </div>
    </div>
  )
}

export function ArticleMedia({ children }: PropsWithChildren) {
  return (
    <figure className="relative max-w-[40rem] py-10 lg:-right-10 lg:w-full lg:py-0">
      
    </figure>
  )
}

