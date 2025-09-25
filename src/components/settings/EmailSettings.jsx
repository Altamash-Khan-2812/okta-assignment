import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

export default function EmailSettings() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card className="rounded-xl border shadow-sm bg-white p-4">
      <ul className="divide-y divide-gray-200">
        <li className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-4">
          <div className="min-w-0">
            <Label className="block font-semibold text-gray-900">
              Primary email address
            </Label>
            <p className="mt-1 text-sm text-gray-500">
              Select an email to be used for account-related notifications and
              can be used for password reset.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-56">
            <Select defaultValue="hello@example.com">
              <SelectTrigger className="w-full rounded-md border px-3 py-2 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                align="end"
                sideOffset={6}
                className="z-50 w-full md:w-56 rounded-md border bg-white shadow-lg"
              >
                <SelectItem value="hello@example.com">
                  hello@example.com
                </SelectItem>
                <SelectItem value="alternative@example.com">
                  alternative@example.com
                </SelectItem>
                <SelectItem value="alternative-unverified@example.com">
                  alternative-unverified@example.com
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>

        <li className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-4">
          <div className="min-w-0">
            <Label className="block font-semibold text-gray-900">
              Backup email address
            </Label>
            <p className="mt-1 text-sm text-gray-500">
              Your backup email address will be used as an additional
              destination for security-relevant account notifications and can
              also be used for password resets.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-56">
            <Select defaultValue="all">
              <SelectTrigger className="w-full rounded-md border px-3 py-2 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                align="end"
                sideOffset={6}
                className="z-50 w-full md:w-56 rounded-md border bg-white shadow-lg"
              >
                <SelectItem value="all">Allow all verified emails</SelectItem>
                <SelectItem value="primary">Only primary email</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>

        <li className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4">
          <div className="min-w-0">
            <Label className="block font-medium text-gray-800">
              Keep my email addresses private
            </Label>
            <p className="mt-1 text-sm text-gray-500">
              We'll remove your public profile email when performing web-based
              operations and sending email on your behalf.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              role="switch"
              aria-checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              className={`relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${
                isChecked ? "bg-black" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  isChecked ? "translate-x-[18px]" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </li>
      </ul>
    </Card>
  );
}
