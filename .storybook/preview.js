import { addDecorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Theme from '@/styles/Theme';

initialize();
addDecorator(mswDecorator);

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      enabled: true,
      retry: false,
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <QueryClientProvider client={mockedQueryClient}>
        <ThemeProvider theme={Theme}>
          <Story />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  ),
];
