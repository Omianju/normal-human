import { log } from "console"
import { db } from "~/server/db"






export const POST = async ( req : Request ) => {
    const { data } = await req.json()
    console.log("data from clerk : ", data )
    const emailAddress = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const id = data.id
    const imageUrl = data.image_url

    await db.user.create({
        data : {
            emailAddress,
            firstName,
            lastName,
            id,
            imageUrl
        }
    })

    console.log("user created successfully :")
    return new Response( "Webhook Received", {status : 200} )
}