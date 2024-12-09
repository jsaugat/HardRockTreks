import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface OtherDetailsProps {
  onChange: (value: { howDidYouFindUs: string }) => void;
}

export default function OtherDetails({ onChange }: OtherDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="howDidYouFindUs">How do you find us?</Label>
        <Select onValueChange={(value) => onChange({ howDidYouFindUs: value })}>
          <SelectTrigger id="howDidYouFindUs">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="client-referral">Client Referral</SelectItem>
            <SelectItem value="search-engine">Search Engine</SelectItem>
            <SelectItem value="social-media">Social Media</SelectItem>
            <SelectItem value="travel-agency">Travel Agency</SelectItem>
            {/* Add more options here */}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="aboutYourself">Tell us more about yourself to help you better.*</Label>
        <Textarea
          id="aboutYourself"
          onChange={(e) => onChange({ howDidYouFindUs: e.target.value })}
        />
      </div>
    </div>
  )
}

