"use client";

import { useState, DragEvent, ChangeEvent } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { RemoveButton } from "@/components/RemoveButton";
import { UploadIcon } from "@/components/icons/UploadIcon";

export function UploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB max

  const isValidImage = (file: File) => {
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    return validTypes.includes(file.type) && file.size <= MAX_FILE_SIZE;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (!isValidImage(selectedFile)) {
        alert("Only JPG, PNG, WEBP images under 5MB are allowed.");
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (!isValidImage(droppedFile)) {
        alert("Only JPG, PNG, WEBP images under 5MB are allowed.");
        return;
      }
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="mt-8 mx-auto max-w-sm">
      <div className="relative">
        <label
          htmlFor="file-upload"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="flex flex-col items-center justify-center w-full h-40 p-6 border-2 border-dashed border-[color:var(--brand-primary)] rounded-lg cursor-pointer hover:bg-[color:var(--brand-bg)] transition overflow-hidden relative"
        >
          {previewUrl ? (
            <>
              <div className="relative w-full h-36 animate-fade-in">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="absolute top-2 right-2 bg-white hover:cursor-pointer text-black rounded-full p-1 shadow hover:bg-gray-200 transition"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              <UploadIcon />
              <p className="text-gray-600 text-sm">
                Click to upload or drag & drop
              </p>
            </>
          )}
        </label>
      </div>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <RemoveButton file={file} />
    </div>
  );
}
