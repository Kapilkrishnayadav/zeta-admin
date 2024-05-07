import React,{ useState } from 'react'
const EditVendorModal = ({setEditVendorModalForm,handleSubmitEdit,setSubmitEditData,submitEditData}) => {
  
  
  return (
    <div>
         <div className="Modal_container flex items-center h-[100vh] py-8  fixed top-0 left-[25vw]">
          <section className="flex justify-center items-center   p-6 mx-auto bg-gray-700 rounded-md shadow-md">
            <div>
              <p className="border-b-2 w-[18rem] border-[#10b981] pb-2 mb-8 text-center  text-xl font-bold text-gray-300 capitalize ">
                Edit Vendor
              </p>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    First Name
                  </label>
                  <input
                  value={submitEditData.firstName}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) => (prev = { ...prev, firstName: e.target.value })
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
                    Last Name
                  </label>
                  <input
                   value={submitEditData.lastName}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) => (prev = { ...prev, lastName: e.target.value })
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
                    Date Of Birth
                  </label>
                  <input
                   value={submitEditData.dateOfBirth}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) => (prev = { ...prev, dateOfBirth: e.target.value })
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
                    Email
                  </label>
                  <input
                   value={submitEditData.email}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) => (prev = { ...prev, email: e.target.value })
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
                    Phone Number
                  </label>
                  <input
                   value={submitEditData.phoneNumber}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) => (prev = { ...prev, phoneNumber: e.target.value })
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
                
                  <label className="text-lg text-gray-300 " htmlFor="gender">Gender:</label>
                  <select className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                   value={submitEditData.gender}
                  onChange={(e) =>
                    setSubmitEditData(
                      (prev) =>
                        (prev = { ...prev, gender: e.target.value })
                    )
                  }
                  >
                      <option value=""  disabled selected hidden>select</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  
                </div>
              
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Password
                  </label>
                  <input
                   value={submitEditData.password}
                    onChange={(e) =>
                        setSubmitEditData(
                        (prev) =>
                          (prev = { ...prev, password: e.target.value })
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
               

              
              <div className="flex justify-between">
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={(e) => handleSubmitEdit(e)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-gray-300 hover:text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-[#10b981] border-2 border-[#10b981]"
                  >
                    Save
                  </button>
                </div>
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={() => setEditVendorModalForm(false)}
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

export default EditVendorModal