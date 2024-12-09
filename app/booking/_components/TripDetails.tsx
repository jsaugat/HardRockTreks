import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface TripDetailsProps {
  onChange: (changes: { [key: string]: any }) => void;
}

export default function TripDetails({ onChange }: TripDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="tripName">Select Trip Name*</Label>
        <Select onValueChange={(value) => onChange({ tripName: value })}>
          <SelectTrigger id="tripName">
            <SelectValue placeholder="Select a trip" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="balcony-of-annapurna">Balcony of Annapurna</SelectItem>
            {/* Add more trip options here */}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="numberOfPeople">Number of People*</Label>
        <Input
          id="numberOfPeople"
          type="number"
          onChange={(e) => onChange({ numberOfPeople: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="tripStartDate">Trip Start Date</Label>
        <Input
          id="tripStartDate"
          type="date"
          defaultValue="2024-12-25"
          onChange={(e) => onChange({ tripStartDate: e.target.value })}
        />
      </div>
    </div>
  )
}

