'use client';

import CreatePostButton from "@/components/create-post-button";
import Modal, { Post } from "@/components/modal";
import { useAuth } from "@/context/auth-provider";
import { useState } from "react";

export default function Profile() {
  const { isAuthenticated, keycloak } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);



  const handleModalClose = () => {
    setIsModalOpen(false);
    setPostToEdit(null);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const username = keycloak.tokenParsed?.preferred_username ?? 'User';


  return (
    <div>
      <h1>Welcome {username} 🐝</h1>
      {isAuthenticated && <CreatePostButton onClick={handleModalOpen} />}
      {isModalOpen && <Modal onClose={handleModalClose} postToEdit={postToEdit} />}

    </div>
  );
}
