import React, { useEffect, useState } from "react";
import "./styles.css";
import Sonido from "./sound.mp3";
import StylizedButton from "./button";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = (state) => setPlaying(state);
  audio.loop = true;

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const PomodoroApp = () => {
  const [isRunning, setRunning] = useState(false);
  const [isWorkTime, setWorkTime] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  
  const [counter, setCounter] = useState(25);
  const [progress, setProgress] = useState(0);

  const [playing, toggle] = useAudio(Sonido);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        calculateTimeLeft();
        waveCalculator()
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds, isRunning]);

  const calculateTimeLeft = () => {
    if (seconds > 0) setSeconds(seconds - 1);

    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    // resetea el temporizador cuando llega a 0:0
    if (seconds === 0 && minutes === 0) {
      setTiempo(25, true, false)
      // -----
      toggle(true);
    } else {
      toggle(false);
    }
  };

  const setTiempo = (minutes = 5, isWorkTime = false, running = true) => {
    setMinutes(minutes);
    setCounter(minutes);
    setSeconds(0);
    setRunning(running);
    setWorkTime(isWorkTime);
  };

  const waveCalculator = () => {
    let secondsLeft = (minutes * 60) + seconds
    let onePorcent = (counter * 60) / 100
    setProgress(100 - Math.round(secondsLeft/onePorcent))
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F6F6F6",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <div id="container" className="d-flex flex-column align-items-center">
        <h6>Pomodoro Clock</h6>
        <div className="counter mb-4 mt-3">
          <div
            style={{
              background: 
                `linear-gradient(0deg, rgba(17,255,0,1) 0%, rgba(0,255,230,1) ${progress}%, rgba(255,255,255,0) ${progress}%)`,
            }}
          >
            <h1>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          </div>
          <h1 id="ghostText">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>

        {!isRunning ? (
          <StylizedButton label="Empezar" onPress={() => setRunning(true)} />
        ) : (
          <StylizedButton label="Pausa" onPress={() => setRunning(false)} />
        )}

        {isWorkTime ? (
          <div className="d-flex flex-column gap-3 mt-4 w-100">
            <StylizedButton
              label="Descaso 5 mins"
              onPress={() => setTiempo(5)}
            />
            <StylizedButton
              label="Descanso 15 mins"
              onPress={() => setTiempo(15)}
            />
          </div>
        ) : (
          <div className="mt-4 w-100">
            <StylizedButton
              label="Saltar descanso"
              onPress={() => setTiempo(25, true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PomodoroApp;
