import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [forceRender, setForceRender] = useState(0);
  const rendCount = useRef(0);

  useEffect(() => {
    rendCount.current = rendCount.current + 1;
  }, [forceRender]);

  const handleReRender = () => {
    // Update state to force re-render

    setForceRender(Math.random());
  };

  return (
    <div>
      <p>This component has rendered {rendCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
