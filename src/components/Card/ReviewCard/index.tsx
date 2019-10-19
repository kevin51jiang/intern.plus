import React, { useCallback } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";

import { hoverStyles } from "src/theme/snippets";
import StarRating from "src/components/StarRating";
import Text from "src/components/Text";
import Card, { ICardProps } from "../RawCard";

export interface IReviewCardProps extends ICardProps {
  heading: string | null;
  subheading: string | null;
  rating: number | null;
  linkTo: string;
}

const Container = styled(Card)`
  position: relative;
  display: inline-grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "heading    rating"
    "subheading subheading"
    "contents   contents";

  ${hoverStyles}

  & > .heading {
    grid-area: heading;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > .rating {
    grid-area: rating;
  }

  & > .subheading {
    grid-area: subheading;
    padding-top: 5px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > .contents {
    grid-area: contents;
    padding-top: 10px;

    overflow: hidden;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }
`;

const ReviewCard: React.FC<IReviewCardProps> = ({
  heading,
  subheading,
  rating,
  color,
  linkTo,
  children,
  ...rest
}) => {
  /**
   * Go to review page while setting state
   * so that the current page now becomes the
   * background for the review modal.
   */
  const location = useLocation();
  const history = useHistory();
  const onClickOpenModal = useCallback(
    () =>
      history.push({
        pathname: linkTo,
        state: {
          background: location,
        },
      }),
    [history, linkTo, location]
  );

  return (
    <Container
      color="greyLight"
      role="link"
      onClick={onClickOpenModal}
      tabIndex={0}
      {...rest}
    >
      <Text className="heading" variant="heading3" color={color}>
        {heading}
      </Text>
      <Text className="subheading" variant="heading4" color="greyDark">
        {subheading}
      </Text>
      <StarRating maxStars={5} filledStars={rating || 0} readOnly />
      <div className="contents">{children}</div>
    </Container>
  );
};

export default ReviewCard;
