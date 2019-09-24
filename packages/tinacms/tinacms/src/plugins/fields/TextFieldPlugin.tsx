import * as React from 'react'
import { TextField as BaseTextField, InputProps } from '@tinacms/fields'
import { wrapFieldsWithMeta } from './wrapFieldWithMeta'

export const TextField = wrapFieldsWithMeta<InputProps>(({ input }) => (
  <BaseTextField {...input} />
))

export default {
  name: 'text',
  Component: TextField,
  validate(value: any, values: any, meta: any, field: any) {
    if (field.required && !value) return 'Required'
  },
}
