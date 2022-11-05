import React, { useEffect, useState } from "react";

import genWords from "../config/generatedWords";
import "../styles/standard.scss";
// import { default as SVG_refresh } from "../assets/SVG_refresh.svg";
import { default as SVG_mix_words } from "../assets/SVG_mix_words.png";
import Timer from "../components/Timer";
import SVGRefresh from "../assets/SVGRefresh";

import randomHexaColor from "../components/randomHexaColor";

// import Popup from "../components/Popup";

function Standard() {
  const [input, setInput] = useState("");

  const [words, setWords] = useState(genWords.slice()); //kopieren

  const [startTimer, setStartTimer] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const [refresh, setRefresh] = useState(false);
  const [mixWordsColor, SetMixWordsColor] = useState("#7B61FF");

  const [refreshSVG, setRefreshSVG] = useState("#0080FF");

  const onChangeInput = (e) => {
    setStartTimer(true);
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.split(" ")[0] === words[0] && input.endsWith(" ")) {
      words.shift();
      setInput("");
    }
    if (words.length === 0) {
      setStartTimer(false);
      setResetTimer(false);
      setPauseTimer(true);
      console.log(
        "words.length === 0, setStartTimer(false); setPauseTimer(true);"
      );
    }
    if (input !== "" && refresh) {
      setPauseTimer(false);
      setResetTimer(true);
      setRefresh(false);
      console.log(
        "input after refresh,   setPauseTimer(false); setResetTimer(true);"
      );
    }
  }, [input]);

  const pauseClearProcess = () => {
    setStartTimer(false);
    setPauseTimer(true);
    setRefresh(true);
    setInput("");
  };

  const onClickRefresh = () => {
    pauseClearProcess();
    setWords(genWords.slice());
    setRefreshSVG(randomHexaColor());
  };

  const onClickMixWords = () => {
    SetMixWordsColor(randomHexaColor());

    let d = genWords;
    for (var c = d.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = d[c];
      d[c] = d[b];
      d[b] = a;
    }
    pauseClearProcess();
    setWords(genWords.slice());
  };

  return (
    <>
      <div className="flex mt-52 max-w-screen-2xl mx-auto">
        <div className="flex justify-center md:gap-32 sm:gap-20 items-center w-full">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between space-x-2 items-center">
              <Timer
                onClickStartTimer={startTimer}
                onClickPauseTimer={pauseTimer}
                onClickResetTimer={resetTimer}
              />
            </div>
            <button
              className="w-fit flex justify-between space-x-2 items-center"
              onClick={onClickRefresh}
            >
              <SVGRefresh fillColor={refreshSVG} />
              {/* <img src={SVG_refresh} alt="refresh" width={"15px"} /> */}
              <span data-cy="refresh">Refresh</span>
            </button>
            <button
              className="w-fit flex justify-between space-x-2 items-center"
              onClick={onClickMixWords}
            >
              <img src={SVG_mix_words} alt="refresh" width={"20px"} />
              <span>Mix words</span>
            </button>
          </div>
          <div className="md:w-2/6 sm:w-2/4 break-words">
            <div
              className="overflow-hidden p-3 rounded words-container"
              style={{ backgroundColor: mixWordsColor }}
            >
              {genWords.map((word, index) => {
                return (
                  <React.Fragment key={index}>
                    <span
                      className={
                        words?.includes(word)
                          ? "bg-transparent"
                          : "text-entered_word"
                      }
                    >
                      {word}
                    </span>
                    <span>{"\xa0"}</span>
                  </React.Fragment>
                );
              })}
            </div>
            <input
              className="mt-5 p-1 rounded border-2 border-blue-400"
              type="text"
              onChange={onChangeInput}
              value={input}
              disabled={words.length === 0 ? true : false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Standard;
