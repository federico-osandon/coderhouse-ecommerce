import React from 'react';

import './style.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



import { useListContext } from '../../service/ListContext';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


export default function ProductDetails({ item, onAdd, countComprar}) {

    const classes = useStyles();    

    const { addItem } = useListContext();

    const handleOnClick = () => {
        addItem(item, countComprar)
        onAdd(countComprar)
        alert('add cart: ' + countComprar)
    }
    return (
        <>
            
            <div className="Content">
                <div className="ProductDetailsWrapper">
                    <div className="ProductDetailsImage">

                        <Grid >
                            <Grid item key={item.id} xs={12} sm={12}>
                                <img src={item.imageId} style={{ width: '100%' }} alt={item.title} />
                                <Card>
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${item.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /mo
                                        </Typography>
                                        </div>

                                        <ul>

                                            <Typography component="li" variant="subtitle1" align="center">
                                                {item.title}
                                            </Typography>

                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <button
                                            type="button"
                                            className="btn btn-block btn-primary"
                                            onClick={handleOnClick}
                                        >Add to Cart {countComprar}</button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </Grid>


                    </div>
                    <div className="ProductDetails">
                        <div className="BreadCrumb">
                            <small>Home > Mobiles > Iphone</small>
                        </div>
                        <p className="ProductTitle">{item.name}</p>
                        <p className="ProductPrice">$ {item.price}</p>
                        <div className="ProductDescription">
                            <h3>Product Description</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}



