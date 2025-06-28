'use client';   
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";

interface PhoneItemProps {
    phone: string;
}


export default function PhoneItem({phone}: PhoneItemProps) {

    const handleCopyPhone = (phone: string) => {
        navigator.clipboard.writeText(phone)
        toast.success("Número copiado com sucesso!")
           
    }

    return (
        <div key={phone} className="flex justify-between">
                        <div className="flex items-center">
                        <Smartphone/>
                        <p className="text-sm gap-2">{phone}</p>
                        </div>
                        <div>
                            <Button variant="outline" size="sm" onClick={() => handleCopyPhone(phone)}>Copiar</Button>
                        </div>
                        
                    </div>
    )}