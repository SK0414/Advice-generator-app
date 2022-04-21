import { GlobalStyles } from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Theme from "@/styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
