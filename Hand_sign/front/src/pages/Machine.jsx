import axios from "axios"
import { useEffect, useState } from "react"

const Machine = () => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/data").then((res) => (
      setdata(res.data)
    )).catch((error) => console.error("Error:", error))

  }, [])
  console.log(data)
  return (
    <div>
      <div id="1" className="text-white">
        {data && (
          `${data.message}`
        )}
      </div>

      Machine Page
    </div>
  )
}

export default Machine
