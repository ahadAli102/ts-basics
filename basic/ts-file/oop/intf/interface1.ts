interface IUser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface IUser {
    githubToken: string
}

interface IAdmin extends IUser {
    role: "admin" | "ta" | "learner"
}

const hitesh: IAdmin = {
    dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}
hitesh.email = "h@hc.com"