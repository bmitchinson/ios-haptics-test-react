import React from "react";

// whats the best way to just like quickly type this?
// there's gotta be a built in idk about
export const CenterOnScreen = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};
