import React, { useState } from 'react';

const CustomerOnboardingForm  = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subscriptionType, setSubscriptionType] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentConfirmation, setPaymentConfirmation] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
  
    const handleNameChange = (event) => {
      setName(event.target.value)
    }
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }
  
    const handleSubscriptionTypeChange = (event) => {
      setSubscriptionType(event.target.value)
    }

    const handlePaymentMethodChange = (event) => {
      setPaymentMethod(event.target.value)
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value)
    };
  
    const handlePaymentConfirmationChange = (event) => {
      setPaymentConfirmation(event.target.value)
    };
  
    const handleSubmit = (event) => {
      event.preventDefault()

      if (name.trim() === '' || email.trim() === '' || subscriptionType === '') {
        setErrorMessage('Please fill in all fields.');
      } else if (paymentMethod === 'mobileMoney' && (phoneNumber.trim() === '' || paymentConfirmation.trim() === '')) {
        setErrorMessage('Please fill in mobile money payment details.');
      } else {
        setErrorMessage('');
      // Perform submission logic here (e.g., send data to server, process payment, etc.)
        console.log('Form submitted!')
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Subscription Type:', subscriptionType)
        console.log('Payment Method:', paymentMethod)
        console.log('Phone Number:', phoneNumber)
        console.log('Payment Confirmation:', paymentConfirmation)
        setShowSuccessModal(true);
      }
    }

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        // Reset form fields after closing success modal
        setName('');
        setEmail('');
        setSubscriptionType('');
        setPaymentMethod('');
        setPhoneNumber('');
        setPaymentConfirmation('');
      };

    return ( 
        
        <div className="container f-form">
            <div className="user-register"> 
                <div className="form-title">
                    <h3>Customer Onboarding</h3>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-section">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange} />
                    </div>

                    <div className="form-section">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </div>

                    <div className="form-section">
                        <label>Subscription Type:</label>
                        <select value={subscriptionType} onChange={handleSubscriptionTypeChange}>
                            <option value="">Select...</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                    <div className="form-section">
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                            <option value="">Select...</option>
                            <option value="mobileMoney">Mobile Money</option>
                        </select>
                    </div>
                    {paymentMethod === 'mobileMoney' && (
                        <div className="form-section">
                            <div>
                                <label>Phone Number:</label>
                                <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                            </div>
                            <div>
                                <label>Payment Confirmation:</label>
                                <input type="text" value={paymentConfirmation} onChange={handlePaymentConfirmationChange} />
                            </div>
                        </div>
                    )}

                    {errorMessage && <p className="text-error">{errorMessage}</p>}
                    <button type="submit">Submit</button>

                    {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success!</h3>
            <p>Thank you for onboarding, {name}!</p>
            <button onClick={handleSuccessModalClose}>Close</button>
          </div>
        </div>
      )}
                </form>

            </div>
        </div>
     )
}
 
export default CustomerOnboardingForm ;