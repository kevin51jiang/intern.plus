/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCompanyJobs
// ====================================================

export interface GetCompanyJobs_company_jobs_items_company {
  __typename: "Company";
  /**
   * Name of a company.
   */
  name: string | null;
  /**
   * Unique slug for a company.
   */
  slug: string | null;
  /**
   * Average color of the company's logo, in HSL format.
   */
  logoColor: string | null;
}

export interface GetCompanyJobs_company_jobs_items_reviews {
  __typename: "ReviewListResponse";
  /**
   * List items count
   */
  count: number;
}

export interface GetCompanyJobs_company_jobs_items {
  __typename: "Job";
  id: string | null;
  slug: string | null;
  /**
   * Job title
   */
  name: string | null;
  location: string | null;
  company: GetCompanyJobs_company_jobs_items_company | null;
  avgRating: number | null;
  reviews: GetCompanyJobs_company_jobs_items_reviews | null;
  minHourlySalary: number | null;
  maxHourlySalary: number | null;
  hourlySalaryCurrency: string | null;
}

export interface GetCompanyJobs_company_jobs {
  __typename: "JobListResponse";
  /**
   * List items
   */
  items: GetCompanyJobs_company_jobs_items[];
}

export interface GetCompanyJobs_company {
  __typename: "Company";
  jobs: GetCompanyJobs_company_jobs | null;
}

export interface GetCompanyJobs {
  company: GetCompanyJobs_company | null;
}

export interface GetCompanyJobsVariables {
  slug?: string | null;
  query?: string | null;
  offset?: number | null;
  limit?: number | null;
}
