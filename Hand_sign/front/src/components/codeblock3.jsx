"use client";
import ClipboardJS from "clipboard";
import { useEffect } from "react";

export default function CodeBlock3() {
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
from tensorflow.keras import layers, models

model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

history = model.fit(train_ds, epochs=10, validation_data=test_ds)

loss, acc = model.evaluate(test_ds)
print(f"Test Accuracy: {acc * 100:.2f}%")
`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}