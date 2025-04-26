"use client";

import React from "react";
import {
  Body,
  Card,
  Header,
  Info,
  SkeletonLine,
  Title,
} from "./styles";

interface PostCardProps {
  userId?: string;
  id?: number;
  title?: string;
  content?: string;
  loading?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ userId, id, title, content, loading }) => {
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
    <Card>
      <Header>
        <Info>
          <span>User #{userId}</span>
          <span>Post ID: {id}</span>
        </Info>
      </Header>
      <Title>{title}</Title>
      <Body>{content}</Body>
    </Card>
  );
};

export default PostCard;
