import React from 'react';
import {useState} from 'react';

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
];



function ProductList(){

    const [products, setProducts] = useState(Products);

    function increaseVotyBy1(id){
        let newProducts = [].concat(products);
        newProducts[id-1].upVotes++;
        console.log("Updated. Votes=", Products[id-1].upVotes);
        setProducts(newProducts);
    }

    // Make a copy of the data
    let newProductList = [].concat(Products);

    // Sort the copied data
    newProductList.sort((a,b)=>b.upVotes-a.upVotes);

    newProductList = Products.map(
        item => <Product name={item.name} upVotes={item.upVotes} desc={item.desc} img={item.img} id={item.id} upVoteFunction={increaseVotyBy1} />
    )

    return (
        <div className='product-list'>
            {newProductList}
        </div>
    )
}

export default ProductList;