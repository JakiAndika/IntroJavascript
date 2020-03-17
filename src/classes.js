/*
        Classes 
    - Base Class
    - Sub Class
*/

// const Profile = {
//     firstName: "",
//     lastName: "",
//     email:"",
// };

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



const jhonProfile = new Profile("jhon", "doe", "jhon@doe.com")
// jhonProfile.firstName = "jhon";
// jhonProfile.lastName = "doe";
// jhonProfile.email = "jhon@doe.com";

console.log(typeof Profile);
console.log(typeof jhonProfile);
console.log(jhonProfile);
console.log(jhonProfile.fullName());
console.log(jhonProfile.display());
jhonProfile.updateEmail("my@gmail.com");

class ProfileSecret extends Profile {
    constructor(firstName, lastName, email, password) {
        super(firstName, lastName, email, password);
        this.password = password;
    }
    display() {
        return `
        First Name \t : ${this.firstName}
        Last Name \t : ${this.lastName}
        email Name \t : ${this.email}
        Password Name \t : ${this.password}
        `;
    }
    updatePassword(newPassword) {
        this.password = newPassword;
        console.log("Password Updated");
        console.log(this.display());
    }
}

const mario = new ProfileSecret("mario", "bros", "mario@gmail.com", "123");
console.log(mario.display());
mario.updatePassword(321)