"use client";
import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function CodeBlock() {
  useEffect(() => {
    new ClipboardJS(".copy-btn");
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto mt-24">
      <div className="bg-gray-900 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Code:</span>
          <button
            className="copy-btn bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
            data-clipboard-target="#code"
          >
            Copy
          </button>
        </div>

        <div className="overflow-x-auto">
          <pre
            id="code"
            className="text-gray-300 p-2 rounded-md bg-gray-800 whitespace-pre-wrap text-left"
          >
<code>{`
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split


image_paths = []
labels = []

for label in sorted(os.listdir(data_dir)):
    label_path = os.path.join(data_dir, label)
    if os.path.isdir(label_path):
        for image_file in os.listdir(label_path):
            image_paths.append(os.path.join(label_path, image_file))
            labels.append(int(label))


train_paths, test_paths, train_labels, test_labels = train_test_split(
    image_paths, labels, test_size=0.2, random_state=42, stratify=labels
)

`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}