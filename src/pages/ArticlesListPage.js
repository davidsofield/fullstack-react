import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articleContent from '../pages/article-content'

const ArticlesListPage = () => (
	<>
		<ArticlesList articles={articleContent} />
	</>
)

export default ArticlesListPage
