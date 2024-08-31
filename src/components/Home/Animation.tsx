import { useRef, useEffect, FC } from "react";
import styles from "./animation.module.css";

const Animation: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const fontSize = 16;
    const columns = Math.floor(W / fontSize);
    const drops: number[] = Array(columns).fill(0);
    const str = "Matrix Hacking Effect";

    const draw = () => {
      context.fillStyle = "rgba(60, 56, 54, 0.5)";
      context.fillRect(0, 0, W, H);
      context.font = `700 ${fontSize}px monospace`;
      context.fillStyle = "#689d6a";

      for (let i = 0; i < columns; i++) {
        const index = Math.floor(Math.random() * str.length);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 40);
    return () => clearInterval(intervalId);
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default Animation;
