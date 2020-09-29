import React ,{useState,useEffect} from 'react';
import OneCard from './OneCard';
import './Tab.css';
import Posts from './Posts';
import Pagination from './Pagination'
import './common.css'


const Tab =( {language} ) => {
        const [data,setData]=useState('')
        const [nodata, setNodata] = useState(false);
        const [loading,setLoading]=useState(true)
        const [searchTerm,setSearchTerm]=useState('')
        const [postsPerPage] = useState(3);
        const [currentPage, setCurrentPage] = useState(1);

        
        const token='581c32526a4109eaa9e4cc17c6306e42';
        const endpoint=`https://gnews.io/api/v4/search?q=${searchTerm}&token=${token}&page=20&lang=${language}`;
        

        const fetchNews = (endpoint) => {
            setLoading(false)

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
               
                if(result.totalArticles ===0){
                    setNodata(true)
                    return;
                }    
                setData(result.articles);
                setNodata(false)
                setLoading(true)
            })
            .catch(error => {
                console.log('Error:', error)
                setLoading(true)
            }
            )
    }
    console.log(data)
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
        
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = 
     (data !==undefined)?(data.slice(indexOfFirstPost, indexOfLastPost)):'';
    console.log(indexOfLastPost,indexOfFirstPost,currentPosts)
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
   

    const handleSubmit=(e)=>{  
        e.preventDefault();
        setSearchTerm('');
        
        fetchNews(endpoint); 

    }
    if(nodata){
        return <>
        <div className="input-group mb-3 search-area" style={{padding:'40px'}}>
            <form onSubmit={handleSubmit} style={{boxSizing:'content-box'}}>
            <input type="text" class="form-control" placeholder="Please search here " aria-label="Recipient's username" 
             aria-describedby="basic-addon2" onChange={handleChange} value={searchTerm}/>
            </form>
        <div className="input-group-append button-area">
            <button className="btn btn-outline-secondary" onClick={handleSubmit} type="button">Search</button>
        </div>
        </div>
        <div style={{padding:'25px'}}><h4>Sorry!No data available!Please Search Again!</h4></div>
     </>   
    }
    
      return (
        <>
       <div className="input-group mb-3 search-area" >
            <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Please search here " aria-label="Recipient's username" 
             aria-describedby="basic-addon2" onChange={handleChange} value={searchTerm}/>
            </form>
        <div class="input-group-append button-area" style={{boxSizing:'content-box'}}>
            <button className="btn btn-outline-secondary" onClick={handleSubmit} type="button">Search</button>
        </div>
        </div>
         
         
       { /* <div className='data__body'>
            {data && data.map((dt,i)=>{return(
              <OneCard   src={dt.image} content={dt.content} description={dt.description} title={dt.title}
              name={dt.source.name} url={dt.url} Id={dt.publishedAt} author={dt.source.name} />
          )})}
            
        </div> */}


      <div className='container mt-5'>
       {data!==undefined?
        (<>
        <Posts posts={currentPosts} />
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            language={language}/>
            </>):null}
       
    </div>
  
       </>
      
       );
     }
     
    

export default Tab;

