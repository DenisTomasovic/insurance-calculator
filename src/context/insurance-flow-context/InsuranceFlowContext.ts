import { InsuranceFlowContextState } from './InsuranceFlowContext.types'
import { createContext } from 'react'

const InsuranceFlowContext = createContext<InsuranceFlowContextState>({} as InsuranceFlowContextState)

export default InsuranceFlowContext
