import React, { useEffect } from 'react'
import "./Widgets.css"
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getNewsData } from "./redux/NewsRedux/ActionCreator"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    MiddleAuthor: {
        color: "white",
        borderRadius: "55px",
        backgroundColor: "#2e82f4",
        textAlign: "center",
        padding: "5px",
        fontSize: "10px",
        fontWeight: "bolder",
        width: "30%"
    },
    Rightmedia: {
        height: 180,
        borderRadius: "7px",
    },
}));

function Widgets() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        return dispatch(getNewsData());
    }, []);



    var NewsData = useSelector((state) => state);
    const { articles } = NewsData.NewsData.NewsData;
    // if (articles == undefined) {
    //     return (
    //         <div className={classes.spinner}>
    //             <LinearProgress color="secondary" />
    //         </div>
    //     );
    // } else {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmasaischool%2Fvideos%2F733501600620312%2F&show_text=true&width=476" width="476" height="591" style="border:none;overflow:hidden" width="340" height="100%"
                style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            {/* {articles &&
                    articles.map((item) => {
                        return (
                            <div>
                                <div>
                                    <img src={item.urlToImage} className={classes.Rightmedia} alt="" />
                                    <Typography
                                        className={classes.MiddleAuthor}
                                        gutterBottom
                                        variant="h6"
                                        component="h6"
                                    >
                                        {item.source.name}
                                    </Typography>
                                    <Typography gutterBottom>{item.title}</Typography>
                                </div>
                            </div>
                        );
                    })} */}
        </div>

    )

}

export default Widgets
