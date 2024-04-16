import { useEffect,useState } from "react";
import DataTable from "react-data-table-component"
import AddVendorModal from "@/components/AddVendorModal";
const customStyles={
  headRow:{
    style:{
      backgroundColor:'blue',
      color:'white'
    }
  },
  headCells:{
    styles:{
      fontSize:'16px',
      fontWeight:'600',
      textTranform:'uppercase'
    }
  },
  cells:{
    styles:{
      fontSize:'15px',
    }
  }
}


export function Tables() {
   const [records, setRecords] = useState([])
   const [filterRecords, setFilterRecords] = useState([])
   const [addVendorModalForm, setAddVendorModalForm] = useState(false)
   const [submitData, setSubmitData] = useState({
    
    name: "",
    lat: "",
    long: "",
    address: "",
    perhourRate: "",
    description: "",
    rating: "",
    saved: false,
    opentime: "",
    closeTime: "",
  });
   const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(submitData);

    try {
      // Make POST request to backend API
      const response = await fetch("http://localhost:3001/api/parking-list", {
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
       name:"address",
        selector: row => row.address,
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
        name:"name",
        selector: row => row.name

      },
      {
        name:"opentime",
        selector: row => row.opentime
      },
      {
        name:"perhourRate",
        selector: row => row.perhourRate
      },
      {
        name:"rating",
        selector: row => row.name
      }

    ]
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://zeta-4ohz.onrender.com/api/parking-list"
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
      const newData=filterRecords.filter((row)=>row.name.toLowerCase().includes(event.target.value.toLowerCase())) 
      setRecords(newData)
    })
    const handleDelete = async(state) => {
      var deleteData=state.selectedRows;
      console.log(deleteData);
      try {
        const response = await fetch('http://localhost:3001/api/parking-list', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids:deleteData}),
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
   
  return (
    <div>

    <div className="mt-12 mb-8 flex flex-col " >
      {/* <div className="flex justify-start">
        
        </div> */}
      <div className="flex justify-between mb-2 ">
        <button
        onClick={setAddVendorModalForm}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add Vendor</button>
        <button className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete Vendor</button>
        <input onChange={handleFilter} className="py-2 px-3 border-2 border-solid border-gray-300" type="text" placeholder="search..." />
      </div>
     <DataTable columns={column} data={records}
      customStyles={customStyles}
      pagination
      selectableRows
      onSelectedRowsChange={handleDelete}
      ></DataTable>
    </div>
    {
      addVendorModalForm?<AddVendorModal setAddVendorModalForm={setAddVendorModalForm} handleSubmit={handleSubmit} setSubmitData={setSubmitData} />:null
    }
        
    </div>
  );
}

export default Tables;
