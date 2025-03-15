"use client";
import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function CodeBlock_DT2() {
  useEffect(() => {
    new ClipboardJS(".copy-btn");
  }, []);

  return (
    <div className="relative max-w-2xl mx-20 mt-24">
      <div className="bg-stone-500 bg-clip-padding backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Code DT :</span>
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

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_train, y_train)

new_data = [[60, 1, 1, 2, 60, 2]]  
new_data_scaled = scaler.transform(new_data)  
prediction = dt.predict(new_data_scaled)
recommended_sport = label_encoder.inverse_transform(prediction)

print(f"Recommended Sport/Activity: {recommended_sport[0]}")

`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}