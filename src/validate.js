class Validator {
  static add(name, fn) {
    Validator.prototype[name] = fn
  }
  constructor() {}
  validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
      const value = data[rule.key]
      if (rule.required) {
        const error = this.required(value)
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
        if (this[validatorKey]) {
          const error = this[validatorKey](value, rule[validatorKey])
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
  required(value) {
    if (!value && value !== 0) {
      return '必填'
    }
  }
  pattern(value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return 'email格式不正确'
    }
  }
  minLength(value, minLength) {
    if (value.length < minLength) {
      return '长度不能小于minLength'
    }
  }
  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return '长度不能大于maxLength'
    }
  }
}
function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}
export default Validator
