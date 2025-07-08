import React, { useState } from "react";

const Product = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productImage, setproductImage] = useState("");
  const [allProduct, setallProduct] = useState([]);

  // const updateProduct = (event) =>{
  //     alert("I have been clicked")
  //     setproductName(event.target.value)
  // }

  const addProduct = () => {
    let product = { productName, productPrice, productDesc, productCategory, productImage };
    setallProduct([...allProduct, product]);
    // let newProduct = {...product, productTime: "18:00"}
    console.log(allProduct);
  };

  const deleteProduct = (index) => {
    let newProducts = [...allProduct];
    newProducts.splice(index, 1);
    setallProduct(newProducts);
  };

  return (
    <>
      <div>
        <h1>Create Product</h1>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setproductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          onChange={(e) => setproductPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          onChange={(e) => setproductDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Category"
          onChange={(e) => setproductCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Image"
          onChange={(e) => setproductImage(e.target.value)}
        />
        <button onClick={addProduct}>Create Product</button>
      </div>

      <hr />

      {/* if(allProduct.length === 0){
     <div><h1>No Products yet</h1></div>
      }else{
            allProduct.map((product, index) => (
            <div key={index}>
              <h1>{product.productName}</h1>
              <h1>{product.productPrice}</h1>
              <h1>{product.productDesc}</h1>
              <h1>{product.productCategory}</h1>
              <button onClick={() => deleteProduct(index)}>Delete</button>
              <button>Edit</button>
            </div>
          ))
        )
      } */}

      <div>
        {allProduct.length === 0 ? (
          <div><h1>No Products yet</h1></div>
        ) : (
          allProduct.map((product, index) => (
            <div key={index}>
              <img src={product.productImage} alt="" />
              <h1>{product.productName}</h1>
              <h1>{product.productPrice}</h1>
              <h1>{product.productDesc}</h1>
              <h1>{product.productCategory}</h1>
              <button onClick={() => deleteProduct(index)}>Delete</button>
              <button>Edit</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Product;
