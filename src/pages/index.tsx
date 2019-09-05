import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import Vim from '../components/shared/vim/Vim'
import Separator from '../components/shared/separator/Separator'
import Text from '../components/shared/text/Text'
import List from '../components/shared/list/List'
import Timeline from '../components/home/timeline/Timeline'
import ProjectsContainer from '../components/home/projects/ProjectsContainer'
import { i18n } from '../constants/i18n'

interface HomepageData {
  fields: {
    slug: string
  }
  frontmatter: {
    pageKey: string
    seo_title: string
    seo_desc: string
    title: string
    text: string
  }
}

interface BlogPosts {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      description: string
      date: string
    }
  }
}

interface IndexProps {
  pageContext: {
    [locale: string]: string
  }
  data: {
    homePageData: HomepageData
    blogPosts: {
      edges: BlogPosts[]
    }
  }
}

const IndexPage = ({ pageContext: { locale }, ...props }: IndexProps): ReactElement => {
  const { homePageData: data } = props.data
  const { edges: posts } = props.data.blogPosts
  return (
    <Layout locale={locale}>
      <Separator distance="large" />
      <Vim black locale={locale} />
      <Separator distance="large" />
      <Text>CV</Text>
      <Timeline locale={locale} />
      <Separator distance="large" />
      <Text>PROJECTS</Text>
      <Separator distance="small" />
      <ProjectsContainer locale={locale} />
      <Separator distance="large" />
      <Text preLine locale={locale}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
      </Text>
      <div className="container-normal flex">
        {i18n[locale].techList.map(
          (list, index): JSX.Element => (
            <List key={index} heading={list.heading} techList={list.listData} />
          ),
        )}
      </div>
      <Separator distance="large" />

      {/* <h1>title: {data.frontmatter.title}</h1>
      <p>Content: {data.frontmatter.text}</p>
      <p>Locale: {locale}</p>
      <h2>{i18n[locale].text}</h2>
      <Link to={locale === 'en' ? '/de' : '/'}>
        <p>Change language</p>
      </Link>
      <h2>BlogPosts:</h2>
      {posts.map(
        ({ node: post }, i): JSX.Element => (
          <div key={i}>
            <h3>Blog Post Title: {post.frontmatter.title}</h3>
            <p>Blog Post Description: {post.frontmatter.description}</p>
            <p>Blog Post Date: {post.frontmatter.date}</p>
            <Link to={post.fields.slug} title="link to blog post">
              Link to blog post
            </Link>
          </div>
        )
      )} */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: markdownRemark(frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
        title
        text
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
