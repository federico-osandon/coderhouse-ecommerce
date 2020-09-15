import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ItemList({ item }) {
    const classNamees = useStyles();
    
    return (
        
        <div className="card-group col-3 text-dark">
            <div className="card">
                <Link to={`/item/${item.id}`}>
                    <img className="card-img-top" src={item.imageId} />
                </Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.categoryId}</p>
                        <p className="card-text"><small className="text-muted">${item.price}</small></p>
                    </div>
            </div>
                
        </div>
      
    )
}
//<div >
//    <br />
//    <Card classNameName={classNamees.root} >
//        <CardHeader
//            avatar={
//                <Avatar aria-label="recipe" classNameName={classNamees.avatar}>
//                    F
//                    </Avatar>
//            }
//            action={
//                <IconButton aria-label="settings">
//                    <MoreVertIcon />
//                </IconButton>
//            }
//            title={item.title}
//            subheader={item.category}
//        />
//        <Link to={`/item/${item.id}`}>
//            <CardMedia classNameName={classNamees.media} image={item.imageId} title="Camisa" />
//        </Link>
//
//        <CardContent>
//            <Typography variant="body2" color="textSecondary" component="p">
//                Categoria: {item.categoryId}
//            </Typography>
//            <Typography variant="body2" color="textSecondary" component="p">
//                $ {item.price}
//            </Typography>
//        </CardContent>
//        <CardActions disableSpacing>
//            <IconButton aria-label="add to favorites">
//                <FavoriteIcon />
//            </IconButton>
//            <IconButton aria-label="share">
//                <ShareIcon />
//            </IconButton>
//        </CardActions>
//    </Card>
//</div>