import React from "react";
import { useState,useEffect } from "react";
import DataTable from "react-data-table-component"
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   IconButton,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Tooltip,
//   Progress,
// } from "@material-tailwind/react";

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

export function BookParking() {
  const [records, setRecords] = useState([])
  const [filterBy, setFilterBy] = useState("_id")
  const [filterRecords, setFilterRecords] = useState([])

  const column=[
    {
      name:"Booking Id",
      selector: row => row._id

    },
    {
      name:"vehicle Type",
      selector: row => row.typeOfVehicle

    },
    {
      name:"Vehicle No",
       selector: row => row.vehicleNo,
       sortable:true
     },
     {
       name:"Start Date Time",
       selector: row => row.startDateTime
     },
     {
       name:"End Date Time",
       selector: row => row.endDateTime,
       sortable:true
     },
     {
       name:"Vehicle Name",
       selector: row => row.nameOfVehicle,
       sortable:true
     },
     {
       name:"Parking ID",
       selector: row => row.parkingId,
       sortable:true
       
      },
      {
        name:"Status",
        selector: row => row.status,
        sortable:true
      },
     {
       name:"Customer Id",
       selector: row => row.userId
     }
     

   ]


  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(
          "http://localhost:3001/api/get-all-book-parking"
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

  const handleFilter=((e)=>{
    const newData=filterRecords.filter((row)=>row[filterBy].toLowerCase().includes(event.target.value.toLowerCase())) 
    
    setRecords(newData)
  })

  return (
    <div className="">
     <div className="flex items-center justify-center space-x-6">
     <select className="block w-40 px-4 py-2  text-gray-800 bg-white border border-gray-300 rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                  onChange={(e) =>
                    setFilterBy( e.target.value )
                  }
                  >
     <option value="_id">Booking Id</option>
                      <option value="vehicleType">Vehicle Type</option>
                      <option value="vehicleNo">Vehicle No</option>
                      <option value="startDateTime">Start Date Time</option>
                      <option value="endDateTime">End Date Time</option>
                      <option value="nameOfVehicle">Vehicle Name</option>
                      <option value="parkingId">Parking Id</option>
                      <option value="status">Status</option>
                      <option value="userId">Customer Id</option>
                      </select>
     <input onChange={handleFilter} className="py-2 px-3 border-2 border-solid border-gray-300" type="text" placeholder="search..." />
     </div>
<DataTable columns={column} data={records}
 customStyles={customStyles}
 pagination
 selectableRows
 expandableRows={true}
 onSelectedRowsChange={(e)=> setDeleteData(e.selectedRows) }
 ></DataTable>
    </div>
  );
}

export default BookParking;