import React, { useState } from "react";
import "./FAQCollapse.scss";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "react-feather";

function FAQCollapse({ question, answer }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="faq-collapse">
      <div
        className="faq-collapse-question"
        onClick={() => setIsOpened(!isOpened)}
      >
        <h3>{question}</h3>
        {!isOpened ? (
          <Plus onClick={() => setIsOpened(!isOpened)} />
        ) : (
          <Minus onClick={() => setIsOpened(!isOpened)} />
        )}
      </div>
      <div className="faq-collapse-divider" />
      <div className="answer-wrapper">
        <AnimatePresence>
          {isOpened ? (
            <div style={{ width: "100%" }}>
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: "auto",
                  opacity: 1
                }}
                transition={{
                  duration: 0.5,
                  delay: 0
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
              >
                <p>{answer}</p>
              </motion.div>

              <div className="faq-collapse-divider" />
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FAQCollapse;
