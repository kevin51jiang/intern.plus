import { useMemo } from "react";
import { useLocation } from "react-router-dom";

/**
 * Determines the correct location for displaying pages
 * in the app, based on whether or not a route is being
 * displayed in the background.
 */
export const useCalculatedLocation = () => {
  const location = useLocation();
  const calculatedLocation = useMemo(
    () =>
      location.state && location.state.background
        ? location.state.background
        : location,
    [location]
  );

  return calculatedLocation;
};
