"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface AssetPaginationProps {
  metadata: {
    page: number;
    totalPages: number;
  };
}

export function AssetPagination({ metadata }: AssetPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { page, totalPages } = metadata;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `/assets?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href={createPageURL(page - 1)}
            aria-disabled={page <= 1}
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        
        {/* Simple pagination logic for now. 
            Can be improved to show range like 1 2 ... 5 6 if needed. 
            For now showing current and surrounding. */}
        
        {page > 2 && (
             <PaginationItem>
                <PaginationLink href={createPageURL(1)}>1</PaginationLink>
             </PaginationItem>
        )}
        
        {page > 3 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

        {page > 1 && (
            <PaginationItem>
                <PaginationLink href={createPageURL(page - 1)}>{page - 1}</PaginationLink>
            </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={createPageURL(page)} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        {page < totalPages && (
            <PaginationItem>
                <PaginationLink href={createPageURL(page + 1)}>{page + 1}</PaginationLink>
            </PaginationItem>
        )}

        {page < totalPages - 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

        {page < totalPages - 1 && (
             <PaginationItem>
                <PaginationLink href={createPageURL(totalPages)}>{totalPages}</PaginationLink>
             </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext 
            href={createPageURL(page + 1)}
            aria-disabled={page >= totalPages}
            className={page >= totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
