import { createMount } from '@material-ui/core/test-utils'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import PrimaryColorPicker from '.'

configure({ adapter: new Adapter() })

describe('PrimaryColorPicker', () => {
  let mount

  beforeAll(() => {
    mount = createMount()
  })

  afterAll(() => {
    mount.cleanUp()
  })

  it('is truthy', () => {
    expect(PrimaryColorPicker).toBeTruthy()
  })

  it(`matches snapshot`, () => {
    const wrapper = mount(
      <PrimaryColorPicker onChange={(color) => console.log(color)} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
