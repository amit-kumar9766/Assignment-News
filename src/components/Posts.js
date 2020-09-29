import React from 'react';
import OneCard from './OneCard';

const Posts = ({ posts}) => {
 
  return (
    <ul className=''>
       <div className='data__body'>
            {posts && posts.map((dt,i)=>{return(
              <OneCard   src={dt.image} content={dt.content} description={dt.description} title={dt.title}
              name={dt.source.name} url={dt.url} Id={dt.publishedAt} author={dt.source.name} />
          )})}
        </div>
      
    </ul>
  );
};

export default Posts;