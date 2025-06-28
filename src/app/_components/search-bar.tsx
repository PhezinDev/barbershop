'use client';
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
    
    return (
        <div className="flex items-center gap-2 flex-row mt-6">
            <Input placeholder="Faça sua busca" />
            <Button size="icon" variant="secondary">
              <SearchIcon />
              
            </Button>

          </div>
    )
}