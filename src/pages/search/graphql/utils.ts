/* eslint-disable @typescript-eslint/camelcase */
import {
  IGenericCardItem,
  ICompanyCardItem,
  IJobCardItem,
  IReviewJobCardItem,
} from "src/types";
import {
  GetAllSearch,
  GetAllSearch_companiesList_items,
  GetAllSearch_jobsList_items,
  GetAllSearch_reviewsList_items,
} from "src/types/generated/GetAllSearch";
import { getPastelColor, getDarkColor } from "src/utils/getColor";

/**
 * TODO: documentation
 */
export const buildCompanyCard = (
  item: GetAllSearch_companiesList_items
): ICompanyCardItem => ({
  slug: item.slug || "",
  name: item.name || "",
  desc: item.desc || "",
  numRatings: item.reviews ? item.reviews.count : 0,
  avgRating: item.avgRating || 0,
  logoSrc: item.logoSrc || "",
  color: getPastelColor(),
});

export const buildJobCard = (
  item: GetAllSearch_jobsList_items
): IJobCardItem => ({
  id: item.id || "",
  name: item.name || "",
  location: item.jobLocation || "",
  minHourlySalary: item.minHourlySalary || 0, // hourly
  maxHourlySalary: item.maxHourlySalary || 0, // hourly
  salaryCurrency: item.salaryCurrency || "", // hourly
  numRatings: item.reviews ? item.reviews.count : 0,
  avgRating: item.avgRating || 0, // score out of 5
  color: getDarkColor(),
});

export const buildReviewCard = (
  item: GetAllSearch_reviewsList_items
): IReviewJobCardItem => ({
  id: item.id || "",
  companyName: item.company ? item.company.name || "" : "",
  jobName: item.job ? item.job.name || "" : "",
  rating: item.overallRating || 0,
  body: item.body || "",
  tags: item.tags || "",
  color: getDarkColor(),
});

export const buildSearchResultCardsList = (
  data?: GetAllSearch
): IGenericCardItem[] => {
  let companyResults: ICompanyCardItem[] = [];
  let jobResults: IJobCardItem[] = [];
  let reviewResults: IReviewJobCardItem[] = [];

  if (data) {
    if (data.companiesList) {
      companyResults = data.companiesList.items.map(buildCompanyCard);
    }

    if (data.jobsList) {
      jobResults = data.jobsList.items.map(buildJobCard);
    }

    if (data.reviewsList) {
      reviewResults = data.reviewsList.items.map(buildReviewCard);
    }
  }

  return [...companyResults, ...jobResults, ...reviewResults];
};