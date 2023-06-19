import React,{useEffect,useState} from 'react'

const Nav = () => {
    const [products, setProducts] = useState([]);
 useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((data) =>{
        setProducts(data);
    });
 },[]);

  return (
    <main>
       <div style={{textAlign:'center'}}>
      {products.map(product => (
       
        <div key={product.id} className="nav" >
             
             <ul> <h2>{product.title}</h2>
          
          <img className="image" src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p style={{textAlign:'center',color:'blue'}}>${product.price}</p>
          </ul>
        </div>
      ))}
    </div>
    </main>
  )
}

export default Nav