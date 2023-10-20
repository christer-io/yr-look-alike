
import Link from 'next/link';



function Questions({postid, url, title}) {
    return (
        <Link key={postid} href={`/resource/${url}`} >
        <div className="border text-black hover:text-hover border-lightgray rounded-lg group cursor-pointer overflow-hidden">
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg text-left">{title}</p>
              
            </div>
          </div>
        
          <p className="text-lg pt-5 pr-4 pb-3 text-right">&rarr;</p> 
          
        </div>
        
      </Link>
    )
  }

  export default Questions

