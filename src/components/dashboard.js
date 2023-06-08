import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
  
    const fetchCustomers = () => {
      
      const mockApiResponse = [
        { id: 1, name: 'KYC', status: 'Pending' },
        { id: 2, name: 'Jane Nanyonga', status: 'Approved' },
        { id: 3, name: 'James Asiimwe', status: 'Pending' },
      ];
  
      setCustomers(mockApiResponse);
    }

    
    // Function to handle customer selection
    const handleCustomerSelection = (customer) => {
        setSelectedCustomer(customer);
    };

    // Function to handle customer approval
    const approveCustomer = (customer) => {
        const updatedCustomers = customers.map((c) => {
          if (c.id === customer.id) {
            return { ...c, status: 'Approved' }
          }
          return c
        });
    
        setCustomers(updatedCustomers)
        setSelectedCustomer(null)
    }

    const rejectCustomer = (customer) => {
        const updatedCustomers = customers.map((c) => {
        if (c.id === customer.id) {
            return { ...c, status: 'Rejected' }
        }
        return c
        })

        setCustomers(updatedCustomers)
        setSelectedCustomer(null)
    }

     // Fetch customers on component mount
    useEffect(() => {
        fetchCustomers()
    }, [])

    return ( 
        <div className='container dashboard'>
            <h2>Admin Dashboard</h2>
            <div>
                <h3>Customers</h3>
                <ul>
                {customers.map((customer) => (
                    <li
                    key={customer.id}
                    onClick={() => handleCustomerSelection(customer)}
                    className={selectedCustomer === customer ? 'selected' : ''}
                    >
                    {customer.name} - {customer.status}
                    </li>
                ))}
                </ul>
            </div>
            {selectedCustomer && (
                <div className="dashbord-table">
                    <h3>Selected Customer</h3>
                    <p>Name: {selectedCustomer.name}</p>
                    <p>Status: {selectedCustomer.status}</p>
                    <button onClick={() => approveCustomer(selectedCustomer)}>
                        Approve
                    </button>
                    <button onClick={() => rejectCustomer(selectedCustomer)}>
                        Reject
                    </button>
                </div>
            )}
        </div>
     )
}
 
export default Dashboard;