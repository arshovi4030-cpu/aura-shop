"use client";

import Image from "next/image";
import { useState } from "react";
import "./LuxuryCarousel.css";


export default function LuxuryCarousel({products}) {


const [active,setActive] = useState(0);


// تعداد کارت‌های حلقه
const displayProducts = Array.from(
{ length: 16 },
(_,i)=> products[i % products.length]
);



return (

<div className="gallery">



<div className="center">


<Image

src={products[active].image}

width={280}

height={280}

alt="perfume"

/>


</div>




<div className="wheel">


{

displayProducts.map((item,index)=>{


const realIndex =
index % products.length;



const angle =
index * (360 / displayProducts.length);



return (

<div


key={index}


className={
realIndex === active
?
"item active-card"
:
"item"
}



onMouseEnter={()=>setActive(realIndex)}



style={{

transform:

`
rotate(${angle}deg)
translateY(-280px)

`

}}


>


<Image

src={item.image}

width={100}

height={100}

alt=""

/>


</div>

)

})


}



</div>



</div>

)

}