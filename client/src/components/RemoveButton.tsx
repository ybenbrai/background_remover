"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

interface RemoveButtonProps {
  file: File | null;
}

export function RemoveButton({ file }: RemoveButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(
    null
  );

  const handleRemoveBackground = async () => {
    if (!file) return;

    setIsLoading(true);
    setProcessedImageUrl(null); // reset previous result if any

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://localhost:8000/remove-background", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to remove background");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setProcessedImageUrl(url);
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error("Error removing background:", error);
      toast.error("Failed to remove background. Try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const originalPreview = file ? URL.createObjectURL(file) : null;

  return (
    <div className="mt-8 space-y-6">
      <button
        className="btn w-full text-black disabled:opacity-50"
        onClick={handleRemoveBackground}
        disabled={!file || isLoading}
      >
        {isLoading ? "Processing..." : "Remove Background"}
      </button>

      {file && (
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
          {/* Original */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">Original Image</p>
            <div className="relative w-64 h-64 overflow-hidden rounded-lg group">
              {originalPreview && (
                <Image
                  src={originalPreview}
                  alt="Original"
                  fill
                  className="object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
            </div>
          </div>

          {/* Processed */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">Processed Image</p>
            <div className="relative w-64 h-64 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center group">
              {isLoading ? (
                <>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-10 h-10 border-4 border-t-transparent border-[color:var(--brand-primary)] rounded-full animate-spin"></div>
                    <span className="text-gray-500 text-sm">Loading...</span>
                  </div>
                </>
              ) : (
                processedImageUrl && (
                  <Image
                    src={processedImageUrl}
                    alt="Processed"
                    fill
                    className="object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                )
              )}
            </div>

            {processedImageUrl && (
              <a
                href={processedImageUrl}
                download="removed-background.png"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-black text-center mt-2"
              >
                Download Image
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
