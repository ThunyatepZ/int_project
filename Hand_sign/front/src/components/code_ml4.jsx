"use client";
import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function CodeBlock_ML4() {
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

knn = KNeighborsClassifier(n_neighbors=3)  
knn.fit(X_train, y_train)

new_data = [[40, 0, 1, 0, 45, 2]] 
new_data_scaled = scaler.transform(new_data)  
prediction = knn.predict(new_data_scaled)
recommended_sport = label_encoder.inverse_transform(prediction)

print(f"Recommended Sport/Activity: {recommended_sport[0]}")

`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}