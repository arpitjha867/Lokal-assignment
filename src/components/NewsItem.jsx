import React from 'react'

export default function NewsItem(props) {
    let {title,description,imageUrl,newsUrl,author,source} = props
    return (
        <div>
            <div className="card" style={{width: "400px"}}>
            
                <div style={{display:'flex',
                            
                            position:'absolute',
                            right:'0'

                        }}>
                
                <span className="badge rounded-pill bg-danger">
                {source}
                </span>
                </div>
                    <img src={imageUrl?imageUrl:"https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"} className="card-img-top" alt="pictures"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary" >Read more</a>
                </div>
            </div>
        </div>
    )
}
