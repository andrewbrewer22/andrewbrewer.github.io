

module.exports = (sequelize, Sequelize) => {
    
    const Fooddbmodel = sequelize.define("fooddb", {
    name: {
        type: Sequelize.STRING
    },
    protein: {
        type: Sequelize.NUM
    },
    fats: {
        type: Sequelize.NUM
    },
    carbs: {
        type: Sequelize.NUM
    }
    });
    return Fooddbmodel;
};