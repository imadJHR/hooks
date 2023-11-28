import React from "react"
import { useState } from "react"

function MovieCard(props) {
  const [value , setValue] = useState("Avatar / Cameron, James. Metteur en scène ou réalisateur Jake Sully , un ancien marine paraplégique, est recruté pour se rendre sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime. Parce que l'atmosphère de Pandora est toxique, les humains ont créé des doubles d'eux-mêmes, des avatars.")
  function update (){
    setValue('imad')
    console.log(update)
  }

  
  

 
  return (
   <div>

        <li>
              <h2 id='title'>{props.title}</h2>
              <p id='description'>{props.description}</p>
              <button onClick={update}>Show Rating</button>
        </li>


   </div>
  )
}

export default MovieCard