import React, {FC} from 'react';

import CommentComponent from "../CommentComponent/CommentComponent";
import {storeX} from "../../context/ContextProvider";

const CommentsComponent:FC = () => {
    const {commentsStore: {allComments}} = storeX();

    return (
        <div>
            {allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;