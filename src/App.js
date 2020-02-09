import React, { useState, useEffect } from "react";
import Gps from "./Gps";
import Github from "./Github";
import Counter from "./Counter";
export default function App() {
  return (
    <>
      <Counter></Counter>
      <Github />
      <Gps />
    </>
  );
}
