import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="SNEAK-PIC">
        <img src='public\images\SneakPicList.png' className="sneakPic"/>

          <div className='infoBox boardText'>
            <p>
              <u>LICCA supplies 999 KIGURUMI NFTs.</u>
            </p>
            <p>
              In addition to NEKO, USAGI, and KUMA included in SNACK-PICK,
            </p>
            <p>
              You can have a larger collection of animal pajamas.
            </p>
            <p>
              Please look forward to the cute LICCAN NFT mint soon ! :)
            </p>
          
            <p>
              Also, our team is finding a new direction for NFT.
            </p>
            <p>
              Soon, we will announce the function to interact with LICCA NFT.
            </p>
          </div>
        </ArticleContent>
      </Article>
    </Layout>
  )
}
