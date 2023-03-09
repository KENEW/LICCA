import classnames from 'clsx'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={classnames('list-reset', className)}>   
       <div className='button socalIconSpace'>
        <div className='socialIconBox'>
          <a href="https://twitter.com/KigurumiLicca" target='_blank'><img src="public\images\TwitterLogo.png" className='socialIcon'/></a>
        </div>
       </div>
       <div className='button socalIconSpace'>
        <div className='socialIconBox'>
          <a href="http://www.naver.com" target='_blank'><img src="public\images\EtherscanLogo.png" className='socialIcon'/></a>
        </div>
       </div>
       <div className='button socalIconSpace'>
        <div className='socialIconBox'>
          <a href="http://www.google.com" target='_blank'><img src="public\images\OpenseaLogo.png" className='socialIcon'/></a>
        </div>
       </div>
    </ul>
  )
}