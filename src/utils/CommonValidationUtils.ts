import {
    InsuranceAdditionalItem,
    InsurancePackageItem, InsurancePersonItem,
    InsuranceTypeItem
} from '../components/hero-section/hero-form/HeroForm.types'

export const getPackageValue = (currentType: InsuranceTypeItem, currentPackage: InsurancePackageItem): number => {
    if (currentType === 'SHORT_TERM') {
        if ( currentPackage === 'BASIC')
            return 1.2
        if (currentPackage === 'EXPANDED')
            return 1.8
        if (currentPackage === 'EXTRA')
            return 2.4
    }

    if (currentType === 'LONG_TERM') {
        if (currentPackage === 'BASIC')
            return 39
        if (currentPackage === 'EXPANDED')
            return 49
        if (currentPackage === 'EXTRA')
            return 59
    }

    return 0
}

export const getAdditionalValue = (currentType: InsuranceTypeItem, currentAdditional: InsuranceAdditionalItem): number => {
    if (!currentAdditional)
        return 1

    if (currentType === 'SHORT_TERM') {
        if (currentAdditional === 'CANCEL_TRIP')
            return 1.5
        if (currentAdditional === 'SPORT_ACTIVITY')
            return 1.3
    }

    if (currentType === 'LONG_TERM') {
        if (currentAdditional === 'CANCEL_TRIP')
            return 1.2
        if (currentAdditional === 'SPORT_ACTIVITY')
            return 1.1
    }

    return 0
}

export const getPersonValue = (currentPerson: InsurancePersonItem): number => {
    if (currentPerson === 'ONE_PERSON')
        return 1
    if (currentPerson === 'TWO_PERSON')
        return 2
    if (currentPerson === 'THREE_PERSON')
        return 3

    return 0
}
