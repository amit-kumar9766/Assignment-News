import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";
import './Tab.css'

const OneCard=({title,src,description,name,content,url,Id,author})=>{
  const [show,setShow]=useState(true)
  const [like,setLike]=useState(false)
  const [count,setCount]=useState(0)

const handleClick=()=>{
      //setCount(count+1)
      setShow(!show)
      let arr=localStorage.getItem('hide')
      
      let hideArray=JSON.parse(arr)||[];
      
     
      if(hideArray.includes(Id)){
                console.log('favbefore',hideArray)
                hideArray=hideArray.filter( el => el!==Id )
                console.log('favourate',hideArray)
      }
    else
    {hideArray.push(Id)}

    localStorage.setItem('hide',JSON.stringify(hideArray))
}

const onClickLike=()=>{
          setLike(!like)
          let fav=localStorage.getItem('like')
          let likeArray=JSON.parse(fav)||[];

          if(likeArray.includes(Id)){
                    console.log('favbefore',likeArray)
                    likeArray=likeArray.filter( el => el!== Id )
                    console.log('favourate',likeArray)
          }
        else
        {likeArray.push(Id)}

        localStorage.setItem('like',JSON.stringify(likeArray))
}

const date= Id.split('T')[0];



if( localStorage.getItem('hide')?.includes(Id) ){
  return <> No show</>;
}
return (
<Card style={{ width: '15rem' }}>
    <Card.Text>
      <div>{date}</div>
      <div>{author}</div>
    </Card.Text>
  <Card.Img variant="top" src={src}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
      {name}
    </Card.Text>
    
  <div className='btn'><Button onClick={handleClick}>Hide</Button></div>
  <div className='btn'><Button href={`${url}`}>Full Acticle</Button></div>
  <div className='btn'><Button  className="btn__fav" onClick={onClickLike} > {!localStorage.getItem('like')?.includes(Id)  ? "Add to Like" : "Dislike"} </Button></div>
  
  </Card.Body>

</Card>

)}

export default OneCard;