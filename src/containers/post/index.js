import React, { useState, useContext } from "react";
import "./style.css";
import { Comment } from "../../components";
import { storage, db } from "../../firebase";
import CommentInput from "../../components/comment-input";
import { UserContext } from "../../contexts/user";

export default function Post({
  profileUrl,
  username,
  id,
  photoURl,
  caption,
  comments,
}) {
  const [user, setUser] = useContext(UserContext).user;
  const deletePost = () => {
    // delete the image from firebase storage

    // get ref to the image file we like to delete
    var imageRef = storage.refFromURL(photoURl);

    // delete the file
    imageRef
      .delete()
      .then(function () {
        console.log("delete successfull");
      })
      .catch(function (error) {
        console.log(`Error ${error}`);
      });

    //2 delete the post info from firebase firestore
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("delete post info successfull");
      })
      .catch(function (error) {
        console.log(`Error post info delete ${error}`);
      });
  };
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <img className="post__profilePic" src={profileUrl} />
          <p style={{ marginLeft: "8px" }}>{username}</p>
        </div>
        <button onClick={deletePost} className="post__delete">
          Delete
        </button>
      </div>

      <div className="post__center">
        <img className="post__photoUrl" src={photoURl} />
      </div>

      <div>
        <p>
          <span style={{ fontWeight: "500", marginRight: "4px" }}>
            {username}
          </span>
          {caption}
        </p>
      </div>

      {comments ? (
        comments.map((comment) => (
          <Comment username={comment.username} caption={comment.comment} />
        ))
      ) : (
        <></>
      )}

      {user ? <CommentInput comments={comments} id={id} /> : <></>}
    </div>
  );
}
