import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
    email?: string,
    name?: string,
    lastname?: string
    fullName(): string
}

const User = new Schema({
  email: String,
  name: String,
  lastname: String
}, {
  timestamps: true
})

User.methods.fullName = function (): string {
  return this.name + ' ' + this.lastname
}

export default model<UserInterface>('User', User)
