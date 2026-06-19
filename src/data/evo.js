export const evoNavLinks = [
  { name: "What is EVO", link: "#what" },
  { name: "Hardware", link: "#hardware" },
  { name: "Contributions", link: "#contributions" },
  { name: "Links", link: "#links" },
];

export const ports = [
  { label: "EV3 Motor Ports", value: "4", suffix: "x" },
  {
    label: "Motor Ports with Encoder (Shared with ev3 motors)",
    value: "4",
    suffix: "x",
  },
  { label: "Servo Ports", value: "8", suffix: "x" },
  { label: "I2C Multiplexed Ports", value: "8", suffix: "x" },
  { label: "EV3 Sensor Ports", value: "4", suffix: "x" },
  { label: "GPIO Ports", value: "8", suffix: "x" },
  { label: "UART / SPI Hybrid", value: "2", suffix: "x" },
  { label: "I2C Ports", value: "2", suffix: "x" },
];

export const contributions = [
  {
    number: "01",
    title: "PID Movement Functions",
    desc: "Wrote foundational PID straight-line stabilisation and precise spot turn functions, forming the core movement library used by the club's competition robots.",
  },
  {
    number: "02",
    title: "Servo Library Testing",
    desc: "Investigated an existing servo library issue, sourced and evaluated an alternative library, and tested compatibility to determine whether it resolved the original problem.",
  },
  {
    number: "03",
    title: "Hardware Stress Testing",
    desc: "Deliberately pushed EVO to its limits — running multiple servos simultaneously, executing rapid movement loops without delay, and verifying degree accuracy — to surface software bugs and edge cases.",
  },
  {
    number: "04",
    title: "Code Review & Bug Reporting",
    desc: "Conducted in-depth code reviews and logged bugs, helping improve reliability.",
  },
  {
    number: "05",
    title: "EVO Beta Tester Certificate",
    desc: "Received official certification for beta testing and development contributions to the EVO microcontroller prior to its public release.",
  },
];

export const robotSetup = [
  {
    title: "TCS34725 Colour Sensors x 4",
    desc: "Line following + colour identification",
  },
  {
    title: "BNO055 IMU x 1",
    desc: "Gyro-stabilised straight movement",
  },
  { title: "HuskyLens x 1", desc: "AI colour block detection" },
  { title: "Motors x 3", desc: "Drive base + attachment" },
  { title: "Servo Motors x 2", desc: "Attachment control" },
  {
    title: "External Screen x 1",
    desc: "View information for calibration and debugging",
  },
  { title: "External Buttons x 4", desc: "Control screen and start/stop" },
  {
    title: "NeoPixel LED x 8",
    desc: "Light up game piece for better scanning",
  },
];
