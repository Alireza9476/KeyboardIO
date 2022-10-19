import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

export default function Timer({
  onClickStartTimer,
  onClickPauseTimer,
  onClickResetTimer,
}) {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (onClickStartTimer) {
      // console.log("start()");
      start();
    }
    if (onClickResetTimer) {
      // console.log("reset()");
      reset();
    }
    if (onClickPauseTimer) {
      // console.log("pause()");
      pause();
    }
  }, [onClickStartTimer, onClickPauseTimer, onClickResetTimer]);

  return (
    <div>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}
