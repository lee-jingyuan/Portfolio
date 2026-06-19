export const fllNavLinks = [
  { name: "Robot", link: "#robot" },
  { name: "Runs", link: "#runs" },
  { name: "SCUBATHON", link: "#scubathon" },
  { name: "Results", link: "#results" },
];

export const stats = [
  { value: "8", label: "Robot Runs", suffix: "" },
  { value: "585", label: "Points", suffix: "/620" },
  { value: "500", label: "Hours", suffix: "+" },
  { value: "2", label: "Awards", suffix: "" },
];

export const runs = [
  { id: 1, points: 95, time: "11s", videoSrc: "videos/fll25/run1.mp4" },
  { id: 2, points: 50, time: "7s", videoSrc: "videos/fll25/run2.mp4" },
  { id: 3, points: 50, time: "13s", videoSrc: "videos/fll25/run3.mp4" },
  { id: 4, points: 40, time: "13s", videoSrc: "videos/fll25/run4.mp4" },
  { id: "5a", points: 0, time: "2s", videoSrc: "videos/fll25/run5a.mp4" },
  { id: "5b", points: 45, time: "13s", videoSrc: "videos/fll25/run5b.mp4" },
  { id: 6, points: 50, time: "16s", videoSrc: "videos/fll25/run6.mp4" },
  { id: 7, points: 45, time: "9s", videoSrc: "videos/fll25/run7.mp4" },
  {
    id: 8,
    points: 175,
    time: "25s",
    videoSrc: "videos/fll25/run8.mp4",
    highlight: true,
  },
];

export const scubathonStages = [
  {
    title: "01: Camera Feed",
    desc: "Display diver's POV using a camera onto a screen for real-time monitoring.",
    imgPath: "images/camerafeed.png",
  },
  {
    title: "02: HUD Overlay",
    desc: "Overlay heads-up display and diver status onto the OpenCV video feed.",
    imgPath: "images/HUD.png",
  },
  {
    title: "03: ESP32 Control",
    desc: "Use ESP32 to control lights and servos for physical feedback systems.",
    imgPath: "images/LED.jpg",
  },
  {
    title: "04: Collision Alerts",
    desc: "Ultrasonic sensors detect nearby obstacles and alert the diver.",
    imgPath: "images/ultrasonic.png",
  },
  {
    title: "05: Voice Commands",
    desc: "Add voice command input to the ESP32 for hands-free operation underwater.",
    imgPath: "images/voice.png",
  },
  {
    title: "06: 3D Printed Housing",
    desc: "3D print custom compartments for each module to create a wearable device.",
    imgPath: "images/3dhousing.png",
  },
];

export const FLLtechStack = [
  { title: "Python", desc: "OpenCV + YOLO human detection" },
  { title: "C++", desc: "Arduino IDE for ESP32 firmware" },
  { title: "OpenCV", desc: "Camera feed and HUD overlay" },
  { title: "YOLO", desc: "Real-time human detection" },
  { title: "ESP32", desc: "Servo and LED control" },
  { title: "TinkerCAD", desc: "3D modelling for housing" },
];

export const fllRuns24 = [
  {
    id: 1,
    missions: "1+2+4+14",
    points: 95,
    time: "11s",
    videoSrc: "videos/fll24/run1.mp4",
  },
  {
    id: 2,
    missions: "6+7",
    points: 50,
    time: "7s",
    videoSrc: "videos/fll24/run2.mp4",
  },
  {
    id: 3,
    missions: "3+4+14",
    points: 50,
    time: "13s",
    videoSrc: "videos/fll24/run3.mp4",
  },
  {
    id: 4,
    missions: "2+14",
    points: 40,
    time: "13s",
    videoSrc: "videos/fll24/run4.mp4",
  },
  {
    id: 5,
    missions: "—",
    points: 45,
    time: "13s",
    videoSrc: "videos/fll24/run5.mp4",
  },
  {
    id: 6,
    missions: "9+13+14",
    points: 50,
    time: "16s",
    videoSrc: "videos/fll24/run6.mp4",
  },
  {
    id: 7,
    missions: "8+15",
    points: 45,
    time: "9s",
    videoSrc: "videos/fll24/run7.mp4",
  },
  {
    id: 8,
    missions: "3+5+9+10+11+12",
    points: 175,
    time: "25s",
    videoSrc: "videos/fll24/run8.mp4",
    highlight: true,
  },
];
