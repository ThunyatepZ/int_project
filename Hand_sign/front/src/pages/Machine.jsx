import Navbar from '@/components/Navbar'
import DrawingCanvas from '@/components/canvas'

function Machine() {
  return (
    <div>
      <div className='fixed w-full'>
        <Navbar />
      </div>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='absolute flex justify-center w-screen h-screen items-start text-white mt-32'>
          Machine learning predic number 0-9!!!
        </div>
        <div className='absolute flex justify-center items-center text-white h-full w-screen'>
          <DrawingCanvas width={500} height={500} />
        </div>
      </div>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='w-[50%]'>
          <img src={"/image.png"} />
        </div>
      </div>

    </div>

  )
}

export default Machine