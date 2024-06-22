import React from 'react'

const VideoInterview = () => {

  const chat = [
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"When did your symptoms start?",
      lisa:"About 2 days ago, and they’ve quickly gotten worse."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"I had some swelling in my feet and legs a few years ago when I was first diagnosed with cirrhosis. But the swelling wasn’t as bad. It went away after I started taking the medications my doctor prescribed."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
    {
      doctor:"Hello, Lisa. What brings you in today?",
      lisa:"Hi, Doctor. My belly is swollen and feels tight. I also have some swelling in my legs and feet. And I just don’t feel well."
    },
  ]
  
  return (
    <div className='video-and-transcript'>
      <article className='video-container'>
        <video controls className='video-tag'>
          <source src='./videotest.mp4' type='video/mp4'/>
        </video>
      </article>
      <h1 className='interview-transcription-header'>INTERVIEW TRANSCRIPT</h1>

      <aside className='transcription-container'>
     {chat.map((item,index)=>{

      return (
        <div key={index} className='chat-container'>
<article className='doctor-chat'>
  <span className='doctor'>Doctor</span>:
  <p className='doctor-message'>{item.doctor}</p>
</article>
<article className='lisa-chat'>
  <span className='doctor'>Lisa</span>:
  <p className='lisa-message'>{item.lisa}</p>
</article>
        </div>
      )
     })}

      </aside>
    </div>
  )
}

export default VideoInterview
