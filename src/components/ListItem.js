import React from 'react';
import ItemList from './ItemList';
import {GetItemsFirestore} from '../remote/GetItemsFirestore'

export default function ListItem() {    
    
    const [items, loading] = GetItemsFirestore()

    return (
        
        
        <div className="col-12">
            <div className="row">
                {loading ? <p>Loading...</p> :
                    
                    items.map((product) =>
                        
                        <ItemList
                            key={product.id}
                            item={product}
                            
                        />
                    )
                }
            </div>
        </div>
        
    );
}
