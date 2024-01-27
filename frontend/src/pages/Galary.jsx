import React from 'react'
import mobile from "../assets/Mi-PNG-Clipart.png"

const Galary = () => {
  return (
    <div class="grid grid-cols-6 col-span-2 gap-2 my-10 w-11/12 mx-auto">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out "
                 src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                 alt="" />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out "
                 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                 alt="" />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out "
                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                 alt="" />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out "
                 src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                 alt="" />
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem] bg-gray-300">
            <img class="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out "
                 src={mobile}
                 alt="" />
          </div>
    </div>
  )
}

export default Galary