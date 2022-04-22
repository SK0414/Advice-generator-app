import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import styled from '@emotion/styled';

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#202733',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
