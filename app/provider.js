"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader
        color="#ffffff70"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        easing="ease"
      />
      <Toaster />
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
