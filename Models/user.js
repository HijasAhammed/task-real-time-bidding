const { create } = require("domain")
const sequelize = require("sequelize")
const user = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primery key: true,
        autoincrement: false,
    },
    username:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:true,
    },
    role:{
        type: DataTypes.STRING,
        defaultvalue:'user',
    },
    create_at:{
        type: DataTypes.DATE,
        defaultvalue:DataTypes.NOW,
    },
},
    {
    timestamps: false,
    tableName: 'users',
});
module.exports= user;