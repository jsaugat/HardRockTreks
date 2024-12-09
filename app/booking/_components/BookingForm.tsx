'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TripDetails from './TripDetails'
import CustomerDetails from './CustomerDetails'
import EmergencyContact from './EmergencyContact'
import TravelInsurance from './TravelInsurance'
import OtherDetails from './OtherDetails'

export default function BookingForm() {
  const [formData, setFormData] = useState<{ [key: string]: any }>({})
  const handleChange = (section: string, data: object) => {
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], ...data } }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Trip Details</CardTitle>
        </CardHeader>
        <CardContent>
          <TripDetails onChange={(data: object) => handleChange('tripDetails', data)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomerDetails onChange={(data: object) => handleChange('customerDetails', data)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <EmergencyContact onChange={(data: object) => handleChange('emergencyContact', data)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travel Insurance</CardTitle>
        </CardHeader>
        <CardContent>
          <TravelInsurance onChange={(data: object) => handleChange('travelInsurance', data)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Details</CardTitle>
        </CardHeader>
        <CardContent>
          <OtherDetails onChange={(data: object) => handleChange('otherDetails', data)} />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-full"
        >
          Submit Booking
        </button>
      </div>
    </form>
  )
}

