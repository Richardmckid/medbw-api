import prisma from '@/prisma/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    // const { type } = await request
    const searchType = searchParams.get('type')
    const q = searchParams.get('q')
    


    try {

        let results = [];
        if (searchType == 'facility') {

            results = await prisma.facility.findMany({
                where: {
                    name: {
                        contains: q
                    }
                },
                include: {
                    drugs: true,
                    district: true
                }
            })
        }

        if (searchType == 'drug') {

            results = await prisma.drug.findMany({
                where: {
                    name: {
                        contains: q
                    }
                },
                include: {
                    facility: true,
                    category: true
                }
            })
        }

        if (searchType == 'district') {

            results = await prisma.district.findMany({
                where: {
                    name: {
                        contains: q
                    }
                },
                include: {
                    facilities: true
                }
            })
        }

        if (searchType == 'category') {

            results = await prisma.category.findMany({
                where: {
                    name: {
                        contains: q
                    }
                },
                include: {
                    drugs: true
                }
            })
        }
    

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