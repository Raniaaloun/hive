import React from "react";
import { Button } from "./styles";

interface CreatePostButtonProps {
  onClick: () => void;
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Create New Post</Button>;
};

export default CreatePostButton;
