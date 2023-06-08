import React from "react";

function article_1() {
	return {
		date: "08 June 2023",
		title: "Coming Soon",
		description:
			"Coming Soon",
		keywords: [
			"Anthony",
			"Anthony S.",
			"Anthony Suryajaya",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Coming Soon</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
