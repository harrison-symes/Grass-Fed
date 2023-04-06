import { createSelector } from "@reduxjs/toolkit";
import { QUERY_PARAMS } from "../constants/router.constants";
import { TStoreState } from "../reducers";

export const getPath = (state: TStoreState) => state.router?.location?.pathname;

export const getQueryParams = (state: TStoreState) =>
  state.router?.location?.search;

export const getQueryParam = (param: QUERY_PARAMS) =>
  createSelector(getQueryParams, (params) => {
    if (typeof params === "undefined") {
      return undefined;
    }

    const paramObj = new URLSearchParams(params);

    return paramObj.get(param);
  });

export const getPageNumber = createSelector(
  getQueryParam(QUERY_PARAMS.PAGE_NUMER),
  (page): number => {
    const pageNumber = parseInt(page ?? "");
    if (isNaN(pageNumber)) {
      return 1;
    }

    return pageNumber;
  }
);
