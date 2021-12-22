import React from 'react';

import Product from './Product'

let Products = [
    {
        id: 1,
        name: "Yellow Pail",
        upVotes: 63,
        desc: "On demand sand castle construction expertise",
        img: "product2.png"
    },
    {
        id: 2,
        name: "Supermajority: The Fantasy Congress League",
        upVotes: 54,
        desc: "Earn points when your favorite politician pass legislation",
        img: "product1.jpg"
    },
    {
        id: 3,
        name: "Tinfoil Hats",
        upVotes: 30,
        desc: "We already have your measurements and shipping address",
        img: "product3.jpg"
    },
    {
        id: 4,
        name: "Haught or Naught",
        upVotes: 61,
        desc: "High-minded or not? You decide.",
        img: "product4.jpg"
    }
]

function PorductList(){

    const newProductList = Products.map(
        item => <Product name={item.name} upVotes={item.upVotes} desc={item.desc} img={item.img} id={item.id} />
    )

    return (
        <div className='product-list'>
            {newProductList}
        </div>
    )
}

export default PorductList;