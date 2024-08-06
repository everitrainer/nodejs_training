// const result = someFunc();
// console.log("test")

// try {
//     const result = someFunc();
//     console.log("test")
// } catch (error) {
//     console.log(error.message)
// }
// console.log("continue1")

// function sumOfEvenNumber(nums) {
//     if (!Array.isArray(nums)) {
//         throw new TypeError("nums must be an Array");
//     }
// }

// sumOfEvenNumber("test");

// function test() {
//     throw new ValidationError("Whoops!");
// }
// class InsufficientBalanceError extends Error {
//     constructor(message) {
//         super(message); // (1)
//         this.name = "InsufficientBalanceError"; // (2)
//     }
// }
// class BankAccount {
//     constructor(balance) {
//         let _balance = balance;
//         this.withdraw = (amount) => {
//             if (_balance - amount < 0) throw new InsufficientBalanceError()
//             _balance -= amount;
//         }
//         this.deposit = (amount) => {
//             _balance += amount;
//             return _balance;
//         }

//         this.getBalance = () => { return _balance }
//     }
// }

// let bankAcc1 = new BankAccount(1000);
// // console.log(bankAcc1.withdraw(2000))
// try {

//     console.log(bankAcc1.withdraw(2000));

// } catch (error) {
//     console.log(error.name)
// } finally {
//     console.log("This is always called")
// }

// console.log("this is also called")


try {
    try {
        throw new Error("oops");
    } catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex.message);
}