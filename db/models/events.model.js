const { DataTypes } = require('sequelize');

function defineEvent( sequelize ) {
    sequelize.define('event', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        event_name: {
            type: DataTypes.STRING
        },
        event_date: {
            type: DataTypes.DATE
        },
        event_max_capacity: {
            type: DataTypes.INTEGER
        },
        event_speaker_name: {
            type: DataTypes.STRING
        },
        event_location_name: {
            type: DataTypes.STRING
        },
        event_meetup_url: {
            type: DataTypes.STRING
        },
        event_is_virtual: {
            type: DataTypes.BOOLEAN
        },
    }, {
        // Other model options go here
        timestamps: false
    });
}

module.exports = defineEvent;
