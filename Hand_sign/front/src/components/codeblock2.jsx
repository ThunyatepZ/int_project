"use client";
import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function CodeBlock2() {
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
def load_image(path):
    img = tf.io.read_file(path)
    img = tf.image.decode_png(img, channels=1)
    img = tf.image.resize(img, [28, 28])
    img = img / 255.0
    return img

train_ds = tf.data.Dataset.from_tensor_slices((train_paths, train_labels))
train_ds = train_ds.map(lambda x, y: (load_image(x), y)).batch(32)

test_ds = tf.data.Dataset.from_tensor_slices((test_paths, test_labels))
test_ds = test_ds.map(lambda x, y: (load_image(x), y)).batch(32)

`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}