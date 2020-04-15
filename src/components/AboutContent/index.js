import React from "react";
import Head from "../Head";
import AboutList from "../AboutList";
import AboutListItem from "../AboutListItem";
import AboutIntroSection from "../AboutIntroSection";
import {META} from "../../utils/constants";
import {ContentWrapper} from "../../style/shared";
import {ListsSection, SkillsList} from "./style";

import SkillsListItem from "../SkillsListItem";
// import FeaturedListItem from "../FeaturedListItem";
import JobListItem from "../JobListItem"

export default({data}) => {
	const {jobs, skills, work} = data;

	return (<ContentWrapper>
		<Head {...META.profile} image={META.common.image}/>

		<AboutIntroSection content={() => <> < p > I work with design and business teams at Zoomforth to build the best products for our highly visible clients. {
				''
			}
			</p>
		<p>
			<a href="https://github.com/evanszymkowicz" target="_blank" rel="noopener noreferrer">See what I am working on
			</a> < a href = "https://evan.szymkowicz@evanwolf.tech" target = "_blank" rel = "noopener noreferrer" > or contact me to learn more</a>.</p>
	</>}/>

		<ListsSection>
			{
				jobs.edges.length > 0 && <AboutList title='Background' list={() => jobs.edges.map(({
							job
						}, i) => (<JobListItem key={i} {...job}/>))}/>
			}
			{
				skills.edges.length > 0 && <AboutList title='Technology' list={() => skills.edges.map(({
							skill
						}, i) => (<SkillsListItem key={i} {...skill}/>))}/>
			}
		</ListsSection>
	</ContentWrapper>)
}
