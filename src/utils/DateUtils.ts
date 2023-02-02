import { InsuranceTypeItem } from '../components/hero-section/hero-form/HeroForm.types'

export const getMinEndDate = (insuranceStartDate: string): Date => {
    const startDateValue = new Date(insuranceStartDate)

    if (insuranceStartDate) {
        return new Date(startDateValue.setDate(startDateValue.getDate() + 1))
    }

    return new Date()
}

export const getMaxStartDate = (insuranceEndDate: string): (Date | undefined) => {
    const endDateValue = new Date(insuranceEndDate)

    if (insuranceEndDate) {
        return new Date(endDateValue.setDate(endDateValue.getDate() - 1))
    }

    return undefined
}

export const getDayResult = (start: string, end: string, insuranceType: InsuranceTypeItem): number => {
    const startDate = new Date(start)
    const endDate = new Date(end)

    if (insuranceType === 'SHORT_TERM') {
        return ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    }

    if (insuranceType === 'LONG_TERM') {
        return 365
    }

    return 0
}
