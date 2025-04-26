import React, { useState, useEffect } from "react";
import { ModalWrapper, Input, TextArea, SubmitButton, ModalContent, ModalHeader, CloseButton } from "./styles";
import { useAPIContext } from "@/context/api-provider";
import { useAuth } from "@/context/auth-provider";
interface ModalProps {
  onClose: () => void;
  postToEdit?: Post | null;
}

// TODO: Move to shared
export interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string;
}


const Modal: React.FC<ModalProps> = ({ onClose, postToEdit }) => {
  const { keycloak } = useAuth();
  const { fetchPosts, createPost, updatePost } = useAPIContext();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (postToEdit) {
      setTitleInput(postToEdit.title);
      setContentInput(postToEdit.content);
    }
  }, [postToEdit]);

  const handleSubmit = async () => {
    if (!keycloak.token) return;

    try {
      setIsSubmitting(true);

      if (postToEdit) {
        await updatePost(postToEdit.id, { title: titleInput, content: contentInput }, keycloak.token);
      } else {
        await createPost(
          {
            title: titleInput,
            content: contentInput,
          },
          keycloak.token
        );
      }

      fetchPosts();
      onClose();
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>✖️</CloseButton>
        <ModalHeader>{postToEdit ? "Edit Post" : "Create New Post"}</ModalHeader>
        <Input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Enter post title"
        />
        <TextArea
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
          placeholder="Enter post content"
        />
        <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : postToEdit ? "Update Post" : "Submit Post"}
        </SubmitButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
