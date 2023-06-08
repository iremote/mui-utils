import { useEffect, useState } from "react";
import { CenteredBox, CenteredTypography, StyledCircularProgress } from "./TimedCircularProgress.styles";

export interface TimedCircularProgressProps {
  counterStart?: number,
  hideCounter?: boolean,
}

function TimedCircularProgress({ counterStart = 5, hideCounter = false }: TimedCircularProgressProps) {
  const [counter, setCounter] = useState(counterStart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(prevCounter => prevCounter - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setLoading(false);
    }
  }, [counter]);

  if (!loading) {
    return <></>;
  }

  return (
    <CenteredBox>
      <StyledCircularProgress size={100} />
      {!hideCounter && <CenteredTypography variant="body1">
        {counter}
      </CenteredTypography>}
    </CenteredBox>
  );
}

export default TimedCircularProgress;
