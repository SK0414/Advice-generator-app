import React from 'react';
import { Global } from '@emotion/react';
import { css } from '@emotion/react';
import ResetCSS from './resetstyle';

export const GlobalStyles: React.FC = () => {
  return <Global styles={ResetCSS} />;
};
