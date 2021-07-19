import { useState } from "react";
import "./styles.scss";
import bg from "../assets/home.png";
import sample from "../assets/sample.png";
import sampleBG from "../assets/sampleBG.png";
import sampleStack from "../assets/sampleStack.png";
import sampleTb from "../assets/sampleTossbank.png";
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
    background: "#000",
    y: "100%"
  },
  index: {
    background: "#000",
    y: "50%",
    borderRadius: "30px 30px 0 0"
  },
  first: {
    background: "#000",
    y: "0%",
    borderRadius: "0px 0px 0 0"
  },
  last: {
    background: "#fff",
    y: "50%",
    borderRadius: "30px 30px 0 0",
    "--mask-alpha": 0
  }
};

const dimVariants = {
  show: {
    opacity: 0.5
  },
  hide: {
    opacity: 0
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
  },
  second: {
    opacity: 1,
    y: 0
  },
  third: {
    opacity: 0,
    y: -100
  },
  fourth: {
    opacity: 0,
    y: -100
  },
  last: {
    opacity: 0,
    y: 50
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
    "--y": "-160px"
    // opacity: 1
  },
  second: {
    "--y": "-160px",
    "--rotateY": "-80deg"
  },
  third: {
    "--y": "-460px",
    "--rotateY": "-160deg"
  },
  fourth: {
    "--y": "-460px",
    "--rotateY": "-360deg"
  },
  last: {
    "--y": "-160px",
    "--rotateY": "-100deg"
  }
  // first: {
  //   "--x": "20px"
  //   // "--rotateX": "55deg",
  //   // "--rotateY": "-15deg"
  // },
};

const firstVariants = {
  initial: {
    "--rotate": "0deg",
    "--y": "50px"
  },
  index: {
    "--rotate": "20deg",
    "--rotateY": "-10deg",
    "--y": "20px"
    // transition: {
    //   ...backEasing,
    //   delay: 0.2,
    //   duration: 0.5
    // }
  },
  first: {
    "--y": "120px",
    "--z": "110px",
    "--rotateX": "10deg",
    "--rotateY": "30deg",
    "--rotate": "0deg"
  },
  second: {
    opacity: 0.2,
    "--x": "-190px",
    "--y": "120px",
    "--z": "110px",
    "--rotateX": "10deg",
    "--rotateY": "-30deg",
    "--rotate": "0deg"
  },
  third: {
    opacity: 0.2,
    "--x": "-240px",
    "--y": "230px",
    "--z": "110px",
    "--rotateX": "40deg",
    "--rotateY": "10deg",
    "--rotate": "0deg"
  },
  fourth: {
    opacity: 0.2,
    "--x": "140px",
    "--y": "100px",
    "--z": "-220px",
    "--rotateX": "30deg",
    "--rotateY": "60deg",
    "--rotate": "20deg"
  },
  last: {
    opacity: 0,
    "--x": "140px",
    "--y": "100px",
    "--z": "-220px",
    "--rotateX": "30deg",
    "--rotateY": "60deg",
    "--rotate": "20deg"
  }
};

const secondVariants = {
  initial: {
    "--y": "20px"
  },
  index: {
    "--y": "0px",
    "--rotate": "-5deg",
    "--rotateX": "20deg",
    "--rotateY": "10deg"
  },
  first: {
    opacity: 0.25,
    "--y": "20px",
    "--rotate": "-10deg",
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--z": "-160px"
  },
  second: {
    opacity: 0.2,
    "--y": "20px",
    "--rotate": "-10deg",
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--z": "-160px"
  },
  third: {
    opacity: 1,
    "--y": "20px",
    "--rotate": "-10deg",
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--z": "-160px"
  },
  fourth: {
    opacity: 0.15,
    "--y": "20px",
    "--rotate": "-10deg",
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--z": "-160px"
  },
  last: {
    opacity: 0,
    "--y": "20px",
    "--rotate": "-10deg",
    "--rotateX": "-20deg",
    "--rotateY": "20deg",
    "--z": "-160px"
  }
};

const thirdVariants = {
  initial: {
    "--y": "80px"
  },
  index: {
    "--y": "30px",
    "--rotateX": "20deg",
    "--rotateY": "20deg"
  },
  first: {
    opacity: 0.1,
    "--y": "50px",
    "--rotateX": "30deg",
    "--rotateY": "50deg",
    "--z": "100px"
  },
  second: {
    opacity: 1,
    "--x": "100px",
    "--y": "-40px",
    "--rotateX": "-10deg",
    "--rotateY": "70deg",
    "--z": "100px"
  },
  third: {
    opacity: 0.2,
    "--x": "100px",
    "--y": "-40px",
    "--rotateX": "-10deg",
    "--rotateY": "90deg",
    "--z": "100px"
  },
  fourth: {
    opacity: 0.25,
    "--x": "-170px",
    "--y": "-40px",
    "--rotateX": "-20deg",
    "--rotateY": "120deg",
    "--z": "100px"
  },
  last: {
    opacity: 0,
    "--x": "-170px",
    "--y": "-40px",
    "--rotateX": "-20deg",
    "--rotateY": "120deg",
    "--z": "100px"
  }
};

const fourthVariants = {
  initial: {
    "--y": "30px"
  },
  index: {
    "--y": "0px",
    "--rotate": "20deg",
    "--rotateX": "20deg",
    "--rotateY": "-10deg"
  },
  first: {
    opacity: 0.2,
    "--z": "0px",
    "--x": "-10px",
    "--y": "-20px",
    "--rotate": "20deg",
    "--rotateX": "-50deg",
    "--rotateY": "-30deg"
  },
  second: {
    opacity: 0.15,
    "--z": "0px",
    "--x": "-10px",
    "--y": "-20px",
    "--rotate": "20deg",
    "--rotateX": "-50deg",
    "--rotateY": "-30deg"
  },
  third: {
    opacity: 0.1,
    "--z": "-190px",
    "--x": "80px",
    "--y": "150px",
    "--rotate": "-20deg",
    "--rotateX": "-30deg",
    "--rotateY": "20deg"
  },
  fourth: {
    opacity: 1,
    "--z": "-190px",
    "--x": "80px",
    "--y": "-10px",
    "--rotate": "-20deg",
    "--rotateX": "-30deg",
    "--rotateY": "20deg"
  },
  last: {
    opacity: 0,
    "--z": "-190px",
    "--x": "80px",
    "--y": "-10px",
    "--rotate": "-20deg",
    "--rotateX": "-30deg",
    "--rotateY": "20deg"
  }
};

const stackVariants = {
  up: {
    y: 0
  },
  down: {
    y: 80,
    transition: {
      ...expoEasing,
      delay: 0.4,
      duration: 1.4
    }
  }
};

const tbVariants = {
  hide: {
    opacity: 0,
    x: -10
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ...expoEasing,
      delay: 0.6,
      duration: 1.4
    }
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
  const states = ["index", "first", "second", "third", "fourth", "last"];

  function onCtaTap(event, info) {
    let index = states.indexOf(state);
    if (index === states.length - 1) {
      setState(states[0]);
    } else {
      setState(states[index + 1]);
    }
  }

  function onSheetTap(event, info) {
    let index = states.indexOf(state);
    if (index === 0) {
      setState(states[state.length]);
    } else {
      setState(states[index - 1]);
    }
  }

  return (
    <>
      <MotionConfig
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {/* <motion.div className="screen"> */}
        <img className="screenBG" width="100%" alt="screenBG" src={sampleBG} />
        <motion.div
          className="tb"
          variants={tbVariants}
          initial={false}
          animate={state === "last" ? "show" : "hide"}
        >
          <img className="tb" width="100%" alt="tb" src={sampleTb} />
        </motion.div>
        <motion.div
          className="stack"
          variants={stackVariants}
          initial={false}
          animate={state === "last" ? "down" : "up"}
        >
          <img className="stack" width="100%" alt="stack" src={sampleStack} />
        </motion.div>

        {/* </motion.div> */}
        <motion.div className="bsAll">
          <motion.div
            className="dim"
            variants={dimVariants}
            animate={state === "last" ? "hide" : "show"}
          />
          <motion.div
            className="bottomSheet"
            variants={bottomSheetVariants}
            initial={"initial"}
            animate={
              state === "index" ? "index" : state === "last" ? "last" : "first"
            }
            onTap={onSheetTap}
          >
            <motion.div
              className="sampleUI"
              variants={sampleVariants}
              animate={state}
            >
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
            {/* <motion.div className="gradientDim top" /> */}
            <motion.div
              className="visual"
              variants={visualVariants}
              initial={"initial"}
              animate={state}
              // animate="index"
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
            {/* <motion.div className="gradientDim bottom" /> */}
          </motion.div>
          <Cta
            onTap={onCtaTap}
            variants={ctaVariants}
            initial={"initial"}
            animate={"index"}
            text={
              state === "index"
                ? "어떻게 좋아졌을까?"
                : state === "last"
                ? "시작하기"
                : "다음"
            }
          />
        </motion.div>
      </MotionConfig>
    </>
  );
}
