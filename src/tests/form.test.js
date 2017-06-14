import React from 'react'
import { mount } from 'enzyme'
import Form from '../js/containers/form'


describe('Form,', () => {
  let props
  let mountedForm
  const form = () => {
    !mountedForm ?
      mountedForm = mount(
        <Form {...props} />
      ) : mountedForm
    
    return mountedForm
  }

  beforeEach(() => {
    props = {
      domainSubmit: undefined,
      domainValue: undefined,
      domainChange: undefined,
      userLocation: undefined,
      reset: undefined,
      resetUser: undefined
    }
    mountedForm = undefined
  })
  
  it('it always renders a <section>', () => {
    const section = form().find('section')
    expect(section.length).toBeGreaterThan(0)
  })

  describe('the rendered <section>', () => {
	  it('contains everything else that gets rendered', () => {
	    const section = form().find('section')
	    const wrappingSection = section.first()
	    expect(wrappingSection.children()).toEqual(form().children())
	  })

	  it('does receive 2 props', () => {
      const section = form().find('section')
	    const wrappingSection = section.first()
      expect(Object.keys(wrappingSection.props()).length).toBe(2)
    })
  })

  it('always renders a <form.domainLocation>', () => {
    expect(form().find('.domainLocation').length).toBe(1)
  })

  it('always renders a <div.userLocation>', () => {
    expect(form().find('.userLocation').length).toBe(1)
  })

  describe('rendered <form.domainLocation>', () => {
    it('does receive 4 props', () => {
      const domains = form().find('.domainLocation')
      expect(Object.keys(domains.props()).length).toBe(4)
    })
  })  

  describe('rendered <div.userLocationn>', () => {
    it('does receive 2 props', () => {
      const user = form().find('.userLocation')
      expect(Object.keys(user.props()).length).toBe(2)
    })
  }) 

  describe('onSubmit event', () => {
    beforeEach(() => {
      props.domainSubmit = jest.fn()
    })

    it('is still undefined', () => {
      const domainLocation = form().find('.domainLocation')
      expect(domainLocation.props().domainSubmit).not.toBeDefined()
    })
  })

})