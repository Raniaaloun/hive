import React, { useState } from "react";
import { Modal, Input, TextArea, SubmitButton, ModalContent, ModalHeader, CloseButton } from "./styles";
import { useAPIContext } from "@/context/api-provider";
import { useAuth } from "@/context/auth-provider";

interface CreatePostModalProps {
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose }) => {
  const { keycloak } = useAuth();
  const { fetchPosts, createPost } = useAPIContext();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!keycloak.token) return;

    try {
      setIsSubmitting(true);

      await createPost(
        {
          title: titleInput,
          content: contentInput
        },
        keycloak.token
      );

      fetchPosts();
      onClose(); // Close the modal after posting

    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>✖️</CloseButton> {/* Close button here */}
        <ModalHeader>Create New Post</ModalHeader>
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
          {isSubmitting ? "Submitting..." : "Submit Post"}
        </SubmitButton>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
