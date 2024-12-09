import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface EmergencyContactProps {
  onChange: (value: { fullName?: string, phone?: string, relationship?: string, email?: string }) => void;
}

export default function EmergencyContact({ onChange }: EmergencyContactProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="emergencyFullName">Full Name*</Label>
        <Input 
          id="emergencyFullName" 
          onChange={(e) => onChange({ fullName: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="emergencyPhone">Phone Number*</Label>
        <Input 
          id="emergencyPhone" 
          type="tel"
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="emergencyRelationship">Relationship</Label>
        <Input 
          id="emergencyRelationship" 
          onChange={(e) => onChange({ relationship: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="emergencyEmail">Email ID</Label>
        <Input 
          id="emergencyEmail" 
          type="email"
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>
    </div>
  )
}

