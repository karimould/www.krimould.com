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
import SEO from '../components/util/seo/Seo'
import { i18n } from '../constants/i18n'
import ContactForm from '../components/shared/contact/Form'

interface HomepageData {
  pageContext: {
    locale: string
  }
  fields: {
    slug: string
  }
  data: {
    frontmatter: {
      pageKey: string
      seo_title: string
      seo_desc: string
    }
  }
}

const IndexPage = ({ pageContext: { locale }, ...props }: HomepageData): ReactElement => {
  const { homepageData: data } = props.data
  const { edges: opensourceProjects } = props.data.openSource
  const { projects } = props.data

  return (
    <Layout locale={locale}>
      <SEO lang={locale} metaDescription={data.frontmatter.seo_desc} title={data.frontmatter.seo_title} />
      <Separator distance="large" />
      <Vim black>
        <p>{i18n[locale].about}</p>
      </Vim>
      <Separator distance="large" />
      <Text locale={locale}>CV</Text>
      <Timeline locale={locale} />
      <Separator distance="large" />
      <Text locale={locale}>{i18n[locale].textProjects}</Text>
      <Separator distance="small" />
      <ProjectsContainer locale={locale} projects={projects} />
      <Separator distance="large" />
      <Text locale={locale}>{i18n[locale].techListHeading}</Text>
      <Separator distance="small" />
      <Text preLine locale={locale}>
        {i18n[locale].techListText}
      </Text>
      <div className="flex flex-wrap">
        {i18n[locale].techList.map(
          (list: any, index: number): JSX.Element => (
            <List key={index} heading={list.heading} techList={list.listData} />
          ),
        )}
      </div>
      <Separator distance="large" />
      <Text locale={locale}>{i18n[locale].openSourceHeading}</Text>
      <Separator distance="small" />
      <Text preLine locale={locale}>
        {i18n[locale].openSourceText}
      </Text>
      <Separator distance="small" />
      <Opensource projects={opensourceProjects} />
      <Separator distance="large" />
      <Text preLine locale={locale}>
        {i18n[locale].contactFormHeading}
        <br />
        <br />
        {i18n[locale].contactFormText}
      </Text>
      <Separator distance="small" />
      <div className="md:flex-row flex flex-col-reverse">
        <div className="md:w-2/3 w-full">
          <ContactForm />
        </div>
        <div className="md:w-1/3 w-full">
          <Text preLine locale={locale}>
            {i18n[locale].contactText}
            <a className="underline" href="mailto:karim_om@me.com">
              karim_om@me.com
            </a>
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
    projects: allMarkdownRemark(filter: { frontmatter: { pageKey: { eq: "project" } } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            img
            order
            link
            tags
          }
        }
      }
    }
  }
`
