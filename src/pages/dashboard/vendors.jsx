// vendors
import { useEffect,useState } from "react";
import DataTable from "react-data-table-component"
import AddVendorModal from "@/components/AddVendorModal";
import { Link } from "react-router-dom";


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


export function Vendors() {
  const [records, setRecords] = useState([])
   const [filterRecords, setFilterRecords] = useState([])
   const [filterBy, setFilterBy] = useState("_id");
  const [deleteData, setDeleteData] = useState([])
   const [submitData, setSubmitData] = useState({
    
    profilePhoto: "",
     firstName: "",
     lastName: "",
     dateOfBirth: "",
     email: "",
     phoneNumber: "",
     gender: "",
     password: "",
     isVendor: true
  });
  // const [addVendorModal, setaddVendorModal] = useState(false)
   const [addVendorModalForm, setAddVendorModalForm] = useState(false)
  useEffect(() => {
     const fetchData = async () => {

       try {
         const response = await fetch(
           "https://zeta-4ohz.onrender.com/api/all-registers?user=vendor"
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
    const {profilePhoto ,firstName,lastName,dateOfBirth,email,phoneNumber,gender,password} =submitData;
    if(!profilePhoto || !firstName || !lastName|| !dateOfBirth || !email || !phoneNumber || !gender || !password)
    {
      alert("Fill all the fields");
      return;
    }
      
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
        const data = await response.json();
        alert(data.error);
        console.error("Failed to create vendor:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating vendor:", error);
      // Handle error, e.g., show error message
    }
  };
  
   const handleDelete=(async()=>{
     try {
       const response = await fetch('https://zeta-4ohz.onrender.com/api/register', {
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
      name:"Vendor ID",
      selector: row => row._id,
      sortable:true

    },
    {
      name:"profilePhoto",
      selector: row => row.profilePhoto,
      sortable:true
    },
    {
      name:"firstName",
       selector: row => row.firstName,
       sortable:true
     },
     {
       name:"lastName",
       selector: row => row.lastName,
       sortable:true
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
       selector: row => row.password,
       sortable:true
     }
     

   ]

  return (
    <>
    <div className="mt-12 mb-8 flex flex-col " >

    <div className="flex justify-between mb-2 ">
        <button
        onClick={setAddVendorModalForm}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add Vendor</button>
        <button
        onClick={handleDelete}
         className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete Vendor</button>
       
       <select className="block w-40 px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                  onChange={(e) =>
                    setFilterBy( e.target.value )
                  }
                  >
                      {/* <option value=""  disabled selected hidden>Search on</option> */}
                      <option value="vendorId">Vendor Id</option>
                      <option value="firstName">First Name</option>
                      <option value="lastName">Last Name</option>
                      <option value="dateOfBirth">DOB</option>
                      <option value="email">email</option>
                      <option value="phoneNo">phone no</option>
                      <option value="gender">gender</option>
                      <option value="password">password</option>
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

export default Vendors;
