import chai, { expect } from 'chai'
import Validate from '@/validate.js'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validate from '../../src/validate'
chai.use(sinonChai)

describe('Validate', () => {
  it('Validate存在', () => {
    expect(Validate).to.exist
  })
  it('required true error', () => {
    const data = { email: '' }
    const rules = [{ key: 'email', required: true }]
    const errors = Validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('test email is number 0: required true pass', () => {
    const data = { email: 0 }
    const rules = [{ key: 'email', required: true }]
    const errors = Validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('test pattern:regExp: error', () => {
    const data = { email: '@123.com' }
    const rules = [{ key: 'email', pattern: /^.+@.+$/ }]
    const errors = Validate(data, rules)
    expect(errors.email.pattern).to.eq('email格式不正确')
  })
  it('test pattern: regExp: pass ', () => {
    const data = { email: '1@123.com' }
    const rules = [{ key: 'email', pattern: /^.+@.+$/ }]
    const errors = Validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('test pattern:"email":  error', () => {
    const data = { email: '@123.com' }
    const rules = [{ key: 'email', pattern: 'email' }]
    const errors = Validate(data, rules)
    expect(errors.email.pattern).to.eq('email格式不正确')
  })
  it('test pattern:"email": pass ', () => {
    const data = { email: '1@123.com' }
    const rules = [{ key: 'email', pattern: 'email' }]
    const errors = Validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('test pattern:"email": only required error', () => {
    const data = { email: '' }
    const rules = [{ key: 'email', pattern: 'email', required: true }]
    const errors = Validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('test pattern and minLength: only required error', () => {
    const data = { email: '1@' }
    const rules = [{ key: 'email', pattern: 'email', minLength: 6 }]
    const errors = Validate(data, rules)
    expect(errors.email.pattern).to.exist
    expect(errors.email.minLength).to.exist
  })
  it('test maxLength', () => {
    const data = { email: '11111111111111' }
    const rules = [{ key: 'email', pattern: 'email', maxLength: 6 }]
    const errors = Validate(data, rules)
    expect(errors.email.maxLength).to.exist
  })
  it('complex test ', () => {
    const data = { email: '12312313131313131' }
    const rules = [{ key: 'email', required: true, minLength: 5, maxLength: 10, hasNumber: true, hasLowerCaseAndUpcase: true, pattern: 'email' }]
    const fn = () => {
      validate(data, rules)
    }
    expect(fn).to.throw('no validator exist: hasNumber')
  })
  it('add validator rule by user ', () => {
    const data = { email: 'aaaaaaa' }
    const rules = [{ key: 'email', required: true, minLength: 5, maxLength: 10, hasNumber: true, pattern: 'email' }]
    validate.hasNumber = () => {
      const regx = /^\d+$/
      if (!regx.test(data)) {
        return '必须含有数字'
      }
    }
    let errors
    const fn = () => {
      errors = validate(data, rules)
    }
    expect(fn).to.not.throw('no validator exist: hasNumber')
    expect(errors.email.hasNumber).to.exist
  })
})
