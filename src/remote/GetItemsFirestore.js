import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { getFirestore } from './firebaseApp'

export const GetItemsFirestore = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId = undefined } = useParams()

    useEffect(() => {

        setLoading(true)
        const db = getFirestore()
        let itemCollection = db.collection("items")
        let query = categoryId ? itemCollection
            .where('categoryId', '==', categoryId) : itemCollection

        query.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No Result!!')
            }
            setItems(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }).catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId]);

    return [items, loading]

}