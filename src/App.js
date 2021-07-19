import { useState } from "react";
import "./styles.scss";
import bg from "../assets/home.png";
import sample from "../assets/sample.png";
import { motion, MotionConfig } from "framer-motion";

const easeEasing = {
  type: "tween",
  ease: [0.6, 0, 0, 0.6],
  duration: 1
};
const outEasing = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 1
};
const expoEasing = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 1
};
const backEasing = {
  type: "tween",
  ease: [0.34, 1.56, 0.64, 1],
  duration: 1
};
const basicSpring = {
  type: "spring",
  stiffness: 200,
  damping: 30
};
const smallSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30
};
const mediumSpring = {
  type: "spring",
  stiffness: 255,
  damping: 20
};
const largeSpring = {
  type: "spring",
  stiffness: 100,
  damping: 10
};

const bottomSheetVariants = {
  initial: {
    y: "100%"
  },
  index: {
    y: "50%",
    borderRadius: "30px 30px 0 0"
  },
  first: {
    y: "0%",
    borderRadius: "0px 0px 0 0"
  }
};

const ctaVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  index: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      ...basicSpring
    }
  }
};

const sampleVariants = {
  initial: {
    opacity: 0
  },
  index: {
    opacity: 0,
    y: 50
  },
  first: {
    opacity: 1,
    y: 0,
    transition: {
      ...outEasing,
      delay: 0.2
    }
  }
};

const visualVariants = {
  initial: {
    "--y": "0px"
  },
  index: {
    "--y": "-160px"
  },
  first: {
    "--x": "20px"
    // "--rotateX": "55deg",
    // "--rotateY": "-15deg"
  },
  second: {
    // "--rotateY": "-90deg",
    // "--rotate": "60deg"
  }
};

const firstVariants = {
  initial: {
    "--rotate": "30deg",
    "--y": "50px"
  },
  index: {
    "--rotate": "0deg",
    "--y": "20px",
    transition: {
      ...backEasing,
      delay: 0.2,
      duration: 0.5
    }
  },
  first: {
    "--x": "60px",
    "--y": "50px",
    "--z": "140px",
    "--rotateX": "360deg",
    "--rotate": "0deg",
    "--rotate3d": "1, 1, 0, 30deg"
  },
  second: {
    "--x": "60px",
    "--y": "50px",
    "--z": "140px",
    "--rotateX": "360deg",
    "--rotate": "0deg",
    "--rotate3d": "1, 1, 0, 30deg"
  }
};

const secondVariants = {
  initial: {
    "--y": "20px"
  },
  index: {
    "--y": "0px"
  },
  first: {
    opacity: 0.2,
    // "--x": "-50px",
    "--y": "-200px",
    "--z": "-100px",
    "--rotateX": "20deg",
    "--rotateY": "-20deg"
  },
  second: {
    opacity: 0.2,
    // "--x": "-50px",
    "--y": "-200px",
    "--z": "-100px",
    "--rotateX": "20deg",
    "--rotateY": "-20deg"
  }
};

const thirdVariants = {
  initial: {
    "--y": "80px"
  },
  index: {
    "--y": "30px"
  },
  first: {
    opacity: 0.1,
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--rotate3d": "1, 1, 1, 10deg",
    "--x": "200px",
    "--y": "-250px",
    "--z": "-150px"
  },
  second: {
    opacity: 0.1,
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--rotate3d": "1, 1, 1, 10deg",
    "--x": "200px",
    "--y": "-250px",
    "--z": "-150px"
  }
};

const fourthVariants = {
  initial: {
    "--y": "30px"
  },
  index: {
    "--y": "0px"
  },
  first: {
    opacity: 0.15,
    "--y": "-130px",
    "--z": "-50px",
    "--rotateY": "10deg",
    "--rotateX": "30deg"
  },
  second: {
    opacity: 0.15,
    "--y": "-130px",
    "--z": "-50px",
    "--rotateY": "10deg",
    "--rotateX": "30deg"
  }
};

function Chip(props) {
  return (
    <motion.div className={`chip ${props.className}`} variants={props.variants}>
      <motion.div className="chipHeight" />
      <motion.div className="chipHeight" />
      <motion.div className="chipHeight" />
    </motion.div>
  );
}

function Cta(props) {
  return (
    <motion.div
      className="cta"
      onTap={props.onTap}
      variants={props.variants}
      initial={props.initial}
      animate={props.animate}
    >
      {props.text}
    </motion.div>
  );
}

export default function App() {
  const [state, setState] = useState("index");
  const states = ["index", "first", "second", "third", "fourth", "fifth"];

  function onCtaTap(event, info) {
    let index = states.indexOf(state);
    setState(states[index + 1]);
  }

  function onSheetTap(event, info) {
    let index = states.indexOf(state);
    setState(states[index - 1]);
  }

  return (
    <>
      <MotionConfig
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <img className="screenBG" width="100%" alt="screenBG" src={bg} />
        <motion.div className="bsAll">
          <motion.div className="dim" />
          <motion.div
            className="bottomSheet"
            variants={bottomSheetVariants}
            initial={"initial"}
            animate={state === "index" ? "index" : "first"}
            onTap={onSheetTap}
          >
            <motion.div className="sampleUI" variants={sampleVariants}>
              <img width="100%" alt="sampleUI" src={sample} />
            </motion.div>
            {/* <motion.div
              className="visual"
              variants={visualVariants}
              initial={"initial"}
              animate={state}
              transition={{ ...outEasing, duration: 2 }}
            >
              <Chip className="arrow first" variants={firstVariants} />
              <Chip className="round second" variants={secondVariants} />
              <Chip className="arrow third" variants={thirdVariants} />
              <Chip className="square fourth" variants={fourthVariants} />
            </motion.div> */}
          </motion.div>
          <motion.div className="visualWrapper">
            <motion.div className="gradientDim top" />
            <motion.div
              className="visual"
              variants={visualVariants}
              initial={"initial"}
              animate={state}
              transition={{
                ...expoEasing,
                duration: 1.5
                // ...mediumSpring
              }}
            >
              <Chip className="arrow first" variants={firstVariants} />
              <Chip className="round second" variants={secondVariants} />
              <Chip className="arrow third" variants={thirdVariants} />
              <Chip className="square fourth" variants={fourthVariants} />
            </motion.div>
            <motion.div className="gradientDim bottom" />
          </motion.div>
          <Cta
            onTap={onCtaTap}
            variants={ctaVariants}
            initial={"initial"}
            animate={"index"}
            text={state === "index" ? "어떻게 좋아졌을까?" : "다음"}
          />
        </motion.div>
      </MotionConfig>
    </>
  );
}
