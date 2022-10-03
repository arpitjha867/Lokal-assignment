// Working on search feature
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class SearchComponent extends Component {

    static defaultProps={
        pageSize:10,
    }
    capitalizeFirstLetter=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props){
        super(props)
        this.state={
            articles:[],
            page:1,
            totalResults:0,
            loading:true
        } 
        document.title=`NewsApp/${this.capitalizeFirstLetter(this.props.searchStr)}` 
    }
    //getting the data for the first time 
    async componentDidMount(){
        console.log("component did mount called")
        let url=`https://newsapi.org/v2/everything?q=${this.props.searchStr}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults,loading:false})


    }

    handleNextClick= async ()=>{
        console.log("handle next click called ")
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        this.setState({loading:true})
        if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/everything?q=${this.props.searchStr}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading:false
        })
    }
    }

    handlePrevClick=async ()=>{
        console.log("handle prev click called ")        
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/everything?q=${this.props.searchStr}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
        })
    }
 
    render() {
        return (
            <div>
                <div className="container my-3">
                            <h2 className='text-center text-light'>NewsApp On {this.props.searchStr} </h2>
                            <hr />
                            {this.state.loading && <Spinner/>}
                            <div className="row">
                                {
                                    this.state.articles.map((element,index)=>{
                                        return (
                                            <div className="col-md-4 my-2">
                                                <NewsItem key={index}  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                                source={element.source.name}/>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="my-4 d-flex justify-content-between">
                            
                            <button disabled={this.state.page<=0} className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
                            <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-primary' onClick={this.handleNextClick} >Next &rarr;</button>
                            </div>
                </div>        
            </div>
        )
    }
}
                                                