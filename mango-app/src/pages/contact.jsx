import React,{useState} from 'react';
import Header from '../components/header';

export default function Contact() {
    const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <Header/>
      <h1>Contact Us</h1>
      <p>Do you like this website</p>
      <div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      </div>
      
      <div>
        <p>Likes:{likes}</p>
        <p>disikes:{dislikes}</p>
      </div>
    </div>
  );
}