import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import audio_path from './glass.wav';

let audio1 = new Audio(audio_path);
let audio2 = new Audio(audio_path);

const PLAY_AUDIO = true;
const frame_rate = 30;
const break_threshold = 2;

let KittyWalk = () => {
  let [time, set_time] = useState(0);
  let [left, set_left] = useState(true);

  let px_per_sec = 40;
  let anim_speed = 0.6;

  let secs = time / 1000;
  let step = Math.round(secs / anim_speed);
  let x = step * px_per_sec;
  let angle = step % 2 == 0 ? -15 : 5;

  let cw = 600;
  let iw = 160;
  if (x >= cw - iw / 2) {
    set_left(!left);
    set_time(0);
  }

  useEffect(() => {
    let last = new Date().getTime();
    let intvl = setInterval(() => {
      let t = new Date().getTime();
      set_time(time + t - last);
      last = t;
    }, 1000 / frame_rate);

    return () => clearInterval(intvl);
  }, [time, left]);

  let src = left ? "/mimi.png" : "/naibang.png";

  return <div className='kitty-walk'>
    <img className='kitty' src={src} height="100" style={{
      [left ? "left" : "right"]: x,
      transform: `rotate(${angle}deg) scaleX(-1)`
    }}/>
  </div>;
}

let Timer = () => {
  let [last, set_last] = useState(new Date().getTime());
  let [time, set_time] = useState(0);
  let [paused, set_paused] = useState(true);
  let [on_break, set_on_break] = useState(false);

  useEffect(() => {
    let intvl = setInterval(() => {
      let t = new Date().getTime();
      if (!paused) {
        let new_time = time + t - last;
        set_time(new_time);

        if (new_time / 1000 > break_threshold && !on_break) {
          set_on_break(true);
          set_paused(true);

          if (PLAY_AUDIO) {
            audio1.play();
            setTimeout(() => {audio2.play()}, 200);
          }
        }
      }
      set_last(t);
    }, 1000 / frame_rate);

    return () => clearInterval(intvl);
  }, [paused, on_break]);

  let diff = time / 1000;
  let sec = Math.round(diff % 60);
  let min = Math.round(diff / 60 % 60);

  let to_str = n => n.toString().padStart(2, "0");

  return <div>
    {!on_break
      ? <>
        <div className='current-time'>
          {`${to_str(min)}:${to_str(sec)}`}
        </div>
        <div className='buttons'>
          <button onClick={() => set_paused(!paused)}>{paused ? "Start" : "Pause"}</button>
          <button onClick={() => {
            let new_start = new Date().getTime();
            set_time(0);
            set_paused(true);
          }}>Reset</button>
        </div>
        {!paused ? <KittyWalk /> : null}
      </>
      : <>
        <div className='break-time'>Break time!</div>
        <div className='back-to-work'><button onClick={() => {
          set_time(0);
          set_last(new Date().getTime());
          set_paused(false);
          set_on_break(false);
        }}>Back to work...</button></div>
        <img src="/bothkitties.png" width="100%" />
      </>}
  </div>;
};


function App() {
  return (
    <div className="container">
      <h1>Tetedoro</h1>
      <Timer />
    </div>
  );
}

export default App;
