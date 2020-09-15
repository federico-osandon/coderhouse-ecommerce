import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemCount from '../components/ItemCount'
import ProductDetail from '../components/ItemDetail/index'
import { getFirestore } from '../remote/firebaseApp'

export default function ItemDetailContainer() {

	const { id } = useParams();
	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(true);
	const [countComprar, setCountComprar] = useState(1)

	useEffect(() => {

		const db = getFirestore()
		const itemCollection = db.collection('items')
		const item = itemCollection.doc(id)

		item.get().then((doc) => {
			if (!doc.exists) {
				console.log('Item does not exist !! :(')
				return
			}			
			setItem({ id: doc.id, ...doc.data() })
		}).catch((error) => {
			console.log("Error searching items", error)
			alert('El producto no existe')
		}).finally(() => {
			setLoading(false)
		})

	}, [id]);

	const onAdd = (click) => {		
		setCountComprar(click)
	}

	return ( <>
		{
			loading ? <h3> LOADING... </h3> : <div>
			    <br/>
			    <div className = "container row" >
                    <div className = "col-9" >
                        <ProductDetail
                        item = { item }
                        onAdd = { onAdd }
                        countComprar = { countComprar }
                        />
                    </div>
                    <div className="col-3" >
                        <ItemCount
                        initial = { 1 }
                        min = { 1 }
                        max = { 10 }
                        onAdd = { onAdd }
                        setCountComprar = { setCountComprar }
                        /> 
                    </div>

			</div> 
            </div>

		} 
        </>
	)}

