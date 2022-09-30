import React, { useState , useEffect }  from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner'
export default function News(props) {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] =useState(0)

    //props 

    let {category , pageSize} = props

    //getting data for the first time

    // document.getElementById('loadBtn').style.display='none'
    // setLoading(true)
    // let url=`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${page}&pageSize=${pageSize}`
    // let data =  fetch(url)
    // let parsedData=  data.json()
    // console.log(parsedData)
    // setArticles(parsedData.articles)
    // setTotalResults(parsedData.totalResults)
    // setLoading(false)
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${page}&pageSize=${pageSize}`;
        
        const fetchData = async () => {

          try {
            const response = await fetch(url);
            const json = await response.json();
            setArticles(json.articles)
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    console.log('test')
    async function handleNextClick(){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        // setLoading(true)
        if(!(page + 1> Math.ceil(totalResults/pageSize))){
            setPage(page+1)
            let url=`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${page}&pageSize=${pageSize}`
            let data = await fetch(url)
            let parsedData= await data.json()
            console.log(parsedData)
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            
        }
        // setLoading(false)

    }

    async function handlePrevClick(){

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        setPage(page-1)
        // setLoading(true)
        let url=`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${page}&pageSize=${pageSize}`
        fetch(url)
        .then((response) => response.json())
        .then((data) =>
        {
            setArticles(data.articles)
        })
        // setLoading(false)

    }
        

    


    return (
        <div>
            <div className="container my-3">
                <h2 className='text-center'>NewsApp Top  {category}  headlines </h2>
                {loading && <Spinner/>}
                <div className="row">
                    {
                        articles.map((element,index)=>{
                            
                            return (
                                
                                <div className="col-md-4 my-2">
                                    <NewsItem key={index}  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                    source={element.source.name} searchString={searchString}/>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="my-4 d-flex justify-content-between">

                <button disabled={page<=0} className='btn btn-primary' onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page + 1> Math.ceil(totalResults/pageSize)} className='btn btn-primary' onClick={handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        </div>
    )
}
