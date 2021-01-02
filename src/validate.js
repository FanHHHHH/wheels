export default function validate(data, rules) {
  let errors = {}
  rules.forEach((rule) => {
    const value = data[rule.key]
    if (rule.required) {
      const error = validate.required(value)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].required = error
        return
      }
    }
    const validators = Object.keys(rule).filter((key) => {
      return key !== 'required' && key !== 'key'
    })
    validators.forEach((validatorKey) => {
      if (validate[validatorKey]) {
        const error = validate[validatorKey](value, rule[validatorKey])
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key][validatorKey] = error
        }
      } else {
        throw `no validator exist: ${validatorKey}`
      }
    })
  })
  return errors
}
validate.required = function(value) {
  if (!value && value !== 0) {
    return '必填'
  }
}
validate.pattern = function(value, pattern) {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return 'email格式不正确'
  }
}
validate.minLength = function(value, minLength) {
  if (value.length < minLength) {
    return '长度不能小于minLength'
  }
}
validate.maxLength = function(value, maxLength) {
  if (value.length > maxLength) {
    return '长度不能大于maxLength'
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}
