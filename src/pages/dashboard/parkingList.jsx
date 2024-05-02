// parking List
import { useEffect,useState } from "react";
import DataTable from "react-data-table-component"
// import AddVendorModal from "@/components/AddVendorModal";
import AddVendorModal from "@/components/AddParkingModal";
import { rating } from "@material-tailwind/react";



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
export function ParkingList() {


   const [records, setRecords] = useState([])
   const [filterRecords, setFilterRecords] = useState([])
   const [filterBy, setFilterBy] = useState("_id");
   const [addVendorModalForm, setAddVendorModalForm] = useState(false)
   const [submitData, setSubmitData] = useState({
    
    name: "",
    lat: "",
    long: "",
    address: "",
    car_perhourRate: "",
    bike_perhourRate: "",
    bus_perhourRate: "",
    miniTruck_perhourRate: "",
    HCV_perhourRate: "",
    LCV_perhourRate: "",
    description: "",
    rating: "",
    opentime: "",
    closeTime: "",
    userId:"",
  });
   const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(submitData);
    if(!name || !lat || !long || !address || !description || !rating || !opentime || !closeTime || !userId)
    {
      alert("fill all required fields")
      return;
    }
    try {
      // Make POST request to backend API
      const response = await fetch("https://zeta-4ohz.onrender.com/api/parking-list", {
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
   const column=[
    {
      name:"Parking Id",
      selector: row => row._id,
      sortable:true
    },
    {
      name:"vendor Id",
      selector: row => row.userId,
      sortable:true
    }, 
    {
       name:"name",
       selector: row => row.name,
       sortable:true
     },
     {
       name:"address",
        selector: row => row.address,
        sortable:true
      },
      {
        name:"opentime",
        selector: row => row.opentime,
        sortable:true
      },
      {
        name:"closeTime",
        selector: row => row.closeTime,
        sortable:true
      },
      {
        name:"description",
        selector: row => row.description,
        sortable:true
      },
      {
        name:"lat",
        selector: row => row.lat,
        sortable:true
      },
      {
        name:"long",
        selector: row => row.long,
        sortable:true

      },
      {
        name:"Car perhourRate",
        selector: row => row.car_perhourRate,
        sortable:true
      },
      {
        name:"Bike perhourRate",
        selector: row => row.bike_perhourRate,
        sortable:true
      },
      {
        name:"Bus perhourRate",
        selector: row => row.bus_perhourRate,
        sortable:true
      },
      {
        name:"Minitruck perhourRate",
        selector: row => row.miniTruck_perhourRate,
        sortable:true
      },
      {
        name:"HCV perhourRate",
        selector: row => row.HCV_perhourRate,
        sortable:true
      },
      {
        name:"LCV perhourRate",
        selector: row => row.LCV_perhourRate,
        sortable:true
      },
      {
        name:"rating",
        selector: row => row.rating,
        sortable:true
      }

    ]

    function extractToken(cookieString) {
      const cookies = cookieString.split(';'); // Split into individual cookies
      for (const cookie of cookies) {
          const [name, value] = cookie.trim().split('='); 
          // Split each cookie into name-value pair
          if (name === 'token') { // Check if the name matches the token cookie
              return value;
          }
      }
      return null; // If token cookie not found, return null
  }
    


    useEffect(() => {
      const token = extractToken(document.cookie);
      console.log(token);
      const authHeader = `Bearer ${token}`;
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://zeta-4ohz.onrender.com/api/parking-list",
             {
              headers: {
                'Authorization': authHeader
              }
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const jsonData = await response.json();
          setRecords(jsonData);
          setFilterRecords(jsonData);
          // console.log(jsonData)
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
    const [deleteData, setDeleteData] = useState([])
    const handleDelete = async() => {
      console.log(deleteData);
      try {
        const response = await fetch('https://zeta-4ohz.onrender.com/api/parking-list', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids:deleteData}),
        });
  
        const data = await response.json();
        window.location.reload()
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
   
  return (
    <div>

    <div className="mt-12 mb-8 flex flex-col " >
      
      <div className="flex justify-between mb-2 ">
        <button
        onClick={setAddVendorModalForm}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add Parking</button>
        <button
        onClick={handleDelete}
         className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete Parking</button>
         <select className="block w-40 px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                  onChange={(e) =>
                    setFilterBy( e.target.value )
                  }
                  >
                      {/* <option value=""  disabled selected hidden>Search on</option> */}
                      <option value="_id">Parking Id</option>
                      <option value="vendorId">Vendor Id</option>
                      <option value="name">Name</option>
                      <option value="address">Address</option>
                      <option value="opentime">Open Time</option>
                      <option value="closeTime">Close Time</option>
                      <option value="description">Description</option>
                      <option value="lat">Latitude</option>
                      <option value="long">Longitude</option>
                      <option value="perhourRate">Per Hour Rate</option>
                      <option value="rating">Rating</option>
                    </select>

        <input onChange={handleFilter} className="py-2 px-3 border-2 border-solid border-gray-300" type="text" placeholder="search..." />
      </div>
      <div>

     <DataTable columns={column} data={records}
      customStyles={customStyles}
      pagination
      selectableRows
      expandableRows={true}
      onSelectedRowsChange={(e)=> setDeleteData(e.selectedRows) }
      ></DataTable>
      </div>
    </div>
    {
      addVendorModalForm?<AddVendorModal setAddVendorModalForm={setAddVendorModalForm} handleSubmit={handleSubmit} setSubmitData={setSubmitData} />:null
    }
        
    </div>
  );
}

export default ParkingList;
