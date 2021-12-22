import React from 'react';

import Product from './Product'

let Products = [
    {
        name: "Yellow Pail",
        upVotes: 63,
        desc: "On demand sand castle construction expertise"
    },
    {
        name: "Supermajority: The Fantasy Congress League",
        upVotes: 54,
        desc: "Earn points when your favorite politician pass legislation"
    },
    {
        name: "Tinfoil Hats",
        upVotes: 30,
        desc: "We already have your measurements and shipping address"
    },
    {
        name: "Haught or Naught",
        upVotes: 61,
        desc: "High-minded or not? You decide."
    }
]

function PorductList(){
    return (
        <div className='product-list'>
            <Product />
            <Product />
        </div>
    )
}

export default PorductList;