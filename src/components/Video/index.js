import React from 'react';

function Video(props) {
  return (
    <video className={props.className}
      playsinline="" autoplay="" muted="" loop="true" 
      src="https://storage.coverr.co/videos/Fire-Snow?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc4Mzk1MDM5fQ.idR1zOi7fr9mVWCCW_pRLVcNWcn2qt98pjcsd06g7qo" 
      poster="https://storage.coverr.co/posters/Fire-Snow">
      </video>
  );
}

export default Video;
