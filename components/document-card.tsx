"use client"

import type { FileItem } from "./documents-page"
import { MoreVertical, Folder, FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type DocumentCardProps = {
  item: FileItem
  onDelete: (id: string) => void
}

export function DocumentCard({ item, onDelete }: DocumentCardProps) {
  const getFileIcon = () => {
    if (item.type === "folder") {
      return <Folder className="h-12 w-12 text-primary" />
    }

    const iconClass = "h-12 w-12"
    switch (item.fileType) {
      case "pdf":
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded bg-red-100 text-red-600">
            <FileText className="h-7 w-7" />
          </div>
        )
      case "pptx":
      case "ppt":
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-100 text-orange-600">
            <FileText className="h-7 w-7" />
          </div>
        )
      case "docx":
      case "doc":
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-100 text-blue-600">
            <FileText className="h-7 w-7" />
          </div>
        )
      case "xlsx":
      case "xls":
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded bg-green-100 text-green-600">
            <FileText className="h-7 w-7" />
          </div>
        )
      default:
        return <FileText className={`${iconClass} text-muted-foreground`} />
    }
  }

  return (
    <div className="group relative rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
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

      <div className="flex flex-col items-center gap-3">
        {getFileIcon()}
        <div className="w-full text-center">
          <p className="truncate text-sm font-medium text-foreground">{item.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{item.type === "folder" ? "Dossier" : item.size}</p>
        </div>
      </div>
    </div>
  )
}
