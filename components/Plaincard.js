
import Link from 'next/link';


function Plaincard({img, url, title, resourcetype}) {
    return (
      <Link key={url} href={`/resource/${url}`}>
      <div className="border text-wihte border-lightgray rounded-lg group cursor-pointer overflow-hidden">
        <img className="h-40 lg:h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={img} alt={title}/>
        <div className="flex justify-between pt-5 pb-5 pl-3 lg:pl-5 bg-white">
          <div>
            <p className="text-sm lg:text-lg font-bold text-darkblue">{title}</p>
            <p className="text-xs">
              {resourcetype}
            </p>
          </div>
        </div>
      </div>
    </Link>
    )
  }

  export default Plaincard

