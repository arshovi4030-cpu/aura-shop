"use client";


import "./product.css";
import perfumes from "../../data/perfumes";
import Link from "next/link";
import { useParams } from "next/navigation";



export default function ProductPage(){


  const params = useParams();


  const product = perfumes.find(
    (item) => item.id == params.id
  );



  if(!product){

    return (
      <h1>
        محصول پیدا نشد
      </h1>
    );

  }



  function addToCart(){


    const oldCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];



    const exists =
      oldCart.some(
        item => item.id == product.id
      );



    if(!exists){

      oldCart.push(product);

      localStorage.setItem(
        "cart",
        JSON.stringify(oldCart)
      );

    }



    alert("محصول به سبد اضافه شد");

  }




  return (
    

    <main dir="rtl" className="product-page">

      


      <Link href="/">
        ← برگشت
      </Link>



      <section className="detail">


        <img
          src={product.image}
          alt={product.name}
        />



        <div>


          <h1>
            {product.name}
          </h1>



          <h3>
            {product.type}
          </h3>



          <p>
            رایحه‌ای خاص و ماندگار از مجموعه TELVIN
          </p>



          <h2>
            {product.price}
          </h2>



          <button
            className="size"
          >
            50ml
          </button>


          <button
            className="size"
          >
            75ml
          </button>


          <button
            className="size"
          >
            100ml
          </button>



          <button
            className="buy"
            onClick={addToCart}
          >

            افزودن به سبد خرید

          </button>



        </div>


      </section>


    </main>

  );

}