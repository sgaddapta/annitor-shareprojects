export type User = {
    username: string
    password: string
}

export const users: User[] = [
    { username: 'sergio', password: 'annitor' }
]

export function validateCredentials(username: string, password: string) {
    return users.some(u => u.username === username && u.password === password)
}

export default users
