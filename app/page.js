
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import perfumes from "./data/perfumes";
import HeroBanner from "./components/HeroBanner";
import LuxuryCarousel from "./components/LuxuryCarousel";
import "./components/nav.css";
import Navbar from "./components/Navbar";


export default function Home(){


  const [count,setCount] = useState(0);

  const [search,setSearch] = useState("");



  useEffect(()=>{


    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    setCount(cart.length);


  },[]);




  const filteredPerfumes = perfumes.filter(
    (item) =>
      item.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );



  return (

    <main dir="rtl">
      
    



      {/* <header className="header">


        <div className="logo">
          AURA
        </div>





<nav className="menu">

  <Link href="/">
    خانه
  </Link>


  <Link href="/women">
    عطر زنانه
  </Link>


  <Link href="/men">
    عطر مردانه
  </Link>


  <Link href="/brands">
    برندها
  </Link>

</nav>




        <input

          className="search"

          placeholder="جستجوی عطر..."

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

        />




        <div className="actions">



          <Link

          href="/cart"

          className="cart-icon"

          >


            🛒


            <span>

              {count}

            </span>


          </Link>





          <div className="user-icon">

            👤

          </div>




        </div>



      </header> */}


      <Navbar />
     
      <HeroBanner />



    


      <section className="hero">
        <h2>
          عطر خاص, انتخاب خاص
        </h2>
        <p>
          مجموعه ای از بهترین رایحه ها
        </p>
        
      </section>

      <section className="products">


        <h2>
          محصولات ویژه
        </h2>

<LuxuryCarousel products={perfumes} />




<br />
<br />
<br />



        <div className="product-grid">



        {

          filteredPerfumes.map(item => (



            <Link


              href={`/product/${item.id}`}


              className="card"


              key={item.id}


            >



              <img

                src={item.image}

                alt={item.name}

              />




              <h3>

                {item.name}

              </h3>





              <p>

                {item.type}

              </p>





              <h3 className="price">

                {item.price}

              </h3>





            </Link>



          ))

        }



        </div>




      </section>




      




    </main>

  );

}















