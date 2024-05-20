import { useState } from "react";
import { usePostContext } from "../../context/PostContext";
import CommentList from "./CommentList";
const commentsData = [
  {
    id: "609e14cb2f02c459cc4e1b1g",
    message: "This is the first comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1b",
    parentId: null,
    childrenId: ["609e14cb2f02c459cc4e1b1c", "609e14cb2f02c459cc4e1b1d"],
    user: {
      firstName: "John",
      lastName: "Doe",
      avatar: "path/to/avatar1.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1h",
    message: "Another comment here",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1c",
    parentId: "609e14cb2f02c459cc4e1b1g",
    childrenId: ["609e14cb2f02c459cc4e1b1b"],
    user: {
      firstName: "Jane",
      lastName: "Smith",
      avatar: "path/to/avatar2.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1a",
    message: "Comment of user",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1b",
    parentId: "609e14cb2f02c459cc4e1b1h",
    childrenId: [],
    user: {
      firstName: "Jane",
      lastName: "Smith",
      avatar: "path/to/avatar3.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1i",
    message: "Reply to the second comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1d",
    parentId: "609e14cb2f02c459cc4e1b1g",
    childrenId: [],
    user: {
      firstName: "Alice",
      lastName: "Johnson",
      avatar: "path/to/avatar3.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1j",
    message: "Yet another comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1f",
    parentId: null,
    childrenId: [],
    user: {
      firstName: "Bob",
      lastName: "Brown",
      avatar: "path/to/avatar4.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1k",
    message: "A new top-level comment",
    postId: "609e14cb2f02c459cc4e1b1b",
    userId: "609e14cb2f02c459cc4e1b1e",
    parentId: null,
    childrenId: ["609e14cb2f02c459cc4e1b1g"],
    user: {
      firstName: "Charlie",
      lastName: "Davis",
      avatar: "path/to/avatar5.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1l",
    message: "Reply to the new comment",
    postId: "609e14cb2f02c459cc4e1b1b",
    userId: "609e14cb2f02c459cc4e1b1g",
    parentId: "609e14cb2f02c459cc4e1b1k",
    childrenId: [],
    user: {
      firstName: "Eve",
      lastName: "Evans",
      avatar: "path/to/avatar6.jpg",
    },
  },
];
const Comment = ({ id, message, user }) => {
  const { getReplies } = usePostContext();
  const childComments = getReplies(id);
  console.log("Check comment", user);
  return (
    <div>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>{id}</div>
      <div>{message}</div>
      {childComments?.map((comment) => {
        return (
          <div>
            <CommentList comments={childComments} />
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
