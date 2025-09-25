import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash, User } from "lucide-react";

export default function EmailItem({
  email,
  status = "VERIFIED",
  isPrimary = false,
  description,
}) {
  const StatusBadge = () => {
    if (status === "VERIFIED") {
      return (
        <Badge className="rounded-full bg-lime-100 text-lime-700 border-1 border-lime-700">
          VERIFIED
        </Badge>
      );
    }
    return (
      <Badge className="rounded-full bg-gray-200 text-gray-600 border-1 border-gray-700">
        UNVERIFIED
      </Badge>
    );
  };

  return (
    <li role="listitem" className="flex items-start justify-between gap-4 py-4">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-gray-900">{email}</span>
          {isPrimary && (
            <Badge className="rounded-full bg-orange-100 text-orange-500 border-1 border-orange-700">
              PRIMARY
            </Badge>
          )}
          <StatusBadge />
        </div>

        {description ? (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        ) : null}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-44 rounded-md shadow-lg border bg-white"
        >
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100">
            <User className="h-4 w-4 text-gray-600" />
            <span>Manage</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-600 hover:bg-red-50">
            <Trash className="h-4 w-4" />
            <span>Remove</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
