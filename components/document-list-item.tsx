"use client"

import type { FileItem } from "./documents-page"
import { MoreVertical, Folder, FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type DocumentListItemProps = {
  item: FileItem
  onDelete: (id: string) => void
}

export function DocumentListItem({ item, onDelete }: DocumentListItemProps) {
  const getFileIcon = () => {
    if (item.type === "folder") {
      return <Folder className="h-5 w-5 text-primary" />
    }

    const iconClass = "h-5 w-5"
    switch (item.fileType) {
      case "pdf":
        return <FileText className={`${iconClass} text-red-600`} />
      case "pptx":
      case "ppt":
        return <FileText className={`${iconClass} text-orange-600`} />
      case "docx":
      case "doc":
        return <FileText className={`${iconClass} text-blue-600`} />
      case "xlsx":
      case "xls":
        return <FileText className={`${iconClass} text-green-600`} />
      default:
        return <FileText className={`${iconClass} text-muted-foreground`} />
    }
  }

  return (
    <div className="grid grid-cols-[1fr_120px_120px_80px] items-center gap-4 px-6 py-3 transition-colors hover:bg-secondary">
      <div className="flex items-center gap-3">
        {getFileIcon()}
        <span className="truncate text-sm font-medium text-foreground">{item.name}</span>
      </div>
      <div className="text-sm text-muted-foreground">{item.owner}</div>
      <div className="text-sm text-muted-foreground">{item.modifiedDate}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{item.type === "folder" ? "—" : item.size}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => onDelete(item.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
