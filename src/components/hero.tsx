import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import roadmapImg from '/public/images/KigurumiLiccaLogo.png';

import { NewsletterForm } from './newsletter-form'

type ScrollRevealRefElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLDivElement

export function Hero({
  content,
  illustration,
  title,
}: {
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values })
      }, 1000)
    })
  }

  return (
    <section className="text-center lg:w-full lg:py-20">
      <div className='homeLeftBottomArt'>
        <img src='public\images\CenterRight.png'>
        </img>
      </div>

      <div className="homeLogo">
        <img src={roadmapImg} />
      </div>

      <div className='homeLogoText'>
        <p>Hello, this is KIGURUMI, the first series of LICCA.</p>
        <p>Have a collection of cute animal pajamas.</p>
      </div>

    </section>
  )
}
//https://i.ibb.co/5RzyW6R/1.png
//<a href="https://ibb.co/Jsb4RKs"><img src="" alt="1" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload image</a><br />
//https://i.ibb.co/9bmGJ9t/Kigurumi-Licca-Logo.png
