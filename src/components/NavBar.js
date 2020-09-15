import React, {useState,useEffect} from 'react'
import { getFirestore } from '../remote/firebaseApp'
import CartIcon from './CartIcon'
import { Link, } from 'react-router-dom'

const NavBar = () => {
    const [categoiries, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const categoriesCollection = db.collection("categories")
        categoriesCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!!')
            }
            setCategories(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }).catch((error) => {
            console.log('Error searching categories', error)
        })
    }, [])    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link to="/">ECOMMERCER</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categoiries.map(gategory => <Link key={gategory.id} className="dropdown-item" to={`/categories/${gategory.key}`} >{gategory.description}</Link>) }                                                                                                    
                            </div>
                        </li>
                    </ul>
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                </div>
            </nav>
        </>

    )
};

export default NavBar;

