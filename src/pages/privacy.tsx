import React from 'react'
import Layout from '../components/layouts/main/Layout'
import { LegalpageProps } from './imprint'
import SEO from '../components/util/seo/Seo'
import { graphql } from 'gatsby'

const Privacy = ({
  pageContext: { locale },
  data: {
    siteData: { html },
  },
}: LegalpageProps): JSX.Element => {
  return (
    <Layout locale={locale} legalpage={true}>
      <SEO lang={locale} metaDescription="Privacy page for www.krimould.com" title="Karim Ould Mahieddine - Privacy" />
      <div className="bg-white border-black border-solid border-2 mt-56 mb-20">
        <div className="pl-1 py-4 border-b-2 border-black flex">
          <div className="ml-4 bg-black w-3 h-3 rounded-full" />
          <div className="ml-2 bg-black w-3 h-3 rounded-full" />
          <div className="ml-2 bg-black w-3 h-3 rounded-full" />
        </div>
        <div className="text-blueScreenBg text-md p-5">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Privacy

export const query = graphql`
  query privacyContent($locale: String) {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_privacy" }, locale: { eq: $locale } }) {
      html
    }
  }
`
