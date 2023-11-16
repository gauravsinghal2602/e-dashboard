import React from 'react';
const AddProduct=()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);

    const addProduct = async () =>{

        // console.warn(name,price,category,company);

        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }


        const userId = JSON.parse(localStorage.getItem('user'))._id
        // console.warn(userId._id)
        let result = await fetch("http://localhost:5000/add-product",{
            method:'POST',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();  //readstream to json
        console.warn(result);
    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter product Name' className='inputBox'
            value={name} onChange={(e)=>{setName(e.target.value)}}
            />
            {error && !name && <span className='invalid-input'>Enter valid Name</span>}

            <input type="text" placeholder='Enter product Price' className='inputBox'
            value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
            {error && !price && <span className='invalid-input'>Enter valid Price</span>}

            <input type="text" placeholder='Enter product Category' className='inputBox'
            value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            {error && !category && <span className='invalid-input'>Enter valid Category</span>}

            <input type="text" placeholder='Enter product Company' className='inputBox'
            value={company} onChange={(e)=>{setCompany(e.target.value)}}
            />
            {error && !company && <span className='invalid-input'>Enter valid Company</span>}

            <button onClick={addProduct} className='appButton'>Add Product </button>
        </div>
    )
}

export default AddProduct