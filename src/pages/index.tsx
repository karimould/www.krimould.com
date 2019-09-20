import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import Vim from '../components/shared/vim/Vim'
import Separator from '../components/shared/separator/Separator'
import Text from '../components/shared/text/Text'
import List from '../components/shared/list/List'
import Timeline from '../components/home/timeline/Timeline'
import ProjectsContainer from '../components/home/projects/ProjectsContainer'
import Opensource from '../components/home/opensource/Opensource'
import SEO from '../components/util/seo/SEO'
import { i18n } from '../constants/i18n'
import ContactForm from '../components/shared/contact/Form'

interface HomepageData {
  pageContext: {
    locale: string
  }
  fields: {
    slug: string
  }
  frontmatter: {
    pageKey: string
    seo_title: string
    seo_desc: string
  }
}

const IndexPage = ({ pageContext: { locale }, ...props }: HomepageData): ReactElement => {
  const { homepageData: data } = props.data
  const { edges: opensourceProjects } = props.data.openSource

  return (
    <Layout locale={locale}>
      <SEO lang={locale} metaDescription={data.frontmatter.seo_desc} title={data.frontmatter.seo_title} />
      <Separator distance="large" />
      <Vim black locale={locale} />
      <Separator distance="large" />
      <Text locale={locale}>CV</Text>
      <Timeline locale={locale} />
      <Separator distance="large" />
      <Text locale={locale}>PROJECTS</Text>
      <Separator distance="small" />
      <ProjectsContainer locale={locale} />
      <Separator distance="large" />
      <Text locale={locale}>TECH I WORKED WITH</Text>
      <Separator distance="small" />
      <Text preLine locale={locale}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
      </Text>
      <div className="flex">
        {i18n[locale].techList.map(
          (list: any, index: number): JSX.Element => (
            <List key={index} heading={list.heading} techList={list.listData} />
          ),
        )}
      </div>
      <Separator distance="large" />
      <Text locale={locale}>TECH I WORKED WITH</Text>
      <Separator distance="small" />
      <Text preLine locale={locale}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
      </Text>
      <Separator distance="small" />
      <Opensource projects={opensourceProjects} />
      <Separator distance="large" />
      <Text preLine locale={locale}>
        CONTACT ME
        <br />
        <br />
        FREE FOR FREELANCE WORK REMOTE AND IN EUROPE KOMM KLAR.
      </Text>
      <Separator distance="small" />
      <div className="flex">
        <div className="w-2/3">
          <ContactForm />
        </div>
        <div className="w-1/3">
          <Text preLine locale={locale}>
            YOU CAN SEND ME A QUICK EMAIL IF YOU DONT WANT TO FILL OUT  THIS FORMULAR. JUST DROP ME A LINE AT
            karim_om@me.com
          </Text>
        </div>
      </div>
      <Separator distance="medium" />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homepageData: markdownRemark(frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
      }
    }
    openSource: allMarkdownRemark(filter: { frontmatter: { pageKey: { eq: "opensource" } } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            link
            tags
          }
        }
      }
    }
  }
`
