import React, {Component} from 'react'
import idx from 'idx'
import {ContentWrapper} from '../../style/shared'
import FeaturedWorkSection from '../FeaturedWorkSection'
import FeaturedListSection from '../FeaturedListSection'
import Head from '../Head'
import {META} from '../../utils/constants'

export default class extends Component {
	constructor() {
		super()
		this.state = {
			category: null
		}
		this.setCategory = this.setCategory.bind(this)
	}

	setCategory(category) {
		this.setState({category})
	}

	getData() {
		const {data} = this.props
		return idx(data, _ => _.works.edges)
	}

	getWorks() {
		const {category} = this.state
		const works = this.getData()

		return works && works.filter(
			({work}) => category
			? !work.featured && work.category.includes(category)
			: !work.featured)
	}

	getFeaturedWork() {
		const works = this.getData()
		return works && works.filter(({work}) => work.featured)
	}

	render() {
		const {category} = this.state

		return (<ContentWrapper>
			<Head {...META.works} image={META.common.image}/>
			<FeaturedWorkSection works={this.getFeaturedWork()}/>
			<FeaturedListSection works={this.getWorks()} category={category} setCategory={this.setCategory}/>
		</ContentWrapper>)
	}
}

// import React, {Component} from 'react'
// import idx from 'idx'
// import {ContentWrapper} from '../../style/shared'
// import FeaturedWorkSection from '../FeaturedWorkSection'
// import FeaturedListSection from '../FeaturedListSection'
// import Head from '../Head'
// import {META} from '../../utils/constants'
//
// export default class extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			category: null
// 		}
// 		this.setCategory = this.setCategory.bind(this)
// 	}
//
// 	setCategory(category) {
// 		this.setState({category})
// 	}
//
// 	getData() {
// 		const {data} = this.props
// 		return idx(data, _ => _.work.edges)
// 	}
//
// 	getWork() {
// 		const {category} = this.state
// 		const work = this.getData()
//
// 		return work && work.filter(
// 			({work}) => category
// 			? !title.featured && title.category.includes(category)
// 			: !work.featured)
// 	}
//
// 	getFeaturedWork() {
// 		const work = this.getData()
// 		return work && work.filter(({work}) => work.featured)
// 	}
//
// 	render() {
// 		const {category} = this.state
//
// 		return (<ContentWrapper>
// 			<Head {...META.work} image={META.common.image}/>
// 			<FeaturedWorkSection work={this.getFeaturedWork()}/>
// 			<FeaturedListSection work={this.getWork()} category={category} setCategory={this.setCategory}/>
// 		</ContentWrapper>)
// 	}
// }

// import FeaturedListSection from '../FeaturedListSection'
// import FeaturedWorkSection from '../FeaturedWorkSection'

// export default class extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			category: null
// 		}
// 		this.setCategory = this.setCategory.bind(this)
// 	}
//
// 	setCategory(category) {
// 		this.setState({category})
// 	}
//
// 	getData() {
// 		const {data} = this.props
// 		return idx(data, _ => _.work.edges)
// 	}
//
// 	getWork() {
// 		const {category} = this.state
// 		const work = this.getData()
//
// 		return work && work.filter(
// 			({work}) => category
// 			? !work.featured && work.category.includes(category)
// 			: !work.featured)
// 	}
//
// 	getFeaturedWork() {
// 		const work = this.getData()
// 		return work && work.filter(({work}) => work.featured)
// 	}
//
// 	render() {
// 		const {category} = this.state
//
// 		return (<ContentWrapper>
// 			<Head {...META.work} image={META.common.image}/>
// 			<FeaturedWorkSection work={this.getFeaturedWork()}/>
// 			<FeaturedListItem work={this.getWork()} category={category} setCategory={this.setCategory}/>
// 		</ContentWrapper>)
// 	}
// }