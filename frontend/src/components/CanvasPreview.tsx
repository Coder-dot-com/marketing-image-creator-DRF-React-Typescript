import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';

interface CanvasPreviewProps {
  uploadedImage: string | null;
  text: string;
  font: string;
  fontSize: number;
  color: string;
  borderColor: string;
}

const CanvasPreview = forwardRef<HTMLCanvasElement, CanvasPreviewProps>(
  ({ uploadedImage, text, font, fontSize, color, borderColor }, ref) => {

    const localCanvasRef = useRef<HTMLCanvasElement>(null);

    // Expose canvas to parent via forwarded ref
    useImperativeHandle(ref, () => localCanvasRef.current as HTMLCanvasElement);

    useEffect(() => {
      const canvas = localCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 1000;
      canvas.height = 1000;

      const drawText = () => {
        if (!text) return;

        ctx.font = `${fontSize}px ${font}`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const maxWidth = canvas.width - 100;
        const lineHeight = fontSize * 1.2;
        const x = canvas.width / 2;
        let y = canvas.height / 2;

        const words = text.split(" ");
        let line = "";

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          if (ctx.measureText(testLine).width > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
      };

      const drawBorder = () => {
        if (!borderColor || borderColor === "none") return;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 10;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      };

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!uploadedImage) {
        drawText();
        drawBorder();
        return;
      }

      const img = new Image();
      img.onload = () => {
        const borderThickness = 10;
        const innerWidth = canvas.width - 2 * borderThickness;
        const innerHeight = canvas.height - 2 * borderThickness;

        const scale = Math.min(innerWidth / img.width, innerHeight / img.height);
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const x = borderThickness + (innerWidth - scaledWidth) / 2;
        const y = borderThickness + (innerHeight - scaledHeight) / 2;

        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        drawText();
        drawBorder();
      };

      img.src = uploadedImage;
    }, [uploadedImage, text, font, fontSize, color, borderColor]);

    return (
      <div className="mt-3">
        <h4>Preview</h4>
        <canvas
          ref={localCanvasRef}
          style={{ border: "1px solid #ccc", maxWidth: "100%", maxHeight: "40rem" }}
        />
      </div>
    );
  }
);

export default CanvasPreview;
