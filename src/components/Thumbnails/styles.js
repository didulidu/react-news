import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

export const CardHeader = styled.header`
  padding: 1rem 1.5625rem;
  background-color: #e8e8e8;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  transition: background-color 0.3s ease-in-out;
`;

export const CardType = styled.p`
  display: -webkit-box;
  margin-bottom: 0.5rem;
  font-weight: bold;
  overflow: hidden;
  text-transform: uppercase;
  strong {
    font-family: FavoritPro-Medium;
  }
`;

export const CardTitle = styled.h5`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  margin: 0.625rem 0;
  overflow: hidden;
`;

export const CardDescription = styled.div`
  display: -webkit-box;
  overflow: hidden;
  font-size: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 0.75rem;
`;

export const CardLink = css`
  text-decoration: none;
`;

export const imageStyle = css`
  height: 15rem;
  object-fit: cover;
  width: 100%;
`;
