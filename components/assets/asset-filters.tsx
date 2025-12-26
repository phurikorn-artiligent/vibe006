"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AssetStatus } from "@/generated/client";
import { getAssetTypes } from "@/app/actions/asset-types";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { MultiSelect } from "@/components/ui/multi-select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AssetFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get("search") || "");
  
  // Parse status from URL (comma separated or multiple)
  const initialStatus = searchParams.getAll("status");
  // If URL has comma separated values "AVAILABLE,IN_USE"
  const parsedStatus = initialStatus.flatMap(s => s.split(',')).filter(Boolean);
  
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(parsedStatus);

  const [typeId, setTypeId] = useState(searchParams.get("typeId") || "all");
  const [limit, setLimit] = useState(searchParams.get("limit") || "10");
  
  const [assetTypes, setAssetTypes] = useState<{ id: number; name: string }[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    async function fetchTypes() {
      const result = await getAssetTypes();
      if (result.success && result.data) {
        setAssetTypes(result.data);
      }
    }
    fetchTypes();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Page reset on filter change
    params.set("page", "1");

    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    // Handle Multi-Status
    params.delete("status");
    if (selectedStatuses.length > 0 && !selectedStatuses.includes("all")) {
        selectedStatuses.forEach(s => params.append("status", s));
    }

    if (typeId && typeId !== "all") {
      params.set("typeId", typeId);
    } else {
      params.delete("typeId");
    }

    if (limit && limit !== "10") {
      params.set("limit", limit);
    } else {
      params.delete("limit");
    }

    router.push(`/assets?${params.toString()}`);
  }, [debouncedSearch, selectedStatuses, typeId, limit]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const clearFilters = () => {
    setSearch("");
    setSelectedStatuses([]);
    setTypeId("all");
    setLimit("10"); // Reset limit too? Or keep user preference? Usually reset clears everything.
    router.push("/assets");
  };

  const statusOptions = Object.values(AssetStatus).map(s => ({
    label: s.replace(/_/g, " "),
    value: s
  }));

  return (
    <div className="flex flex-col gap-4 p-4 glass-card rounded-xl mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
            <Input
              placeholder="Search code, name, serial..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-4 border-slate-200"
            />
        </div>

        {/* Status Multi-Select */}
        <div className="w-[200px]">
           <MultiSelect 
              options={statusOptions}
              selected={selectedStatuses}
              onChange={setSelectedStatuses}
              placeholder="Filter Status"
           />
        </div>

        <Select value={typeId} onValueChange={setTypeId}>
          <SelectTrigger className="w-[180px] border-slate-200">
            <SelectValue placeholder="Asset Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {assetTypes.map((t) => (
              <SelectItem key={t.id} value={t.id.toString()}>
                {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Page Size Selector */}
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 whitespace-nowrap">Show:</span>
            <Select value={limit.toString()} onValueChange={setLimit}>
                <SelectTrigger className="w-[70px] border-slate-200">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {(search || selectedStatuses.length > 0 || typeId !== "all") && (
          <Button variant="ghost" onClick={clearFilters} className="px-3 text-red-500 hover:text-red-600 hover:bg-red-50">
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
