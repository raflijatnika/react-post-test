import Joi from 'joi'

const schema = Joi.object({
  title: Joi.string().min(2).required(),
  author: Joi.string().min(2).required(),
})

export default schema
