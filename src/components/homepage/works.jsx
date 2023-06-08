import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn.worldvectorlogo.com/logos/philip-morris-international.svg"
								alt="PMI"
								className="work-image"
							/>
							<div className="work-title">Phillip Morris International</div>
							<div className="work-subtitle">
								Supply Chain Analyst
							</div>
							<div className="work-duration">Feb 2023 - June 2023</div>
						</div>

						<div className="work">
							<img
								src="https://www.dicoding.com/img/bangkit/logo.svg"
								alt="bangkit"
								className="work-image"
							/>
							<div className="work-title">
								Bangkit Academy by Google, Gojek, Tokopedia and Traveloka
							</div>
							<div className="work-subtitle">
								Machine Learning Student
							</div>
							<div className="work-duration">
								Feb 2021 - Jul 2021
							</div>
							
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C560BAQHcDguTzZbgWA/company-logo_200_200/0/1638283446853?e=1694044800&v=beta&t=mKTFbEfwpyg0t4l8-MFBIUp5bOOtoPza8wq_UKoZ5pw"
								alt="bangkit"
								className="work-image"
							/>
							<div className="work-title">
								PT. Dumas Tanjung Perak Shipyards
							</div>
							<div className="work-subtitle">
								Engineering Intern
							</div>
							<div className="work-duration">
								Feb 2021 - Mar 2021
							</div>
							
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
