import React, { useEffect, useState, useRef } from 'react'
import * as faceapi from "face-api.js";

function App() {
  const[emotion, setEmotion] = useState("Loading...");
  const videoRef = useRef();

  // useEffect for loading the ai models and starting the web cam
  useEffect(() => {
    async function start(){
        const model_url = "/models";

        // nets - connectivity
        await faceapi.nets.tinyFaceDetector.loadFromUri(model_url);
        await faceapi.nets.faceExpressionNet.loadFromUri(model_url);
        console.log("Models Loaded");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        videoRef.current.srcObject = stream;

        setEmotion("Detecting...");

    }

    start();
  }, []);

  // Face Detection & Expression
  useEffect(() => {

    const interval = setInterval(async () => {
        if(!videoRef.current) return;

        // Model Running and find the expression
        const detections = await faceapi.detectAllFaces(videoRef.current,
          new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

          console.log(detections);

          if(detections.length > 0){
            const expressions = detections[0].expressions;

            const maxEmotion = Object.keys(expressions).reduce(
              (a, b) => expressions[a] > expressions[b] ? a : b
            );

            setEmotion(maxEmotion);
          }

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h1>Emotion Detection Application</h1>

      <video ref={videoRef} autoPlay muted width="600" height="600"></video>
      <h3>Current Emotion: {emotion}</h3>
    </div>
  )
}

export default App

// Algorithm
// - Model Loading
// - Web Cam
// Face detect
// Face expression