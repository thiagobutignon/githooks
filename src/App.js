import React, { useState, useEffect } from "react";
import Gps from "./Gps";
import Github from "./Github";
import Counter from "./Counter";
import EmailAutocomplete from "./EmailAutocomplete";
export default function App() {
  return (
    <>
      <EmailAutocomplete></EmailAutocomplete>
      <Counter></Counter>
      <Github />
      <Gps />
    </>
  );
}
