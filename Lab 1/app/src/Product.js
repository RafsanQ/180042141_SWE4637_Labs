function Product(props){
    return (
        <div className="product-card">
            <div className="product-image" >
               <img src="product1.jpg"></img> 
            </div>
            
            <div className="product-info">
                <h3>upvotes</h3>
                <h3>Name</h3>
                <p>Product Info for</p>
            </div>

        </div>
    )
}

export default Product;