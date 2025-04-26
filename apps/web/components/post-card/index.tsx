"use client";

import React from "react";
import {
  Body,
  Card,
  Header,
  Info,
  SkeletonLine,
  Title,
  ButtonGroup,
  EditButton,
  DeleteButton,
} from "./styles";

interface PostCardProps {
  userId?: string;
  id?: string;
  title?: string;
  content?: string;
  loading?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  canEditOrDelete?: boolean;
  onCardClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  userId,
  id,
  title,
  content,
  loading,
  onEdit,
  onDelete,
  canEditOrDelete,
  onCardClick,
}) => {
  if (loading) {
    return (
      <Card>
        <Header>
          <Info>
            <SkeletonLine width="6rem" height="1rem" />
            <SkeletonLine width="5rem" height="0.875rem" />
          </Info>
        </Header>
        <SkeletonLine width="80%" height="1.25rem" />
        <SkeletonLine height="1rem" />
        <SkeletonLine height="1rem" />
        <SkeletonLine width="90%" height="1rem" />
      </Card>
    );
  }

  return (
    <Card onClick={onCardClick} style={{ cursor: "pointer" }}>
      <Header>
        <Info>
          <span>User #{userId}</span>
          <span>Post ID: {id}</span>
        </Info>
      </Header>
      <Title>{title}</Title>
      <Body>{content}</Body>

      {canEditOrDelete && (
        <ButtonGroup onClick={(e) => e.stopPropagation()}>
          <EditButton onClick={onEdit}>Edit</EditButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ButtonGroup>
      )}
    </Card>
  );
};

export default PostCard;
