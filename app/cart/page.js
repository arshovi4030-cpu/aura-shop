"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import "./cart.css";


export default function CartPage(){


  const [cart,setCart] = useState([]);



  useEffect(()=>{

    const saved =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    setCart(saved);

  },[]);




  function removeItem(id){


    const newCart =
      cart.filter(
        item => item.id !== id
      );


    setCart(newCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

  }





  return (

    <main className="cart-page" dir="rtl">


      <Link href="/">
        ← ادامه خرید
      </Link>



      <h1>
        سبد خرید
      </h1>




      {

      cart.length === 0 ?


      (

        <h2>
          سبد خرید خالی است
        </h2>

      )


      :

      (

        <div className="cart-list">


        {

        cart.map(item=>(


          <div 
          className="cart-card"
          key={item.id}
          >


            <img
              src={item.image}
              alt={item.name}
            />



            <div>


              <h2>
                {item.name}
              </h2>


              <p>
                {item.type}
              </p>


              <h3>
                {item.price}
              </h3>



              <button
              onClick={() =>
                removeItem(item.id)
              }
              >

              حذف

              </button>



            </div>


          </div>


        ))

        }


        </div>

      )

      }


    </main>

  );

}