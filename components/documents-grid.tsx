import type { FileItem } from "./documents-page"
import { DocumentCard } from "./document-card"
import { DocumentListItem } from "./document-list-item"

type DocumentsGridProps = {
  items: FileItem[]
  viewMode: "grid" | "list"
  onDelete: (id: string) => void
}

export function DocumentsGrid({ items, viewMode, onDelete }: DocumentsGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-border bg-card p-12">
        <svg className="h-16 w-16 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">Aucun document</h3>
          <p className="text-sm text-muted-foreground">Commencez par créer un dossier ou importer des fichiers</p>
        </div>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="rounded-lg border border-border bg-card">
        <div className="grid grid-cols-[1fr_120px_120px_80px] gap-4 border-b border-border px-6 py-3 text-sm font-medium text-muted-foreground">
          <div>Nom</div>
          <div>Propriétaire</div>
          <div>Modifié</div>
          <div>Taille</div>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <DocumentListItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <DocumentCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  )
}
