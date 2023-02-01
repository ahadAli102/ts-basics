let score: number | string = 33
score = 44
score = "55"


type UUser = {
    name: string;
    id: number
}

type UAdmin = {
    username: string;
    id: number
}

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


getDbId(3)
getDbId("3")

let ahad: UUser | UAdmin = {name: "hitesh", id: 334}
ahad = {username: "hc", id: 334}


const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"