import * as yup from 'yup'

export const formValidationScheme = yup.object().shape(({
    insuranceType: yup.string().required('Typ je povinný'),
    insuranceStart: yup.string().required('Dátum je povinný').nullable(),
    insuranceEnd: yup.string().nullable().test('date-is-required', 'Dátum je povinný.', (value, context) => !(
        context.parent.insuranceType === 'SHORT_TERM' && !value?.length)
    ),
    insurancePackage: yup.string().required('Balík je povinný'),
    insuranceAdditional: yup.string().nullable(),
    insurancePerson: yup.string().required('Počet osôb je povinný')
}))
