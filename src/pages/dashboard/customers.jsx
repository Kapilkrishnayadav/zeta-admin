//  customers
 import React from "react";
import { useState,useEffect } from "react";
import AddVendorModal from "@/components/AddVendorModal";
import DataTable from "react-data-table-component"
// import {
//   Typography,
//   Alert,
//   Card,
//   CardHeader,
//   CardBody,
// } from "@material-tailwind/react";
// import { InformationCircleIcon } from "@heroicons/react/24/outline";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  headCells: {
    style: {
      fontSize: '14px',
      textTransform: 'uppercase',
      // minWidth: '50%'
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      width: '300px',
      padding: '8px 16px', // Adjust padding for cell content
      // minWidth: '50%'
    },
  }
}


export function Customers() {

  const [records, setRecords] = useState([])
  const [filterRecords, setFilterRecords] = useState([])
  const [filterBy, setFilterBy] = useState("_id")
 const [deleteData, setDeleteData] = useState([])
  const [submitData, setSubmitData] = useState({
   
   profilePhoto: "wesdsd",
    firstName: "kapil",
    lastName: "krishna",
    dateOfBirth: "1990-01-01",
    email: "kapil@example104.com",
    phoneNumber: "1234567890",
    gender: "male",
    password: "password123",
    isVendor: false
 });
 // const [addVendorModal, setaddVendorModal] = useState(false)
  const [addVendorModalForm, setAddVendorModalForm] = useState(false)
 useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(
          "http://localhost:3001/api/all-registers?user=customer"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setRecords(jsonData);
        setFilterRecords(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.log(error.message);
      }
    };
 
    fetchData();
  }, []);

  const handleSubmit = async(e) => {
   e.preventDefault();
   console.log(submitData);

   try {
     // Make POST request to backend API
     const response = await fetch("http://localhost:3001/api/register", {
       method: "POST",
       headers: {
         
         "Content-Type": "application/json",
       },
       body: JSON.stringify(submitData),
     });

     // Check if request was successful
     if (response.ok) {
       const data = await response.json();
       console.log("Parking entry created successfully:", data);
       setAddVendorModalForm(false);
       // Handle success, e.g., show success message
       window.location.reload()
     } else {
       // Handle error, e.g., show error message
       console.error("Failed to create parking entry:", response.statusText);
     }
   } catch (error) {
     console.error("Error creating parking entry:", error);
     // Handle error, e.g., show error message
   }
 };
 
  const handleDelete=(async()=>{
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({ ids:deleteData}),
       });
       
       const data = await response.json();
       console.log(deleteData)
       window.location.reload()
       console.log(data);
     } catch (error) {
       console.error('Error:', error);
     }
  })

  const handleFilter=((e)=>{
   const newData=filterRecords.filter((row)=>row[filterBy].toLowerCase().includes(event.target.value.toLowerCase())) 
   setRecords(newData)
 })

  const column=[
   {
     name:"Customer ID",
     selector: row => row._id

   },
   {
     name:"profilePhoto",
     selector: row => row.profilePhoto

   },
   {
     name:"firstName",
      selector: row => row.firstName,
      sortable:true
    },
    {
      name:"lastName",
      selector: row => row.lastName
    },
    {
      name:"dateOfBirth",
      selector: row => row.dateOfBirth,
      sortable:true
    },
    {
      name:"email",
      selector: row => row.email,
      sortable:true
    },
    {
      name:"phoneNumber",
      selector: row => row.phoneNumber,
      sortable:true
      
     },
     {
       name:"gender",
       selector: row => row.gender,
       sortable:true
     },
    {
      name:"password",
      selector: row => row.password
    }
    

  ]
  return (
    <>
    <div className="mt-12 mb-8 flex flex-col " >

    <div className="flex justify-between mb-2 ">
        <button
        onClick={setAddVendorModalForm}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add customer</button>
        <button
        onClick={handleDelete}
         className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete customer</button>
        <select className="block w-40 px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                  onChange={(e) =>
                    setFilterBy( e.target.value )
                  }
                  >
                      {/* <option value=""  disabled selected hidden>Search on</option> */}
                      <option value="_id">Customer Id</option>
                      {/* <option value="profilePhoto">Profile Photo</option> */}
                      <option value="firstName">First Name</option>
                      <option value="lastName">Last Name</option>
                      <option value="dateOfBirth">Date of Birth</option>
                      <option value="email">Email</option>
                      <option value="phoneNumber">Phone Number</option>
                      <option value="gender">Gender</option>
                      <option value="password">Password</option>
                    </select>
        <input onChange={handleFilter} className="py-2 px-3 border-2 border-solid border-gray-300" type="text" placeholder="search..." />
      </div>
      <DataTable columns={column} data={records}
      customStyles={customStyles}
      pagination
      selectableRows
      // expandableRows={true}
      onSelectedRowsChange={(e)=> setDeleteData(e.selectedRows) }
      ></DataTable>
      {
        addVendorModalForm?<AddVendorModal setAddVendorModalForm={setAddVendorModalForm} handleSubmit={handleSubmit} setSubmitData={setSubmitData} />:null
      }
      </div>
    </>
  );
}

export default Customers;