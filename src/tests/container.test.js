import React from 'react'
import { mount } from 'enzyme'
import Container from '../js/containers/container'
import MapContainer from '../js/containers/mapContainer'
import Form from '../js/containers/form'
import Infos from '../js/components/infos'


describe('Container,', () => {
  let states
  let mountedContainer
  const container = () => {
    !mountedContainer ?
      mountedContainer = mount(
        <Container {...states} />
      ) : mountedContainer
    
    return mountedContainer
  }

  beforeEach(() => {
    states = {
      userLocation: false,
      domainName: '',
      domainLocation: false,
      mapCenter: false,
      alertText: ''
    }
    mountedContainer = undefined
  })
  
  it('it always renders a <div>', () => {
    const div = container().find('div')
    expect(div.length).toBeGreaterThan(0)
  })

  describe('the rendered <div>', () => {
    it('contains everything else that gets rendered', () => {
      const div = container().find('div')
      const wrappingDiv = div.first()
      expect(wrappingDiv.children()).toEqual(container().children())
    })
  })

  it('it always renders `Infos`', () => {
    expect(container().find(Infos).length).toBeGreaterThan(0)
  })

  it('it always renders `Form`', () => {
    expect(container().find(Form).length).toBeGreaterThan(0)
  })

  describe("when `mapCenter` is false", () => {
    beforeEach(() => {
      states.mapCenter = false
    })

    it("does not render a `MapContainer`", () => {
      expect(container().find(MapContainer).length).toBe(0)
    })
  })


})