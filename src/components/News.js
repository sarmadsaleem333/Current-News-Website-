 import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading.js'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:"pakistan",
        pageSize:8,
        category:"science"
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        categotry:PropTypes.string
    }
    articles = [
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Adam Hills",
            "title": "The Ashes row proves elite sport is a cut-throat affair – the Lord’s chaps should applaud the Aussies",
            "description": "England’s and Australia’s cricketers are elite athletes who must do whatever they can to win within the rules – even if some people don’t like it, writes Adam Hills",
            "url": "http://www.independent.co.uk/voices/ashes-wicket-england-australia-bairstow-b2368585.html",
            "urlToImage": "https://static.independent.co.uk/2023/07/03/13/e6a1736e993b4905a6639accecd361ccY29udGVudHNlYXJjaGFwaSwxNjg4NDcwNDA2-2.72846169.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-07-03T17:35:04Z",
            "content": "I normally keep my cricketing opinions to myself, but there was an incident during the most recent Ashes Test that I feel I need to comment upon and defend. \r\nThe incident in question involved the En… [+683 chars]"
        },
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": null,
            "title": "PM slams Aussies as Poms demand apology",
            "description": "British Prime Minister Rishi Sunak on Monday aimed a verbal bouncer at Australia&rsquo;s cricketers after the Lord&rsquo;s Ashes match as Geoff Boycott demanded a formal apology from Pat Cummins.",
            "url": "https://www.news.com.au/sport/cricket/british-prime-minister-slams-aussies-as-poms-demand-formal-apology/news-story/80bf171a2f5d15508a14f8559692ca69",
            "urlToImage": "https://content.api.news/v3/images/bin/3e08442147285239cca6f8eac897b742",
            "publishedAt": "2023-07-03T16:43:00Z",
            "content": "British Prime Minister Rishi Sunak on Monday aimed a verbal bouncer at Australia’s cricketers after the Lord’s Ashes match as Geoff Boycott demanded a formal apology from Pat Cummins.\r\nJonny Bairstow… [+2431 chars]"
        },
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": "Andrew McMurtry",
            "title": "Pat Cummins nails English journalist",
            "description": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.",
            "url": "https://www.news.com.au/sport/cricket/cummins-nails-english-journalist-after-question-about-bowling-underarm/news-story/111a81c2c04cd00849d0d82ce7f0cfb1",
            "urlToImage": "https://content.api.news/v3/images/bin/50d58d946c23c336936037209c940d8f",
            "publishedAt": "2023-07-03T13:37:00Z",
            "content": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.\r\nThe world erupted when Auss… [+3023 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/everything?q=${this.props.country}&from=2023-06-05&sortBy=publishedAt&apiKey=ac85445efd5649439c32a91d0f4408cf&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults});
        
      

    }
   handleNextClick= async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url=`https://newsapi.org/v2/everything?q=${this.props.country}&from=2023-06-05&sortBy=publishedAt&&apiKey=ac85445efd5649439c32a91d0f4408cf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
    });
}}
handlePreviousClick=async()=>{
    let url=`https://newsapi.org/v2/everything?q=${this.props.country}&from=2023-06-05&sortBy=publishedAt&apiKey=ac85445efd5649439c32a91d0f4408cf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
    loading:false});
   }
    render() {
        return (
            <div className='container my-3'>
                <div className='row'>
                    <h1 className="text-center">MSS News--Top Headlines</h1>
                   {this.state.loading && <Loading/>}
                    {!this.state.loading&& this.state.articles.map(( element) => {
                       return  <div className='col-md-4' key={element.url}>
                       <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        })
                    }
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>

        );
    }
}
export default News

