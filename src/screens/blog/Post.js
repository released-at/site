import React from 'react'
import Head from 'next/head'
import slugify from '@sindresorhus/slugify'
import styled from '@emotion/styled'
import Md from 'react-markdown'

const Styled = styled.div`
  h1 {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    margin-top: var(--vertical-4);
    margin-bottom: var(--vertical-4);

    @media (min-width: 768px) {
      margin-top: 0;
      margin-bottom: var(--vertical-1);
    }
  }

  .md-wrapper {
    display: flex;
    justify-content: center;
  }

  .text-wrapper {
    width: 100%;
    max-width: 768px;

    h2 {
      line-height: 1.3;
    }

    a {
      text-decoration: underline;
    }
  }
`

function Post({ post }) {
  const slug = slugify(post.title)
  const metaTitle = `${post.title}. Читать на Released`
  const url = `https://released.at/blog/${post.id}-${slug}`
  const description = `Новости из мира игр, кино и сериалов в блоге Released`

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={description} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={metaTitle} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Styled>
        <h1>{post.title}</h1>
        <div className="md-wrapper">
          <div className="text-wrapper">
            <Md source={post.body} />
          </div>
        </div>
      </Styled>
    </>
  )
}

export default Post
