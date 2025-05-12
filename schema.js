const Joi = require('joi');

function getRandomInt(min, max) {
  min = Math.ceil(min);   // round up
  max = Math.floor(max);  // round down
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const blogPostSchema = Joi.object({
    id: Joi.number().default(getRandomInt(2, 100)),
    title: Joi.string().min(3).required(),
    content: Joi.string().min(10).required(),
    author: Joi.string().required(),
    createdAt: Joi.date().default(() => new Date())
});

module.exports =  blogPostSchema;