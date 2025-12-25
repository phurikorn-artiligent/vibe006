"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce"; 
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
import { X } from "lucide-react";

export function AssetFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [typeId, setTypeId] = useState(searchParams.get("typeId") || "all");
  
  const [assetTypes, setAssetTypes] = useState<{ id: number; name: string }[]>([]);

  // Debounce search input
  // Since I don't have a useDebounce hook yet, I'll create a simple effect or assume one exists.
  // I will create a simple internal logic or file for useDebounce if I have time, 
  // but for now I'll use a simple timeout in useEffect.
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

    if (status && status !== "all") {
      params.set("status", status);
    } else {
      params.delete("status");
    }

    if (typeId && typeId !== "all") {
      params.set("typeId", typeId);
    } else {
      params.delete("typeId");
    }

    router.push(`/assets?${params.toString()}`);
  }, [debouncedSearch, status, typeId]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setTypeId("all");
    router.push("/assets");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 glass-card rounded-xl mb-6 items-center">
      <div className="relative flex-1 max-w-sm">
           <Input
            placeholder="Search code, name, serial..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-4 border-slate-200"
          />
      </div>
      
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[180px] border-slate-200">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          {Object.values(AssetStatus).map((s) => (
            <SelectItem key={s} value={s}>
              {s.replace("_", " ")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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

      {(search || status !== "all" || typeId !== "all") && (
        <Button variant="ghost" onClick={clearFilters} className="px-3 text-red-500 hover:text-red-600 hover:bg-red-50">
          Reset
          <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
