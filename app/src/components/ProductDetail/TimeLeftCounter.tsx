import { useEffect, useState } from "react";

import {
  RemainingTime,
  defaultRemainingTime,
  getRemainingTimeUntilMsTimestamp
} from "../../utils/countdownTimer";

interface TimeLeftCounterProps { endDateTimestampMs: number }

const TimeLeftCounter = ({ endDateTimestampMs }: TimeLeftCounterProps) => {
  const timerDefaultValue = '00';
  const [remainingTime, setRemainingTime] = useState<RemainingTime>(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(endDateTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endDateTimestampMs]);

  const updateRemainingTime = (countdown: any) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div>
      <span>Time left:</span>
      <p>
        {remainingTime.days !== timerDefaultValue && `${remainingTime.days} Days `}
        {remainingTime.hours !== timerDefaultValue && `${remainingTime.hours} hours `}
        {remainingTime.minutes !== timerDefaultValue && `${remainingTime.minutes} minutes `}
        {remainingTime.seconds !== timerDefaultValue ? `${remainingTime.seconds} seconds ` : '-'}
      </p>
    </div>
  );
}

export default TimeLeftCounter;