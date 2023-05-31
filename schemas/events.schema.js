const Joi = require('joi');

const id = Joi.number()
const event_name = Joi.string().min(5).max(255)
const event_date = Joi.date()
const event_max_capacity = Joi.number()
const event_speaker_name = Joi.string().min(5).max(100)
const event_location_name = Joi.string().min(5).max(255)
const event_meetup_url = Joi.string().uri()
const event_is_virtual = Joi.boolean()

const createEventSchema = Joi.object({
    event_name: event_name.required(),
    event_date: event_date.required(),
    event_max_capacity: event_max_capacity.required(),
    event_speaker_name: event_speaker_name.required(),
    event_location_name: event_location_name.optional(),
    event_meetup_url: event_meetup_url.optional(),
    event_is_virtual: event_is_virtual.required()
});

const updateEventSchema = Joi.object({
    event_name: event_name.optional(),
    event_date: event_date.optional(),
    event_max_capacity: event_max_capacity.optional(),
    event_speaker_name: event_speaker_name.optional(),
    event_location_name: event_location_name.optional(),
    event_meetup_url: event_meetup_url.optional(),
    event_is_virtual: event_is_virtual.optional(),
});

const getEventSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createEventSchema,
    updateEventSchema,
    getEventSchema
}