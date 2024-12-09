import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function TravelInsurance({ onChange }: { onChange: (value: any) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Travel insurance is compulsory to take any adventure trip and it must be covered both medical & emergency evacuation with worth of USD 100,000.00 minimum. However travel insurance is not mandatory for those travelers (s) who is intend cultural/city tours or short hike bellow 2500 meters of altitude.
      </p>
      <RadioGroup onValueChange={(value) => onChange({ insuranceStatus: value })}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="full-coverage" id="full-coverage" />
          <Label htmlFor="full-coverage">I have full coverage of Insurance</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="will-buy-later" id="will-buy-later" />
          <Label htmlFor="will-buy-later">Not yet bought (I will buy insurance later)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="not-required" id="not-required" />
          <Label htmlFor="not-required">My trip doesn't require travel insurance</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-gray-500">
        Note: If you already have travel insurance, Send us insurance company name, policy number and phone number in official email.
      </p>
    </div>
  )
}

