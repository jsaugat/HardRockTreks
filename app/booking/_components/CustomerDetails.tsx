import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CustomerDetailsProps {
  onChange: (details: { [key: string]: string }) => void;
}

export default function CustomerDetails({ onChange }: CustomerDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title*</Label>
        <Select onValueChange={(value) => onChange({ title: value })}>
          <SelectTrigger id="title">
            <SelectValue placeholder="Select a title" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mr">Mr.</SelectItem>
            <SelectItem value="mrs">Mrs.</SelectItem>
            <SelectItem value="ms">Ms.</SelectItem>
            <SelectItem value="dr">Dr.</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="firstName">First Name*</Label>
        <Input
          id="firstName"
          onChange={(e) => onChange({ firstName: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="middleName">Middle Name</Label>
        <Input
          id="middleName"
          onChange={(e) => onChange({ middleName: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name*</Label>
        <Input
          id="lastName"
          onChange={(e) => onChange({ lastName: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="email">Email ID*</Label>
        <Input
          id="email"
          type="email"
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          onChange={(e) => onChange({ city: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="country">Select Country*</Label>
        <Select onValueChange={(value) => onChange({ country: value })}>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select Your Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            {/* Add more countries here */}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="passportNumber">Passport Number*</Label>
        <Input
          id="passportNumber"
          onChange={(e) => onChange({ passportNumber: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="passportExpiration">Expiration Date*</Label>
        <Input
          id="passportExpiration"
          type="date"
          onChange={(e) => onChange({ passportExpiration: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="mailingAddress">Mailing Address</Label>
        <Input
          id="mailingAddress"
          onChange={(e) => onChange({ mailingAddress: e.target.value })}
        />
      </div>
    </div>
  )
}

