import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export const GET  = async () => {
try {
    const categories= await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), {status:200});
    
} catch (error) {
    console.error("GET CATEGORIES ERROR");
    return new NextResponse(JSON.stringify({message:"something went wrong", status:500}));
    
}
}