import React from 'react'
import MovieCard from './MovieCard'


function MovieList() {

return (
    <div className='movie-list'>
      <MovieCard 
      title = 'Avatar'
      description = "Avatar / Cameron, James. Metteur en scène ou réalisateur
      Jake Sully , un ancien marine paraplégique, est recruté pour se rendre sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime. Parce que l'atmosphère de Pandora est toxique, les humains ont créé des doubles d'eux-mêmes, des avatars."/>
      <MovieCard 
      title = 'The Lion King' 
      description= " L'histoire se déroule sur les hautes terre d'Afrique ou règne un lion tout puissant nommer mufasa qui règne sur tout les animaux de la savane . Les animaux de la jungle le respectent et l' admirent pour sa sagesse et sa générosité. Son jeune fils Simba sait qu'un jour il lui succèdera ." />
      <MovieCard 
      title = 'Spider-Man'
      description = "Peter Parker, orphelin à l'âge de six ans, est élevé par son oncle et sa tante, Benjamin et May Parker. Peter est mordu par une araignée radioactive à la suite d'une expérience. Il va alors développer des super-pouvoirs, dont une force surhumaine, une grande agilité, et la capacité de 'coller' aux parois."/>

      

    </div>
  )
}

export default MovieList