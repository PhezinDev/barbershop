'use client';

import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, Router } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function BackButton() {

    const router = useRouter();
    return (
        <Button size="icon" variant="secondary" className="absolute top-4 left-4"  onClick={() => router.back()}><ChevronLeftIcon/></Button>
    )
}