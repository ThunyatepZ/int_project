"use client";
import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function CodeBlock_ML() {
  useEffect(() => {
    new ClipboardJS(".copy-btn");
  }, []);

  return (
    <div className="relative max-w-2xl mx-20 mt-24">
      <div className="bg-stone-500 bg-clip-padding backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Code KNN :</span>
          <button
            className="copy-btn bg-gray-800 bg-opacity-80 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
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
from google.colab import files
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('/content/sport_health_dataset.csv')
print(df.head())

`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}