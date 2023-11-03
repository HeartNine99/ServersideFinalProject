module.exports = (sequelize, DataTypes) => {
    const Gasstove = sequelize.define('Gasstove', {
        Model: DataTypes.STRING,
        BTU: DataTypes.INTEGER,
        Burners: DataTypes.INTEGER,
        Material: DataTypes.STRING,
        FlameProtection: DataTypes.STRING, 
        Manufacturer: DataTypes.STRING,
        Price: DataTypes.INTEGER
    });

    return Gasstove;
};
