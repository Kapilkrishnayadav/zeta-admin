import React,{ useEffect, useState } from 'react'
import TimePick from './TimePick'
const AddParkingModal = ({setAddVendorModalForm,handleSubmit,setSubmitData}) => {
    // const [addVendorModalForm, setAddVendorModalForm] = useState(false)
    const [openHour, setOpenHour] = useState("00");
   const [openMinute, setOpenMinute] = useState("00");
   const [openAM, setOpenAm] = useState("AM")
   const [opentime, setOpenTime] = useState("")
   
    const [closeHour, setCloseHour] = useState("00");
    const [closeMinute, setCloseMinute] = useState("00");
    const [closeAM, setCloseAm] = useState("AM")
    const [closeTime, setCloseTime] = useState("")
    
   useEffect(() => {
     setOpenTime(openHour+":"+openMinute+" "+ openAM)
     setCloseTime(closeHour+":"+closeMinute+" "+ closeAM)
     
   }, [openAM,openHour,openMinute,closeAM,closeHour,closeMinute])

   useEffect(() => {
     setOpenTime(openHour+":"+openMinute+" "+ openAM)
     setCloseTime(closeHour+":"+closeMinute+" "+ closeAM)
     setSubmitData(
      (prev) => (prev = { ...prev, opentime: opentime })
    )
    setSubmitData(
      (prev) =>
        (prev = { ...prev, closeTime: closeTime})
    )
     
   }, [openAM,openHour,openMinute,closeAM,closeHour,closeMinute])
    //  const abc=()=>{
    //    console.log("opentime->"+opentime);
    //    console.log("closetime->"+closeTime)
    //   //  console.log(submitData);
    //  }

  return (
    <div>
         <div className="Modal_container flex items-center h-[90vh] overflow-scroll py-8  fixed top-10 left-[25vw]">
          <section className="flex justify-center items-center mt-72  p-6 mx-auto bg-gray-700 rounded-md shadow-md">
            <div>
              <p className="border-b-2 w-[18rem] border-[#10b981]  mb-8 text-center  text-xl font-bold text-gray-300 capitalize ">
                Add Parking 
              </p>
      {/* <button onClick={abc}>abc</button> */}

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Name*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, name: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Latitide*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, lat: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Longitude*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, long: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Address*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, address: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Rating
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, rating: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Car Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, car_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                  Bike Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, bike_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                   Bus Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, bus_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

            
              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                  Minitruck Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, miniTruck_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                   HCV Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, HCV_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>
              <div className="flex">
              <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                   LCV Rate Per Hour
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, LCV_perhourRate: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Open time*
                  </label>
                  <TimePick setHour={setOpenHour} setMinute={setOpenMinute} setam={setOpenAm}/>
                  {/* <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, opentime: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="time"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  /> */}
                </div>

                    


              </div>
              <div className="flex">
              <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Close time*
                  </label> 
                  <TimePick setHour={setCloseHour} setMinute={setCloseMinute} setam={setCloseAm}/>

                  {/* <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, closeTime: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  /> */}
                </div>
                <div className="Title__ my-1 mr-8 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Vendor ID*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, userId: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                </div>

                  </div>
              <div className="Title__ my-1 ">
                <label className="text-lg text-gray-300 " htmlFor="title">
                  Description*
                </label>
                <textarea
                  onChange={(e) =>
                    setSubmitData(
                      (prev) =>
                      (prev = { ...prev, description: e.target.value })
                    )
                  }
                  id="title"
                  placeholder="Enter Title"
                  type="text"
                  className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                  required
                  />
              </div>

              <div className="flex justify-between">
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-gray-300 hover:text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-[#10b981] border-2 border-[#10b981]"
                  >
                    Save
                  </button>
                </div>
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={() => setAddVendorModalForm(false)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-gray-300 hover:text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-[#10b981] border-2 border-[#10b981]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      
    </div>
  )
}

export default AddParkingModal