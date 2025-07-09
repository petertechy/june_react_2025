import React, { useState } from "react";

const Product = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productImage, setproductImage] = useState("");
  const [allProduct, setallProduct] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addProduct = () => {
    const product = {
      productName,
      productPrice,
      productDesc,
      productCategory,
      productImage,
    };
    setallProduct([...allProduct, product]);
    clearFields();
  };

  const deleteProduct = (index) => {
    const newProducts = [...allProduct];
    newProducts.splice(index, 1);
    setallProduct(newProducts);
  };

  const openEditModal = (index) => {
    const product = allProduct[index];
    setEditIndex(index);
    setproductName(product.productName);
    setproductPrice(product.productPrice);
    setproductDesc(product.productDesc);
    setproductCategory(product.productCategory);
    setproductImage(product.productImage);
    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  const saveEdit = () => {
    const updatedProduct = {
      productName,
      productPrice,
      productDesc,
      productCategory,
      productImage,
    };
    const newProducts = [...allProduct];
    newProducts[editIndex] = updatedProduct;
    setallProduct(newProducts);
    clearFields();
  };

  const clearFields = () => {
    setproductName("");
    setproductPrice("");
    setproductDesc("");
    setproductCategory("");
    setproductImage("");
    setEditIndex(null);
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Create Product</h1>
        <input type="text" className="form-control my-2" placeholder="Product Name" value={productName} onChange={(e) => setproductName(e.target.value)} />
        <input type="text" className="form-control my-2" placeholder="Product Price" value={productPrice} onChange={(e) => setproductPrice(e.target.value)} />
        <input type="text" className="form-control my-2" placeholder="Product Description" value={productDesc} onChange={(e) => setproductDesc(e.target.value)} />
        <input type="text" className="form-control my-2" placeholder="Product Category" value={productCategory} onChange={(e) => setproductCategory(e.target.value)} />
        <input type="text" className="form-control my-2" placeholder="Product Image URL" value={productImage} onChange={(e) => setproductImage(e.target.value)} />
        <button className="btn btn-primary" onClick={addProduct}>Create Product</button>
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

      <div className="container">
        {allProduct.length === 0 ? (
          <h3>No Products yet</h3>
        ) : (
          allProduct.map((product, index) => (
            <div key={index} className="card my-3 p-3">
              {product.productImage && (
                <img src={product.productImage} alt="" className="img-fluid" style={{ maxHeight: "200px" }} />
              )}
              <h5>{product.productName}</h5>
              <p>{product.productPrice}</p>
              <p>{product.productDesc}</p>
              <p>{product.productCategory}</p>
              <button className="btn btn-danger me-2" onClick={() => deleteProduct(index)}>Delete</button>
              <button className="btn btn-secondary" onClick={() => openEditModal(index)}>Edit</button>
            </div>
          ))
        )}
      </div>

      {/* Bootstrap Modal for Edit */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearFields}></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control my-2" placeholder="Product Name" value={productName} onChange={(e) => setproductName(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product Price" value={productPrice} onChange={(e) => setproductPrice(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product Description" value={productDesc} onChange={(e) => setproductDesc(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product Category" value={productCategory} onChange={(e) => setproductCategory(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product Image URL" value={productImage} onChange={(e) => setproductImage(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearFields}>Cancel</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={saveEdit}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
