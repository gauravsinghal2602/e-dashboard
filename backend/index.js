const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login',async (req,res) => {
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user)
        {
            res.send(user);
        }else{
            res.send({result : "no result found"});
        }
    }else{
        res.send({result : "no result found"});
    }
})

app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products',async (req,res)=>{
    let products =await Product.find();
    if(products.length > 0)
    {
        res.send(products)
    }else{
        res.send({result : "No Products Find"})
    }
});

app.delete("/product/:id",async (req,res)=>{
    // res.send(req.params.id)
    const result = await Product.deleteOne({_id:req.params.id});
    res.send(result);
});

app.get("/product/:id",async (req,res)=>{
    
    let result = await Product.findOne({_id:req.params.id});
    if(result)
    {
        res.send(result);
    }else{
        res.send({result:"No Record Found."})
    }
});

app.put("/product/:id",async (req,res)=>{          //  ***  We can not update id of product
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result);
});

app.get("/search/:key",async (req,res) => {
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });
    res.send(result);

})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

// http://localhost:5000/