import React, { useState} from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product';
const CreateProduct = () =>{
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();
    const store = async (e) =>{
        e.preventDefault();
        await axios.post(endpoint, {description: description, price: price, stock: stock});
        navigate('/');

    }
    return (
        <div>
            <h3>Crear Producto EditadoV1</h3>
            <form onSubmit={store}>
                <div>
                    <label className="mb-3">Description xd</label>
                    <input 
                        value={description}
                        onChange={ (e)=>setDescription(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <label className="mb-3">Price</label>
                    <input 
                        value={price}
                        onChange={ (e)=>setPrice(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <label className="mb-3">Stock</label>
                    <input 
                        value={stock}
                        onChange={ (e)=>setStock(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CreateProduct;