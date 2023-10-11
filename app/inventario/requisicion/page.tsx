import { useState } from "react";
export default function Requisicion() {
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  const fechaActual = `${yyyy}-${mm}-${dd}`;
  return (
    <div>
      <input type="date" defaultValue={fechaActual} disabled />
      <h2></h2>
    </div>
  );
}
