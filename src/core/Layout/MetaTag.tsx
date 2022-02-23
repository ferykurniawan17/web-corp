import React from 'react';
import Head from 'next/head';

type MetaTagProps = {
  title: string;
  description: string;
};

const MetaTag = ({ title, description }: MetaTagProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={description}></meta>
      <meta name={'robots'} content={'index, follow'}></meta>
      <meta name={'googlebot'} content={'index, follow'} />
      <link rel={'icon'} href={'/favicon_io/favicon.ico'} />
      <link rel={'stylesheet'} href={'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'} />
      <link rel={'stylesheet'} href={'https://fonts.googleapis.com/icon?family=Material+Icons'} />
    </Head>
  );
};

export default MetaTag;
