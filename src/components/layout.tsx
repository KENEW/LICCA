import type { PropsWithChildren } from 'react'

//import { BackgroundGradient } from './background-gradient'
import { Footer } from './footer'
import { Header } from './header'

export function Layout({ children }: PropsWithChildren) {
  return (                                              
    <div className='background backgroundClass'>
      <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden">
        <Header />
        <main className="flex-shrink-0 contentCanvas items-center lg:flex">
          {children}
        </main>
        <Footer />
      </div>
    </div>
    
  )
}

//        <BackgroundGradient className="absolute top-0 bottom-0 left-1/2 ml-28 hidden w-1/2 lg:block" />
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/KNzmGpC/Center.png" alt="Center" border="0"></a>

//<a href="https://ibb.co/rFP24LN"><img src="https://i.ibb.co/5GDhBzw/image.png" alt="image" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/4Rcq0rS/Left.png" alt="Left" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/cykx4d8/Right.png" alt="Right" border="0"></a>

/*
   <div className='homeRightBottomArt'>
        <img src='public\images\Right_animal.png'>
        </img>
      </div>
           
      <div className='homeLeftBottomArt'>
        <img src='public\images\Left_animal.png'>
        </img>
      </div>
      */