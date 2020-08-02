import React from 'react'
import Releases from 'screens/main'
import { getPaths, getProps } from 'features/releases/next-page-functions'
import { PageDataProvider } from 'features/releases/page-data'

function GamesPage(props) {
  return (
    <PageDataProvider parsedUrl={props.parsedURL}>
      <Releases {...props} />
    </PageDataProvider>
  )
}

export async function getStaticPaths() {
  return getPaths()
}

export async function getStaticProps(context) {
  return getProps(context, 'games')
}

export default GamesPage
