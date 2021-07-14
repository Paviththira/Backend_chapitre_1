const express =require ('express');

const app = express()

const port = 8000
app.listen(port,()=>{
    console.info('Serveur started on port :' + port )
});
app.get ('/',(req ,res)=>{
    res.send('Welccome My homepage')
})

app.get ('truc',(req,res)=>{
    res.send('ok truc')
})

app.get ('/truc/machin/24564354/tralala'),(req ,res)=>{
    res.send('<html> <body><h1>titre</h1><h2>test</h2></body></html>)
}
app.get('/country/:id'(req,res)=> {
    const id = req.params.id
    res.json({
        name : 'France',
        population : 67_060_000,
        id :id,
    })
})