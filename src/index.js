import React, {Component} from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = "AIzaSyCZiY2dTfijX2A3yK5kp20PdwOvm9PJAuQ";



class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos : [],
			selectVideo : null
		}
		this.videoSearch('guitar')
	}
	videoSearch(term){
		YTSearch({key : API_KEY, term : term}, (videos) => {
			this.setState({
				videos : videos,
				selectVideo : videos[0]
			})
		})
	};
	render(){
		debugger;
		return (
			<div>
				<SearchBar 
					onSearchChange = {term => this.videoSearch(term)}
				/>
				<VideoDetail 
					video={this.state.selectVideo}
				/>
				<VideoList 
					videos = {this.state.videos} 
					onVideoSelect={selectVideo =>  this.setState({selectVideo}) }
				/>
			</div>
		)
	}
}
ReactDom.render(<App />, document.getElementById("container"));