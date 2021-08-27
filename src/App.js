import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [products, setProducts] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [dateexpiration, setDateexpiration] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])


   function deleteProduct(_id){
     fetch('http://localhost:3001/products/'+_id, {
       method: "DELETE"
   })
  }

  function addProduct() {
    fetch('http://localhost:3001/products', {
       method: 'POST',
       body: JSON.stringify({ firstname, price, description, dateexpiration }),
       headers: new Headers({ 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        })
      })
      .then(res => res.json())
      .then(data => setProducts([...products, data]));  

 }

  return (
    <div className="App">
      <div className="Topo"> 
      <h1>Cadastre aqui seus produtos!</h1>
      </div> 
      <div className="Inputs">
        <input type="text" placeholder="Nome do Produto" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" placeholder="Preço do produto" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Descrição do produto" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" placeholder="Data de validade(yy-mm-dd)" value={dateexpiration} onChange={(e) => setDateexpiration(e.target.value)} />
        <button onClick={addProduct}>Adicionar</button>
      </div>
      <div className="Lista">
       <h1>Lista de Produtos:</h1>
      </div>

      {
        products.map(product => {
          return (
            <div className="produto" key={product._id}>
              <div>Nome: {product.firstname}</div>
              <div>Preço: R${product.price}</div>
              <div>Descrição: {product.description}</div>
              <div>Data de validade: {product.dateexpiration}</div>
              <button onClick={()=>deleteProduct(product._id)}>Exluir</button>
            </div>
          )
        })
      }
          <div className="Develop">
    Developed by Igor Gabriel Machado, RA:200471 and Murilo Renato Carleti, RA:200015, Gabriel Lambert, RA: 200198.
 </div>
    </div>


  );
   
}

export default App;
