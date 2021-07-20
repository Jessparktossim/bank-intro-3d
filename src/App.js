import { useEffect, useState } from "react";
import "./styles.scss";
import bg from "../assets/home.png";
import sample from "../assets/sample.png";
import sampleBG from "../assets/sampleBG.png";
import sampleStack from "../assets/sampleStack.png";
import sampleTb from "../assets/sampleTossbank.png";
import { motion, MotionConfig } from "framer-motion";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

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
const flowSpring = {
  type: "spring",
  stiffness: 120,
  damping: 30
  // stiffness: 12,
  // damping: 4
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
    "--mask-alpha": "0"
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

const gradientDimVariants = {
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
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
      delay: 0.4
      // delay: 0.2
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
    "--y": "-160px"
    // "--rotateY": "-80deg"
  },
  third: {
    "--y": "-160px"
    // "--y": "-460px",
    // transition: {
    //   delay: 0.15,
    //   ...flowSpring
    // }
    // "--rotateY": "-160deg"
  },
  fourth: {
    "--y": "-160px"
    // "--rotateY": "-360deg"
  },
  last: {
    "--y": "-160px"
    // "--rotateY": "-100deg"
  }
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
    opacity: 0,
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "10deg",
    "--y": "20px",
    transition: {
      ...flowSpring
    }
    // "--y": "120px",
    // "--z": "110px",
    // "--rotateX": "10deg",
    // "--rotateY": "30deg",
    // "--rotate": "0deg"
  },
  second: {
    opacity: 0,
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "10deg",
    "--y": "20px"
  },
  third: {
    opacity: 0,
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "10deg",
    "--y": "20px"
  },
  fourth: {
    opacity: 0,
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "10deg",
    "--y": "20px"
  },
  last: {
    opacity: 0,
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "10deg",
    "--y": "20px"
  }
  // second: {
  //   opacity: 0.2,
  //   "--x": "-190px",
  //   "--y": "120px",
  //   "--z": "110px",
  //   "--rotateX": "10deg",
  //   "--rotateY": "-30deg",
  //   "--rotate": "0deg"
  // },
  // third: {
  //   opacity: 0.2,
  //   "--x": "-240px",
  //   "--y": "230px",
  //   "--z": "110px",
  //   "--rotateX": "40deg",
  //   "--rotateY": "10deg",
  //   "--rotate": "0deg"
  // },
  // fourth: {
  //   opacity: 0.2,
  //   "--x": "140px",
  //   "--y": "100px",
  //   "--z": "-220px",
  //   "--rotateX": "30deg",
  //   "--rotateY": "60deg",
  //   "--rotate": "20deg"
  // },
  // last: {
  //   opacity: 0,
  //   "--x": "140px",
  //   "--y": "100px",
  //   "--z": "-220px",
  //   "--rotateX": "30deg",
  //   "--rotateY": "60deg",
  //   "--rotate": "20deg"
  // }
};

const secondVariants = {
  initial: {
    "--y": "50px"
  },
  index: {
    "--y": "30px",
    "--rotate": "-5deg",
    "--rotateX": "20deg",
    "--rotateY": "10deg"
  },
  first: {
    opacity: 0.3,
    "--y": "-80px",
    "--rotate": "-5deg",
    "--rotateX": "30deg",
    "--rotateY": "10deg",
    transition: {
      delay: 0.1,
      ...flowSpring
      // ...backEasing,
      // duration: 1
    }
    // "--y": "20px",
    // "--rotate": "-10deg",
    // "--rotateX": "-20deg",
    // "--rotateY": "20deg",
    // "--z": "-160px"
  },
  second: {
    opacity: 0,
    "--y": "-120px",
    "--rotateX": "80deg",
    "--x": "10px",
    "--z": "50px",
    transition: {
      ...flowSpring
    }
  },
  third: {
    opacity: 0,
    "--y": "-120px",
    "--rotateX": "80deg",
    "--x": "10px",
    "--z": "50px"
  },
  fourth: {
    opacity: 0,
    "--y": "-120px",
    "--rotateX": "80deg",
    "--x": "10px",
    "--z": "50px"
  },
  last: {
    opacity: 0,
    "--y": "-120px",
    "--rotateX": "80deg",
    "--x": "10px",
    "--z": "50px"
  }
  // second: {
  //   opacity: 0.2,
  //   "--y": "20px",
  //   "--rotate": "-10deg",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "20deg",
  //   "--z": "-160px"
  // },
  // third: {
  //   opacity: 1,
  //   "--y": "20px",
  //   "--rotate": "-10deg",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "20deg",
  //   "--z": "-160px"
  // },
  // fourth: {
  //   opacity: 0.15,
  //   "--y": "20px",
  //   "--rotate": "-10deg",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "20deg",
  //   "--z": "-160px"
  // },
  // last: {
  //   opacity: 0,
  //   "--y": "20px",
  //   "--rotate": "-10deg",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "20deg",
  //   "--z": "-160px"
  // }
};

const thirdVariants = {
  initial: {
    "--y": "80px"
  },
  index: {
    "--y": "50px",
    "--rotateX": "20deg",
    "--rotateY": "20deg"
  },
  first: {
    opacity: 0.25,
    "--y": "-110px",
    "--rotateX": "20deg",
    "--rotateY": "20deg",
    "--rotate": "10deg",
    transition: {
      delay: 0.2,
      ...flowSpring
      // ...backEasing,
      // duration: 1
    }
    // "--y": "50px",
    // "--rotateX": "30deg",
    // "--rotateY": "50deg",
    // "--z": "100px"
  },
  second: {
    opacity: 0.1,
    "--y": "-180px",
    "--rotateX": "50deg",
    "--rotateY": "20deg",
    "--rotate": "10deg",
    transition: {
      delay: 0.1,
      ...flowSpring
    }
  },
  third: {
    opacity: 0,
    "--y": "-430px",
    "--rotateX": "80deg",
    "--rotateY": "20deg",
    "--rotate": "10deg",
    transition: {
      delay: 0.2,
      ...flowSpring
    }
  },
  fourth: {
    opacity: 0,
    "--y": "-180px",
    "--rotateX": "80deg",
    "--rotateY": "20deg",
    "--rotate": "10deg"
  },
  last: {
    opacity: 0,
    "--y": "-180px",
    "--rotateX": "80deg",
    "--rotateY": "20deg",
    "--rotate": "10deg"
  }
  // third: {
  //   opacity: 0.2,
  //   "--x": "100px",
  //   "--y": "-40px",
  //   "--rotateX": "-10deg",
  //   "--rotateY": "90deg",
  //   "--z": "100px"
  // },
  // fourth: {
  //   opacity: 0.25,
  //   "--x": "-170px",
  //   "--y": "-40px",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "120deg",
  //   "--z": "100px"
  // },
  // last: {
  //   opacity: 0,
  //   "--x": "-170px",
  //   "--y": "-40px",
  //   "--rotateX": "-20deg",
  //   "--rotateY": "120deg",
  //   "--z": "100px"
  // }
};

const fourthVariants = {
  initial: {
    "--y": "60px"
  },
  index: {
    "--y": "30px",
    // "--x": "0px",
    "--rotate": "20deg",
    "--rotateX": "20deg",
    "--rotateY": "-10deg"
  },
  first: {
    opacity: 0.2,
    "--y": "-100px",
    "--rotate": "20deg",
    "--rotateX": "20deg",
    "--rotateY": "-10deg",
    transition: {
      delay: 0.3,
      ...flowSpring
      // ...backEasing,
      // duration: 1
    }
    // "--z": "0px",
    // "--x": "-10px",
    // "--y": "-20px",
    // "--rotate": "20deg",
    // "--rotateX": "-50deg",
    // "--rotateY": "-30deg"
  },
  second: {
    opacity: 0.15,
    // "--z": "0px",
    "--y": "-200px",
    "--rotate": "20deg",
    "--rotateX": "20deg",
    "--rotateY": "-10deg",
    transition: {
      delay: 0.2,
      ...flowSpring
    }
  },
  third: {
    opacity: 0.15,
    "--y": "-470px",
    "--rotate": "20deg",
    "--rotateX": "40deg",
    "--rotateY": "-10deg",
    transition: {
      delay: 0.3,
      ...flowSpring
    }
  },
  fourth: {
    opacity: 0,
    "--y": "-500px",
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "-10deg",
    transition: {
      ...flowSpring
    }
  },
  last: {
    opacity: 0,
    "--y": "-470px",
    "--rotate": "20deg",
    "--rotateX": "80deg",
    "--rotateY": "-10deg"
  }
  // third: {
  //   opacity: 0.1,
  //   "--z": "-190px",
  //   "--x": "80px",
  //   "--y": "150px",
  //   "--rotate": "-20deg",
  //   "--rotateX": "-30deg",
  //   "--rotateY": "20deg"
  // },
  // fourth: {
  //   opacity: 1,
  //   "--z": "-190px",
  //   "--x": "80px",
  //   "--y": "-10px",
  //   "--rotate": "-20deg",
  //   "--rotateX": "-30deg",
  //   "--rotateY": "20deg"
  // },
  // last: {
  //   opacity: 0,
  //   "--z": "-190px",
  //   "--x": "80px",
  //   "--y": "-10px",
  //   "--rotate": "-20deg",
  //   "--rotateX": "-30deg",
  //   "--rotateY": "20deg"
  // }
};

const fifthVariants = {
  initial: {
    opacity: 0,
    "--rotate": "-10deg",
    "--rotateX": "-80deg",
    "--y": "100px"
  },
  index: {
    opacity: 0,
    "--rotate": "-10deg",
    "--rotateX": "-80deg",
    "--y": "100px"
  },
  first: {
    opacity: 1,
    "--rotateX": "0deg",
    "--y": "-120px",
    transition: {
      delay: 0.4,
      ...flowSpring
    }
  },
  second: {
    opacity: 0.2,
    "--rotateX": "0deg",
    "--y": "-200px",
    transition: {
      delay: 0.3,
      ...flowSpring
    }
  },
  third: {
    opacity: 0.2,
    "--rotateX": "0deg",
    "--y": "-460px",
    transition: {
      delay: 0.4,
      ...flowSpring
    }
  },
  fourth: {
    opacity: 0.2,
    "--rotateX": "0deg",
    "--rotate": "-20deg",
    "--y": "-610px",
    transition: {
      delay: 0.1,
      ...flowSpring
    }
  },
  last: {
    opacity: 0,
    "--rotateX": "0deg",
    "--rotateY": "70deg",
    "--rotate": "70deg",
    "--y": "-100px"
  }
};

const sixthVariants = {
  initial: {
    opacity: 0,
    "--rotateX": "-90deg"
    // "--y": "50px"
  },
  index: {
    opacity: 0,
    "--rotateX": "-90deg"
    // "--y": "50px"
  },
  first: {
    opacity: 0,
    "--rotateX": "-90deg"
    // "--y": "50px"
  },
  second: {
    opacity: 1,
    "--rotateX": "-20deg",
    "--y": "-200px",
    transition: {
      delay: 0.4,
      ...flowSpring
    }
  },
  third: {
    opacity: 0.4,
    "--rotateX": "30deg",
    "--y": "-450px",
    transition: {
      delay: 0.5,
      ...flowSpring
    }
  },
  fourth: {
    opacity: 0.4,
    "--rotateX": "30deg",
    "--rotateY": "30deg",
    "--y": "-500px",
    transition: {
      delay: 0.2,
      ...flowSpring
    }
  },
  last: {
    opacity: 0,
    "--rotateX": "30deg",
    "--rotate": "-50deg",
    "--rotateY": "-90deg",
    "--y": "0px"
  }
};

const seventhVariants = {
  initial: {
    opacity: 0,
    "--rotateX": "-90deg",
    "--y": "30px",
    "--z": "-10px"
  },
  index: {
    opacity: 0,
    "--rotateX": "-90deg",
    "--y": "30px",
    "--z": "-10px"
  },
  first: {
    opacity: 0,
    "--rotateX": "-90deg",
    "--y": "30px",
    "--z": "-10px"
  },
  second: {
    opacity: 0,
    "--rotateX": "-90deg",
    "--y": "30px",
    "--z": "-10px"
  },
  third: {
    opacity: 1,
    "--rotateX": "-20deg",
    "--y": "-330px",
    "--z": "50px",
    transition: {
      delay: 0.6,
      ...flowSpring
    }
  },
  fourth: {
    opacity: 0.1,
    "--rotateX": "40deg",
    "--rotate": "0deg",
    "--y": "-490px",
    "--z": "50px",
    transition: {
      delay: 0.3,
      ...flowSpring
    }
  },
  last: {
    opacity: 0,
    "--rotateX": "40deg",
    "--rotate": "-60deg",
    "--y": "-40px",
    "--z": "50px"
  }
};
const eighthVariants = {
  initial: {
    opacity: 0,
    "--rotateX": "-80deg"
    // "--y": "90px"
  },
  index: {
    opacity: 0,
    "--rotateX": "-80deg"
    // "--y": "90px"
  },
  first: {
    opacity: 0,
    "--rotateX": "-80deg"
    // "--y": "90px"
  },
  second: {
    opacity: 0,
    "--rotateX": "-80deg"
    // "--y": "90px"
  },
  third: {
    opacity: 0,
    "--rotateX": "-80deg"
    // "--y": "90px"
  },
  fourth: {
    opacity: 1,
    "--rotateX": "0deg",
    "--y": "-350px",
    transition: {
      delay: 0.3,
      ...flowSpring
    }
  },
  last: {
    opacity: 0,
    "--rotate": "50deg",
    "--rotateX": "0deg",
    "--y": "-20px"
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

// if (typeof window !== "undefined") {
//   Splitting({ target: "[data-splitting]", by: "chars" });
// }

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

  useEffect(() => {
    // if (typeof window !== "undefined") Splitting();
    if (typeof window !== "undefined") {
      Splitting({ target: "[data-splitting]", by: "chars" });
    }
  }, []);

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
              <Chip className="round fifth" variants={fifthVariants} />
              <Chip className="round sixth" variants={sixthVariants} />
              <Chip className="square seventh" variants={seventhVariants} />
              <Chip className="square eighth" variants={eighthVariants} />
            </motion.div>
            <motion.div
              className="gradientDim bottom"
              variants={gradientDimVariants}
              animate={state === "last" ? "hide" : "show"}
            />
          </motion.div>
          <motion.div
            data-splitting
            className={`title index ${state === "index" ? "current" : "after"}`}
          >
            새로운 은행을
            <br />
            만날 순간
          </motion.div>
          <motion.div
            data-splitting
            className={`title first ${
              state === "index"
                ? "before"
                : state === "first"
                ? "current"
                : "after"
            }`}
          >
            하루만 두어도
            <br />
            2% 이자를 드려요
          </motion.div>
          <motion.div
            data-splitting
            className={`title second ${
              state === "first"
                ? "before"
                : state === "second"
                ? "current"
                : "after"
            }`}
          >
            바로 나오는
            <br />내 대출 한도
          </motion.div>
          <motion.div
            data-splitting
            className={`title third ${
              state === "second"
                ? "before"
                : state === "third"
                ? "current"
                : "after"
            }`}
          >
            뭘 좋아할지 몰라서
            <br />다 준비했어요
          </motion.div>
          <motion.div
            data-splitting
            className={`title fourth ${
              state === "third"
                ? "before"
                : state === "fourth"
                ? "current"
                : "after"
            }`}
          >
            OTP 필요 없이
            <br />
            카드 대면 인증 끝
          </motion.div>
          <motion.div
            data-splitting
            className={`title last ${
              state === "fourth"
                ? "before"
                : state === "last"
                ? "current"
                : "after"
            }`}
          >
            이런 은행이
            <br />내 손 안에 들어왔어요
          </motion.div>
          <Cta
            onTap={onCtaTap}
            variants={ctaVariants}
            initial={"initial"}
            animate={"index"}
            text={
              state === "index"
                ? "어떻게 다를까?"
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
