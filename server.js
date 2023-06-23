const express= require ('express');
const userRouter= require('./routes/UserRouter')
const app =express()

app.use('/', userRouter)
const port =3000;

app.listen(port, () =>{
    console.log(`Sever is listening on ${port} `)
});