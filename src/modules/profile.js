class Profile {
    // property
    constructor(firstName, lastName, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }
    // method
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    display() {
        return `
        First Name \t : ${this.firstName}
        Last Name \t : ${this.lastName}
        email Name \t : ${this.email}
        `
    }
    updateEmail(newEmail) {
        this.email = newEmail
        console.log('Email Updated');
        console.log(this.display());
    }
}

export default Profile;