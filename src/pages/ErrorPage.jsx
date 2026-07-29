import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      404
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go back Home</button>
    </div>
  );
}
