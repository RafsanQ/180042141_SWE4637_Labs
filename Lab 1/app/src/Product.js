function Product(props){
    return (
        <div className="product-card">
            <div className="product-image" >
               <img src={props.img} height={200}></img> 
            </div>
            
            <div className="product-info">
                <img src="upArrow.png" height={40} onClick={()=>{console.log("Clicked")}}></img>
                <h2>{props.upVotes}</h2>
      
                
                <h4>{props.name}</h4>
                <p>{props.desc}r</p>
            </div>

        </div>
    )
}

export default Product;