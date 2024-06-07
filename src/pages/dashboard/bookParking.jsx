import React from "react";
import { useState,useEffect } from "react";
import { io } from "socket.io-client";
import DataTable from "react-data-table-component"
import { data } from "autoprefixer";
import CopyButton from "@/components/CopyButton";
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
      width:'150px'
    },
  },
  cells: {
    style: {
      fontSize: '14px',
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
      selector: row => row._id,
      width:"220px",
      sortable:true

    },
    {
      name:"copy",
      cell: (row) => (
        <div  >
      <CopyButton text={row._id}/>
    
    </div>
  ),
  width:"100px",
  
  },
    {
      name:"vehicle Type",
      selector: row => row.typeOfVehicle,
      sortable:true

    },
    {
      name:"Vehicle No",
       selector: row => row.vehicleNo,
       width:"200px",
       sortable:true
     },
     {
       name:"Start Date Time",
       selector: row => row.startDateTime,
       width:"250px",
       sortable:true
     },
     {
       name:"End Date Time",
       selector: row => row.endDateTime,
       width:"250px",
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
       width:"220px",
       sortable:true
       
      },
      {
        name:"copy",
        width:"100px",
        cell: (row) => (
      <div  >
        <CopyButton text={row.parkingId}/>
      
      </div>
    ),
    
    },
      {
        name:"Status",
        selector: row => row.status,
        width:"150px",
        sortable:true
      },
     {
       name:"Customer Id",
       selector: row => row.userId,
       width:"220px",
       sortable:true
     },
     {
      name:"copy",
      width:"100px",
      cell: (row) => (
    <div  >
      <CopyButton text={row.userId}/>
    
    </div>
  ),
  
  },
     

   ]

//    const [events, setEvents] = useState([]);
//    const socket = io('https://zeta-4ohz.onrender.com',{
//     withCredentials: true,
//   }); // Connect to your server

//    useEffect(() => {
//        socket.on('adminEvent', handleAdminEvent);
//       //  socket.emit("customerEvent", { message: "Hello from the client!" });
//       console.log(data)
//        return () => {
//            socket.off('adminEvent', handleAdminEvent);
//        };
//    }, []); // On
//    const handleAdminEvent = (data) => {
//     console.log(data)
//     // setEvents((prevEvents) => [...prevEvents, data]);
// };




  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/get-all-book-parking`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        jsonData.reverse();
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
 onSelectedRowsChange={(e)=> setDeleteData(e.selectedRows) }
 ></DataTable>
 
    </div>
  );
}

export default BookParking;
