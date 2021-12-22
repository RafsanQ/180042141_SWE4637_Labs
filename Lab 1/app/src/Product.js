function Product(props){

    function voteHandler(e){
        console.log("Clicked", props.id);
    }

    return (
        <div className="product-card">
            <div className="product-image" >
               <img src={props.img} height={200}></img> 
            </div>
            
            <div className="product-info">
                <img src="upArrow.png" height={40} onClick={voteHandler}></img>
                <h2>{props.upVotes}</h2>
      
                
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
            </div>

        </div>
    )
}

export default Product;