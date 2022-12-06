import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export const PickNPlace = () => {
  const [{ cx, cy }, api] = useSpring(() => ({ cx: 100, cy: 100 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ down, offset: [mx, my] }) => {
      api.start({ cx: mx, cy: my, immediate: down });
    },
    { from: () => [cx.get(), cy.get()] }
  );

  const size = React.useMemo(() => {
    return { width: window.innerWidth, height: window.innerHeight };
  });

  return (
    <div style={{ width: "100%", height: "100%", touchAction: "none" }}>
      <svg width="100%" viewBox={`0 0 ${size.width} ${size.height}`}>
        <animated.circle
          {...bind()}
          cx={cx}
          cy={cy}
          r={50}
          stroke="red"
          fill="red"
          style={{ touchAction: "none" }}
        />
      </svg>
    </div>
  );
};
