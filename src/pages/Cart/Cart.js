import React, {useState} from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../../remote/firebaseApp'
import { FormCheckout } from '../../components/FormCheckout/FormCheckout'


import { useListContext } from '../../service/ListContext';
import { Link } from 'react-router-dom'

export default function Cart() {
    const { list, removeItem, cleanList, price } = useListContext();
    const [userInfo, setUserInfo] = useState(null)  
    const [ orderId, setOrderId ] = useState(null)
    
        const updateUserInfo = (userInfo) => {
            setUserInfo(userInfo)            
        } 
    
        const items = list.map((item, idx) => ({ id: item.item.id, title: item.item.title, quantity: item.quantity }))   

        const order = {
            userInfo,
            item: items,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: price(),
            estado: 'generado',
        }
        

        async function createOrder() {
            const db = getFirestore()
            const orders = db.collection('orders')
            try {
                const { id } = await orders.add(order)                 
                alert('El id de su orden de compra es: ' + id)
                setOrderId(id)
                cleanList()
            } catch (err) {
                console.log(err)
            }            
        }
    
    return <> 
        <br />    
        <label className="btn-success"><h1>CHECKOUT</h1></label>        
        {orderId !== null && <div className="col-12">
            <h1>Su nro. de orden es: {orderId}</h1>
            <Link to="/">
                <label className="btn btn-primary" >keep buying</label>
            </Link>
        </div>}
        {(list.length === 0 && orderId === null) &&<div className="col-12">
            <h1>Oops ... There are no products in the cart</h1>
            
                <Link to="/"> 
                    <label className="btn btn-primary" >keep buying</label> 
                </Link>       
        </div>}
        {list.length !== 0 && <>
            <div className="container">            
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio/Unit</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {list.map((i, index) =><tr key={i.item.id} >
                                <th>{i.item.title}</th> 
                                <th>{i.item.price}</th> 
                                <th>{i.quantity}</th>
                                <th>{(i.item.price * i.quantity).toFixed(2)}</th>                    
                                <th><button key={index} className="btn btn-primary" onClick={() => removeItem(i)}>Remove</button></th>
                            </tr>
                    
                        )}
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total:</th>
                            <th>{price()}</th>
                        </tr>    
                        
                    </tbody>
                </table>                
            </div>
            {!userInfo && <label className="btn btn-danger"><h3>Para generar la orden de compra... debe completar el formulario</h3></label>}
            
            <FormCheckout onChange={updateUserInfo}/>
            <button className="btn btn-success"
                disabled={userInfo ? false : true}
                onClick={createOrder}
            >Realizar Comprar</button>           
        </>} 
        
      
    </>
}