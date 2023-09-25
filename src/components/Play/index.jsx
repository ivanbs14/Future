import { useEffect, useState } from "react";
import { Container } from "./style";

export const Play = ({videoId}) => {
   const [embedUrl, setEmbedUrl] = useState('');

   useEffect(() => {
     setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
   }, [videoId]);
 
  return (
      <Container>
         <iframe
           src={embedUrl}
           title="YouTube video player"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           
         ></iframe>
      </Container>
  );

}