// importing my connection
const connection = require("./connection");

// create a function that reads from the burger table
const findAll = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM burgers", function (err, dbBurgerData) {
            if (err) {
                return reject(err);
            }
            return resolve(dbBurgerData);
        });
    });
};

// Select by the burger id
const findById = burgerId => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {
            if (err) {
                return reject(err);
            }
            return resolve(dbBurgerData);
        });
    });
};

// Creating / Insert
const create = burgerDataObj => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO burgers SET ?", [burgerDataObj], function (err, dbBurgerData) {
            if (err) {
                return reject(err);
            }
            return resolve(dbBurgerData);
        });
    });
};

// update burgers bouleen value true or false
const update = (devouredValue, burgerId) => {
    return new Promise((resolve, reject) => {
        devouredValue = (devouredValue === "false")
            ? true : false;

        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, dbBurgerData) {
            if (err) {
                return reject(err);
            } else if (dbBurgerData.changedRows === 0) {
                return reject({ message: "This is not the burger you're looking for" })
            } else {
                return resolve(dbBurgerData)
            }
        });
    });
};

//  remove burger
const remove = (burgerId) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {
            if (err) {
                return reject(err);
            } else if (dbBurgerData.affectedRows === 0) {
                return reject({ message: "This is not the burger you're looking for" });
            } else {
                return resolve(dbBurgerData);
            }
        });
    });
};

// exports all of the functions
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};