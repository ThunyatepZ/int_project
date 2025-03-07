import { useEffect, useRef, useState } from "react";

const DrawingCanvas = ({ width = 500, height = 500, color = "black", lw = 40, onConvertToBase64 }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
  }, [color]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const convertToBase64 = () => {
    const canvas = canvasRef.current;
    const base64Image = canvas.toDataURL("image/png");
    if (onConvertToBase64) {
      onConvertToBase64(base64Image); // ส่งค่า Base64 ออกไปให้ `Machine.js`
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: "1px solid black", background: "white" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div style={{}}>
        <button className="bg-white p-2 rounded-lg text-black" onClick={clearCanvas}>clear</button>
        <button className="bg-white p-2 rounded-lg text-black ml-2" onClick={convertToBase64}>
          Convert to Base64
        </button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
