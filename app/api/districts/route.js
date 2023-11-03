import prisma from '@/prisma/db';
import { NextResponse } from 'next/server';

export async function GET(request) {

    try {

        let results = [];

        results = await prisma.district.findMany({
            include: {
                facilities: true
            }
        })
        
    
        return NextResponse.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: error.message
        });
    }
}