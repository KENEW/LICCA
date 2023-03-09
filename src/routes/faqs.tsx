import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Here is a list of frequently asked questions.</p>
          <details
            className="mt-4 block rounded-sm border px-4 hover:border-primary-300"
            open
          >
            <summary className="-mx-4 cursor-pointer border-primary-200 py-3 px-4">
              <u>Please tell me minting information?</u>
            </summary>

            <div className='faqContentText'>
              <p>
                Total suply : 999 items
              </p>
              <p>
                Chain : Ethereum
              </p>
              <p>
                Price(WL/PB) : 0.0039eth / 0.0059eth
              </p>
              <p>
                Buy number(WL/PB) : 3x / 5x
              </p>
            </div>

          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              <u>How can I use Holly?</u>
            </summary>
            <div className='faqContentText'>
              <p>
                Holly is licensed under the MIT License, which means you can use
                it for personal and commercial projects for free.
              </p>
              <p>
                You can also modify Holly to your needs, but you can't
                redistribute it or sell it as a template.
              </p>
            </div>


          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              <u>Is there a holder benefit?</u>
            </summary>
            <div className='faqContentText'>
              <p>
                Yes, If you have more than three NFTs of the KIGURUMI series, you will be air-dropped with rainbow star fragments. Something good will happen.
              </p>
            </div>

          </details>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
