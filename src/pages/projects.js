import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = ({ data: { site } }) => {
	return (
		<Layout>
			<Helmet>
				<title>Contact — {site.siteMetadata.title}</title>
				<meta
					name="description"
					content={'Contact page of ' + site.siteMetadata.description}
				/>
			</Helmet>
			<div className="two-grids -contact">
				<div>
					<h1 className="post-title">Get in Touch</h1>
					<p>Let me help you with your next project.</p>
				</div>
			</div>
		</Layout>
	)
}
export default ContactPage
export const pageQuery = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
