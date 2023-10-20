"use client"
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { useState } from "react";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import { Title } from "@tremor/react";


function HeaderYr() {
  const [license, setLicense] = useState("all");
  const [contentType, setContentType] = useState("all") ;
  const router = useRouter();

  return (
     
     <header className="pb-2 pt-2"> 
      <div className="w-full md:max-w-2xl">
        <Link href="/">
          <Title className="text-center pb-5 pt-8">Check the weather</Title>
        </Link>
      </div>
      <div className="w-full ">
        <form action={FormData =>{
          const searchTerm = FormData.get("searchTerm");
          
          const params = new URLSearchParams();
          if (!searchTerm) {
            return "No value provided";
          };

          router.push(`/myspot/${searchTerm}`)

        }}>
          <div className="flex items-center gap-2 w-full  ">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              
              <input type="text" name="searchTerm" placeholder="Find your spot..." className="outline-none flex-1"/>
            </div>
            <SearchButton />
          </div>
        
        </form>
      </div>
     </header>
     
  )
}

export default HeaderYr