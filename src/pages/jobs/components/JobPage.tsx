/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo, useState, useCallback } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useScrollTopOnMount } from "src/utils/hooks/useScrollTopOnMount";
import { useSearch, useSearchResults } from "src/utils/hooks/useSearch";
import { RESULTS_PER_PAGE } from "src/utils/constants";

import { IReviewUserCardItem } from "src/types";
import { GetJobDetails } from "src/types/generated/GetJobDetails";
import { GetJobReviews } from "src/types/generated/GetJobReviews";
import { GET_JOB_DETAILS, GET_JOB_REVIEWS } from "../graphql/queries";
import { buildJobDetails, buildJobReviewsCardList } from "../graphql/utils";

import { PageContainer, ResultsDisplay } from "src/components";
import JobDetailsCard from "./JobDetailsCard";

/*******************************************************************
 *                  **Utility functions/constants**                *
 *******************************************************************/
/**
 * Creates markup for the title in the tab bar.
 */
const getTitleMarkup = (name?: string) => `Tugboat${name ? ` | ${name}` : ""}`;

const reviewFilterer = (filterBy: string) => (review: IReviewUserCardItem) =>
  review.authorName.toLowerCase().includes(filterBy) ||
  review.date.toLowerCase().includes(filterBy) ||
  review.body.toLowerCase().includes(filterBy) ||
  review.tags.toLowerCase().includes(filterBy);

/*******************************************************************
 *                            **Styles**                           *
 *******************************************************************/
const JobPageContainer = styled(PageContainer)`
  overflow: hidden;
`;

/*******************************************************************
 *                           **Component**                         *
 *******************************************************************/
const JobPage = () => {
  useScrollTopOnMount();

  /**
   * Fetch the job with the corresponding id.
   */
  const { jobId } = useParams();
  const {
    loading: detailsLoading,
    error: detailsError,
    data: detailsData,
  } = useQuery<GetJobDetails>(GET_JOB_DETAILS, {
    variables: { id: jobId },
  });

  const jobDetails = useMemo(
    () =>
      detailsData && detailsData.job
        ? buildJobDetails(detailsData.job)
        : undefined,
    [detailsData]
  );

  const {
    searchQuery,

    page,
    isEndOfResults,
    isNewSearch,
    isInitialSearch,

    setIsEndOfResults,
    onNewSearch,
    onNextBatchSearch,
  } = useSearch();

  const {
    loading: jobReviewsLoading,
    error: jobReviewsError,
    data: jobReviewsData,
  } = useQuery<GetJobReviews>(GET_JOB_REVIEWS, {
    variables: {
      query: searchQuery,
      offset: (page - 1) * RESULTS_PER_PAGE,
      limit: RESULTS_PER_PAGE,
    },
    skip: isInitialSearch, // do not make an API call if search query is empty (on initial load)
  });

  const jobReviews = useSearchResults(
    isNewSearch,
    setIsEndOfResults,
    buildJobReviewsCardList,
    jobReviewsData
  ) as IReviewUserCardItem[];

  const filteredReviews = useMemo(() => {
    const normalizedQuery = (searchQuery || "").toLowerCase();
    const filterFn = reviewFilterer(normalizedQuery);
    return jobReviews.filter(filterFn);
  }, [jobReviews, searchQuery]);

  return (
    <>
      <Helmet>
        <title>{getTitleMarkup(jobDetails && jobDetails.name)}</title>
      </Helmet>

      <JobPageContainer>
        <JobDetailsCard
          loading={detailsLoading}
          error={detailsError !== undefined}
          jobInfo={jobDetails}
          onTriggerSearch={onNewSearch}
        />
        <ResultsDisplay
          searched={!isInitialSearch}
          loading={jobReviewsLoading}
          error={jobReviewsError !== undefined}
          noMoreResults={isEndOfResults}
          searchResults={filteredReviews}
          onResultsEndReached={onNextBatchSearch}
        />
      </JobPageContainer>
    </>
  );
};

export default JobPage;
