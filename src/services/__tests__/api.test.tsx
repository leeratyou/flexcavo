import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'

import Dashboard from 'pages/Dashboard'
import { getDataMock } from 'core/__tests__/__mocks__/mocks'
import { useGetTelematicData } from 'services/api'
import CombinedContext from 'context/CombinedContext'

describe('Test API service', () => {
  
  test('useGetTelematicData hook standalone', () => {
    const { result } = renderHook(() => useGetTelematicData({filters: { showOnlyAlerts: false }}), { wrapper: CombinedContext })
    expect(result.current.length).toBe(8)
  })
  
  test('filtered useGetTelematicData hook standalone', () => {
    const { result } = renderHook(() => useGetTelematicData({filters: { showOnlyAlerts: true }}), { wrapper: CombinedContext })
    expect(result.current.length).toBe(5)
  })
  
  test('useGetTelematicData hook integration', () => {
    render(
      <MockedProvider mocks={getDataMock} addTypename={false}>
        <Dashboard />
      </MockedProvider>
    )
    expect(screen.getByText(getDataMock[0].result.data[0].EquipmentHeader.SerialNumber)).toBeInTheDocument()
  })
  
})
