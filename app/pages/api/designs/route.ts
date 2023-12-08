import { db } from "app/_utils/db";

export async function GET() {
    try{
        const designs = await db.design.findMany();
        return Response.json(designs);
    }
    catch (error) {
        return error;
    }
    finally {
        await db.$disconnect();
    }
}

