"use client";

import { useAppSelector } from "../store/hooks";

const LandingPage = () => {
  const isDarkMode = useAppSelector((state) => state.themeSlice.isDarkMode);

  return <div>Landing Page Availble</div>;
};

export default LandingPage;
