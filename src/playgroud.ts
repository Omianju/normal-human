import { db } from "~/server/db";





await db.user.create({
    data : {
        emailAddress : "test@gmail.xom",
        firstName : "mocked",
        lastName : "mocked",
    }
})

console.log("done")