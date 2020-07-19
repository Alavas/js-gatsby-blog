import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { SocialIcon } from 'react-social-icons'
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
					<ul
						style={{ listStyle: 'none', padding: '10px' }}
						className="contact-list"
					>
						<li>
							<SocialIcon
								url="mailto:justin@justinsavala.com"
								network="email"
							/>{' '}
							Send me an Email &#128512;
						</li>
						<li>
							<SocialIcon
								url="https://github.com/alavas/"
								bgColor="black"
							/>{' '}
							Check out my GitHub &#128295;
						</li>
						<li>
							<SocialIcon url="https://www.linkedin.com/in/justin-savala/" />{' '}
							Have a look at my LinkedIn &#128373;
						</li>
						<li>
							<SocialIcon url="https://www.youtube.com/user/JSSavala" />{' '}
							I've got a few random YouTube videos &#127871;
						</li>
					</ul>
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
