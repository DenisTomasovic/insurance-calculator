export type InsuranceTypeItem = 'SHORT_TERM' | 'LONG_TERM'

export type InsurancePackageItem = 'BASIC' | 'EXPANDED' | 'EXTRA'

export type InsuranceAdditionalItem = '' | 'CANCEL_TRIP' | 'SPORT_ACTIVITY'

export type InsurancePersonItem = 'ONE_PERSON' | 'TWO_PERSON' | 'THREE_PERSON'

export type InsuranceFormInput = {
    insuranceType: InsuranceTypeItem
    insuranceStart: string
    insuranceEnd: string
    insurancePackage: InsurancePackageItem
    insuranceAdditional: InsuranceAdditionalItem
    insurancePerson: InsurancePersonItem
}
