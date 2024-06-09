import React, {FC, useContext} from 'react';

import {SomeContext} from "../../context/ContextProvider";
import CommentComponent from "../CommentComponent/CommentComponent";

export const CommentsComponent: FC = () => {
    const {commentsStore: {allComments}} = useContext(SomeContext);

    return (
        <div>
            {allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};