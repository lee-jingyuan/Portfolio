export const wroNavLinks = [
  { name: "Specs", link: "#specs" },
  { name: "Mechanisms", link: "#mechanisms" },
  { name: "Videos", link: "#videos" },
  { name: "Results", link: "#results" },
];

export const robotStats = [
  { value: "35", label: "International Ranking", suffix: "th" },
  { value: "1200", label: "Robot weight", suffix: "g" },
  { value: "800", label: "Hours of Development", suffix: "+" },
  { value: "900", label: "Lines of Code", suffix: "+" },
];

export const techSpecs = [
  {
    title: "EVO Microcontroller",
    desc: "ESP32-S3 based custom controller with 4 EV3 motor ports, 8 servo ports, and 8 I2C multiplexed ports.",
    imgPath: "images/microcontroller.png",
    link: "/EVO",
  },
  {
    title: "TCS34725 x 4",
    desc: "RGB colour sensors for line following and colour identification across the game board.",
    imgPath: "images/colour-sensor.png",
  },
  {
    title: "BNO055 IMU",
    desc: "9-axis inertial measurement unit providing precise heading data for gyro-stabilised movement and spot turns.",
    imgPath: "images/bno.png",
  },
  {
    title: "HuskyLens",
    desc: "AI vision sensor for real-time colour block detection during autonomous runs.",
    imgPath: "images/camera.png",
  },
  {
    title: "Motors x 3",
    desc: "2 motors powering the drive base, 1 motor for primary attachment actuation.",
    imgPath: "images/motor.png",
  },
  {
    title: "Servo Motors x 2",
    desc: "Precision servo motors controlling attachment mechanisms with accurate positional feedback.",
    imgPath: "images/servo.png",
  },
  {
    title: "External Screen x 1",
    desc: "Displays a pre-run diagnostic menu that verify sensors, tune parameters, and calibrate the robot before starting the mission.",
    imgPath: "images/display.png",
  },
  {
    title: "NeoPixel x 8",
    desc: "8 NeoPixels mounted beneath the grabber illuminate held game pieces, ensuring consistent lighting for accurate HuskyLens colour detection.",
    imgPath: "images/led-strip.png",
  },
];

export const mechanisms = [
  {
    id: "01",
    name: "Motor: Lift & Grab Mechanism",
    desc: [
      "Motor drives two parallel linkages simultaneously on both sides of the motor.",
      "An axle runs through the top beam connecting both sides to a grabber.",
      "On pickup — grabber closes first until it grips the object, then the parallel linkages lift everything upward.",
      "On release — linkages lower first, then grabber opens to drop the object.",
    ],
    videoSrc: "images/Motor1.gif",
  },
  {
    id: "02",
    name: "Servo 1: Dual Cam Hook Mechanism",
    desc: [
      "Two custom dual cams — each made by merging two ovals rotated 90° and fused together — are mounted on a shared axle, one on each side of the robot, driven by a single servo.",
      "Each dual cam is offset 90° from the other along the axle, giving the servo 4 distinct output states: Closed/Closed, Closed/Open, Open/Closed, and Open/Open.",
      "Each cam pushes a small L-shaped piece upward as its high point passes — rotating the hook downward into the open position.",
      "A rubber band holds each hook in the default closed position passively.",
      "This allows one servo to independently control two hooks, enabling selective pickup and release of WRO game pieces called Research samples.",
    ],
    videoSrc: "images/servo1.gif",
  },
  {
    id: "03",
    name: "Servo 2a: Ball Collector & Release",
    desc: [
      "A servo drives a large 3D printed ball grabber that scoops a ball from a container, then rotates back to deposit it into a holder tilted toward the back of the robot, held in place by two 5-hole half beams.",
      "A straight arm on the same servo, when rotated further back, pushes down a lever linkage connected to the 5-hole half beams — rotating it down and releasing the ball out the back due to the tilt.",
    ],
    videoSrc: "images/servo2a.gif",
  },
  {
    id: "04",
    name: "Servo 2b: Motor Lock",
    desc: [
      "A second small arm also on the same servo — when the ball grabber rotates all the way down, it pushes another linkage which presses a gear arm onto a gear attached to the Lift & Grab Mechanism, locking it from moving up or down.",
      "With the Lift & Grab Mechanism locked in place, it can safely open the grabber in midair without the arm dropping — allowing precise mid-air release of samples.",
      "One servo simultaneously handles ball collection, ball release, and locking the Lift & Grab Mechanism — three actions driven by a single actuator.",
    ],
    videoSrc: "images/servo2b.gif",
  },
];

export const results = [
  {
    event: "WRO RoboMission Junior — National Finals",
    year: "2025 · Singapore",
    achievements: [
      { icon: "🥇", label: "National Champion" },
      { icon: "🏆", label: "Best Robot Performance Award" },
      { icon: "🏆", label: "Side Quest 4 Winner" },
    ],
  },
  {
    event: "WRO RoboMission Junior — International Finals",
    year: "2025 · Singapore",
    achievements: [
      { icon: "🥈", label: "Silver Medal" },
      { icon: "🌏", label: "35th place out of 112 teams" },
    ],
  },
];

export const nationalPhotos = [
  { imgPath: "images/gallery/national1.jpeg", alt: "Nationals photo 1" },
  { imgPath: "images/gallery/national2.jpeg", alt: "Nationals photo 2" },
  { imgPath: "images/gallery/national3.jpeg", alt: "Nationals photo 3" },
  { imgPath: "images/gallery/national4.jpeg", alt: "Nationals photo 4" },
  { imgPath: "images/gallery/national5.jpeg", alt: "Nationals photo 5" },
  { imgPath: "images/gallery/national6.jpeg", alt: "Nationals photo 6" },
  { imgPath: "images/gallery/national7.jpeg", alt: "Nationals photo 7" },
  { imgPath: "images/gallery/national8.jpeg", alt: "Nationals photo 8" },
  { imgPath: "images/gallery/national9.jpeg", alt: "Nationals photo 9" },
  { imgPath: "images/gallery/national10.jpeg", alt: "Nationals photo 10" },
];

export const internationalPhotos = [
  {
    imgPath: "images/gallery/international1.jpeg",
    alt: "International photo 1",
  },
  {
    imgPath: "images/gallery/international2.jpeg",
    alt: "International photo 2",
  },
  {
    imgPath: "images/gallery/international3.jpeg",
    alt: "International photo 3",
  },
  {
    imgPath: "images/gallery/international4.jpeg",
    alt: "International photo 4",
  },
  {
    imgPath: "images/gallery/international5.jpeg",
    alt: "International photo 5",
  },
  {
    imgPath: "images/gallery/international6.jpeg",
    alt: "International photo 6",
  },
  {
    imgPath: "images/gallery/international7.jpeg",
    alt: "International photo 7",
  },
  {
    imgPath: "images/gallery/international8.jpeg",
    alt: "International photo 8",
  },
  {
    imgPath: "images/gallery/international9.jpeg",
    alt: "International photo 9",
  },
  {
    imgPath: "images/gallery/international10.jpeg",
    alt: "International photo 10",
  },
];
