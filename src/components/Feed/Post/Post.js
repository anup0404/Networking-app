import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './Post.css'

function Post({id,userId,name,tags,message,likeCount,email}) {

const[isLiked,setIsLiked]=useState(false)


function changeLike(){
    if(isLiked===true){
        setIsLiked(false)
    }else{
        setIsLiked(true)
    }
}
  return (
    <div className='posts_container'>
        <div className='posts_header'>
<p>
    <Avatar>
        {name?name[0]:"J"}
        </Avatar>
</p>
<div className='posts_info'>
    <p className='posts_name'>{name? name:'John'}</p>
    <p className='posts_des'>{email?email:'john@gmail.com'}</p>

</div>
</div>
<div className='posts_body'>
    <p>{message}</p>
</div>
<div className='posts_options'>
    <div className='icon' onClick={changeLike}>
   {isLiked? <ThumbUpIcon />:<ThumbUpOffAltIcon/>}
    <p>{isLiked ? likeCount+1:(likeCount===0?" ":likeCount)}</p>
    </div>
</div>
        </div>
      

  )
}

export default Post
