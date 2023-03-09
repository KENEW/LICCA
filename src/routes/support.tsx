import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'

export default function SupportPage() {
  const [success, setSuccess] = useState(false);
  const [onWL, setWL] = useState(false);
  const [number, setNumber] = useState('');

  function handleClick(e) {
    searchAddress();
    e.preventDefault()
    setSuccess(true)
  }

  var wallets = {"Address":[
    "0x91Fb89d796F3969d06899DC993e80302F50DF444",
    "0x341f3CA20A07aeed6BeA041249613D5702A8c537",
    "0x6678eB423E5F954A8d7ab47Fa3373F9F743C1686"
  ]};
  

  function searchAddress() 
  {
    var input = document.getElementById('name') as HTMLInputElement;

    for (var i = 0; i < wallets.Address.length; i++) 
    {
      if (wallets.Address[i] == input.value) 
      {
        setNumber("Your wallet is Whitelist ! 🎉");
        return;
      }
    }

    setNumber("Your wallet is No Whitelist :(");
  }

  return (
    <Layout>
      <Article>
        
        <ArticleContent title="Support">
          <p className="wlCheckTitleFont">Wallet your check</p>
          {/* create a short contact form with name, email, and message */}
          <form className="space-y-4">
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="name"
              >
                <div className='faqContentText'>
                UPDATE : 2023.02.27 

                </div>
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 inputText text-gray-500 shadow-none"
                type="text"
                id="name"
                name="name"
                placeholder="YOUR ETH ADDRESS"
              />
            </div>
            <button
              type="submit"
              onClick={handleClick}
              
              className="button searchText"
            >
              <div className='searchBox'>SEARCH</div>
              
            </button>

            {(success) && (
              <div className="mt-2 text-xs italic text-gray-500">
                <div className='walletStateFont'>
                  {number}
                </div>
              </div>
            )
          }

          </form>
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
