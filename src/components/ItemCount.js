import React, { useState } from 'react';
import { useCartContext } from '../service/CartContext'
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useListContext, } from '../service/ListContext';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: 369

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textAlign: "left"
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        //marginLeft: theme.spacing(1),
        //marginRight: theme.spacing(1),
        width: '25ch',
    },
});

export default function ItemCount({ initial, min, max, onAdd, setCountComprar }) {

    const classes = useStyles();

    const [count, setCount] = useState(initial);    


    //const { list, addItem, quantity, cleanList } = useListContext();    
    

    const down = () => {
        setCount((count > min) ? count - 1 : count);
        onAdd((count > min) ? count - 1 : count)
        
    }
    
    const up = () => {
        setCount((count < max) ? count + 1 : count);
        onAdd((count < max) ? count + 1 : count)
        
    }    

    
    return (
        <>
        <br />
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Add Amount
				    </Typography>
                    <br />
                    <form className={classes.root} noValidate autoComplete="off">


                        <button
                            onClick={down}
                            type="button"
                            className="btn btn-outline"
                            disabled={count === min}
                        >
                            <Icon
                                className="fa fa-window-minimize"
                                style={{ fontSize: 25 }}
                            />
                        </button>




                        <input
                            type="button"
                            className="form-control text-center col-md-4 d-inline border-0"
                            value={count}
                        />



                        <button
                            onClick={up}
                            className="btn btn-outline"
                            type="button"
                            disabled={count === max}
                        >
                            <Icon
                                className="fa fa-plus"
                                style={{ fontSize: 25 }}

                            />
                        </button>
                        
                    </form>
                </CardContent>
                
                <CardActions>
                   
                </CardActions>
            </Card>

        </>

    )
    
}

//const [count, setCount] = useState(props.initial);
//

//<div className="container">
// <button className="btn btn-info" onClick={down} >-</button>
// <label className="alert alert-info d-inline-flex col-sm-2 " >
// {count}
// </label>
// <button className="btn btn-info" onClick={up} >+</button><br />
// <button type="button" className="btn btn-info col-sm-3" onClick={() => props.onAdd(count)} >Add to Cart</button>
//</div>


//<Button
//    variant="contained"
//    size="large"
//    color="primary"
//    className="btn btn-block btn-outline"
//    onClick={() => onAdd(count)}
//>
//    Add to Cart
//				</Button>
