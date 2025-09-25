import { Card } from "@/components/ui/card"
import EmailItem from "./EmailItem"

export default function EmailList() {
  return (
    <Card className="rounded-2xl shadow-md p-0 overflow-hidden border-1 border-gray-200">
      <ul role="list" className="divide-y divide-gray-200 px-5 bg-white ">
        <EmailItem
          email="hello@example.com"
          status="VERIFIED"
          isPrimary
          description="This email address is the default for all notifications and account access."
        />
        <EmailItem
          email="alternative@example.com"
          status="VERIFIED"
        />
        <EmailItem
          email="alternative-unverified@example.com"
          status="UNVERIFIED"
        />
      </ul>
    </Card>
  )
}
