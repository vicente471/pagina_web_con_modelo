import React, {useState} from "react";
import Typewriter from 'typewriter-effect';
import './Home.css';
import image from '../assets/personaje_quieto_hd.png';
import gif   from '../assets/Personaje_Saludando.gif';
import gif_talk   from '../assets/Personaje_Saludando.gif';

const Home = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimationToggle = () => {
      setIsAnimating(prevState => !prevState); // Alterna el estado de la animación
      setShowAnimation(prevState => !prevState); // Alterna si se muestra la animación
    };
    return (
      <div className="home-container">
        <div className="home-box">
          <h1 className="home-title">
            Bienvenido a{" "}
            <Typewriter
              options={{
                strings: ['Visionary IA', 'los mejores modelos de Computación Grafica!'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50, // Ajusta la velocidad de borrado
              }}
            />
          </h1>
          <div className="welcome-box">
            <p className="home-description">
              Visualiza el mejor modelo en 2D de toda la internet, este fue creado a partir de primitivas.
            </p>
          </div>
        </div>
        <div className="home-box2">
          <h1>Mi modelo 2D en React</h1>

          {showAnimation ? (
            <img src={gif} alt="Animación 2D"/>
          ) : (
            <img src={image} alt="modelo 2D" />
          )}
          <div className="options-buttons">
              <button onClick={handleAnimationToggle}>{isAnimating ? "Detener Animación" : "Saludar"}</button>  
              <button onClick={handleAnimationToggle}>{isAnimating ? "Detener Animación" : "Conversar"}</button>  
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Home;