export const featuredProjects = [
  {
    title: "Digital Camera",
    summary: "Built a custom digital imaging device around embedded control and sensor capture.",
    description: "A hardware-first camera system focused on sensor interfacing, storage handling, and embedded UX.",
    tags: ["Embedded Systems", "Electronics", "Firmware"],
    thumbnail: "/projects/digital-camera-thumb.png",
    breakdown:
      "This project explored how far I could push a compact custom camera build. I iterated power stages, image capture timing, and data pipeline stability to make real captures repeatable.",
    images: [],
    cadImages: [
      {
        src: "/projects/digital-camera-cad.png",
        alt: "Digital camera CAD view",
      },
    ],
    schematics: [
      {
        src: "/projects/digital-camera-circuit.png",
        alt: "Digital camera KiCad circuit image",
      },
    ],
    buildPhotos: [],
    videoUrl:
      "https://drive.google.com/file/d/1k4htCEKv94-KO1T7ryAzIhNtr7uarbn8/view?usp=drive_link",
    videoFile: "",
  },
  {
    title: "Music Player",
    summary: "Designed and programmed a standalone embedded music player with physical controls.",
    description: "A compact media device integrating firmware, audio output stages, and low-latency control input.",
    tags: ["ESP32", "Audio", "Firmware", "Rapid Prototyping"],
    thumbnail: "/projects/music-player-thumb.jpg",
    breakdown:
      "I treated this as a clean embedded product experiment: fast boot behavior, responsive controls, and reliable file playback under constrained resources.",
    images: [],
    cadImages: [
      {
        src: "/projects/music-player-cad.png",
        alt: "Music player enclosure CAD view",
      },
    ],
    schematics: [
      {
        src: "/projects/music-player-circuit.png",
        alt: "Music player KiCad PCB layout",
      },
    ],
    buildPhotos: [],
    videoUrl:
      "https://drive.google.com/file/d/1yrXDT_m1uKOlhd0vyHRGT-12QM_QOXFl/view?usp=drive_link",
    videoFile: "",
  },
  {
    title: "Prosthetic Arm",
    summary: "Developed a mechatronic prosthetic arm prototype emphasizing practical actuation and control.",
    description: "A human-centered robotics project combining mechanism design, motor control, and electronics integration.",
    tags: ["Robotics", "Mechatronics", "Motor Control", "Electronics"],
    thumbnail: "/projects/prosthetic-arm-thumb.jpg",
    breakdown:
      "This build focused on balancing mechanical strength, movement precision, and controllability while keeping the architecture modular for future sensing upgrades.",
    images: [],
    cadImages: [
      {
        src: "/projects/prosthetic-arm-cad.png",
        alt: "Prosthetic arm CAD assembly",
      },
    ],
    schematics: [
      {
        src: "/projects/prosthetic-arm-circuit.jpg",
        alt: "Prosthetic arm circuit and wiring setup",
      },
    ],
    buildPhotos: [],
    videoUrl: "https://www.youtube.com/watch?v=CUCXw1iNBX4",
    videoFile: "",
  },
  {
    title: "ESP-32 AI Assistant",
    summary: "Built an ESP32-powered assistant prototype that blends embedded control with AI-backed interactions.",
    description: "An edge-friendly assistant platform exploring voice flows, connected services, and hardware response loops.",
    tags: ["ESP32", "AI", "Embedded Systems", "IoT"],
    thumbnail: "/projects/esp32-ai-assistant.jpg",
    breakdown:
      "This project was about making AI interaction tangible on real hardware. I iterated trigger handling, response latency, and reliable network behavior in constrained environments.",
    images: [],
    cadImages: [],
    schematics: [
      {
        src: "/projects/esp32-ai-assistant.jpg",
        alt: "ESP-32 AI assistant circuit and breadboard setup",
      },
    ],
    buildPhotos: [],
    codeUrl: "https://github.com/NiegelF/jarvis",
    videoUrl: "https://www.youtube.com/watch?v=w7Je-z21ihs",
    videoFile: "",
  },
  {
    title: "Wall Climber",
    summary: "Engineered a climbing robot platform designed for vertical traction experiments.",
    description: "A robotics prototype focused on adhesion strategy, weight distribution, and controlled motion on vertical surfaces.",
    tags: ["Robotics", "Embedded", "Mechatronics", "Controls"],
    thumbnail: "/projects/wall-climber-thumb.png",
    breakdown:
      "I built this as a high-risk mechanical experiment with iterative testing across frame geometry, motor torque balance, and control stability under slip conditions.",
    images: [],
    cadImages: [],
    schematics: [],
    buildPhotos: [],
    videoUrl: "https://www.youtube.com/watch?v=ejglsB0jX2M",
    videoFile: "",
  },
  {
    title: "Humanoid",
    summary: "Developed a humanoid robotics prototype for multi-joint movement and behavior experimentation.",
    description: "A full-stack robotics project combining firmware architecture, kinematics-driven control, and mechanical integration.",
    tags: ["Humanoid Robotics", "Firmware", "Mechatronics", "Embedded"],
    thumbnail: "/projects/humanoid-main.jpg",
    breakdown:
      "The focus was modularity across joints and control loops so the platform could evolve from basic movement demos into more coordinated behavior.",
    images: [],
    cadImages: [
      {
        src: "/projects/humanoid-main.jpg",
        alt: "Humanoid CAD model",
      },
    ],
    schematics: [],
    buildPhotos: [],
    videoUrl:
      "https://drive.google.com/file/d/1C7qrPtFpGQSedPuDmRkr8ZrBCVkR21LK/view?usp=drive_link",
    videoFile: "",
  },
  {
    title: "Phone Lock Box",
    summary: "Created a secure hardware lock box to enforce focused work sessions by physically restricting phone access.",
    description: "A practical embedded build combining lock mechanisms, timing logic, and user interaction design.",
    tags: ["Embedded Systems", "Electronics", "Product Prototype"],
    thumbnail: "/projects/phone-lock-box-thumb.jpg",
    breakdown:
      "This project explored behavioral hardware: simple, durable mechanisms paired with reliable timing firmware and a frictionless unlock flow.",
    images: [],
    cadImages: [
      {
        src: "/projects/phone-lock-box-cad.png",
        alt: "Phone lock box CAD model",
      },
    ],
    schematics: [],
    buildPhotos: [],
    codeUrl: "https://github.com/NiegelF/phoneBox",
    videoUrl: "https://www.youtube.com/watch?v=UIqcsxM7pms",
    videoFile: "",
  },
  {
    title: "Robotic Arm",
    summary: "Built a multi-axis robotic arm prototype for manipulation and trajectory control experiments.",
    description: "A mechatronics platform integrating actuator control, motion sequencing, and structural iteration.",
    tags: ["Robotics", "Motor Control", "Mechatronics", "Firmware"],
    thumbnail: "/projects/robotic-arm-thumb.png",
    breakdown:
      "I used this project as a control-systems sandbox: tuning joint responsiveness, refining movement smoothness, and validating repeatability across tasks.",
    images: [],
    cadImages: [
      {
        src: "/projects/robotic-arm-cad.png",
        alt: "Robotic arm CAD render",
      },
    ],
    schematics: [],
    buildPhotos: [],
    codeUrl: "https://github.com/NiegelF/roboticArm",
    videoUrl: "https://www.youtube.com/watch?v=6d398YxdkFk",
    videoFile: "",
  },
  {
    title: "Taser Sword",
    summary: "Prototyped a high-voltage themed hardware concept with safety-conscious isolation and control design.",
    description: "An advanced electronics build exploring compact high-voltage generation, switching logic, and enclosure protection.",
    tags: ["Electronics", "High Voltage", "Embedded Control", "Hardware"],
    thumbnail: "",
    breakdown:
      "This experimental build emphasized safe architecture and controlled discharge behavior, with iterative isolation design and staged validation during tests.",
    images: [],
    cadImages: [],
    schematics: [],
    buildPhotos: [],
    videoUrl:
      "https://drive.google.com/file/d/1bW04RQ0iJET5wSQLrHm0660N33l1wPeU/view?usp=drive_link",
    videoFile: "",
  },
];
