import { Box, Button, Stack } from '@mantine/core'
import { InsuranceFormInput } from './HeroForm.types'
import { SelectProps } from '../../input/select/Select.types'
import { formValidationScheme } from '../../../schemes/ValidationScheme'
import { getAdditionalValue, getPackageValue, getPersonValue } from '../../../utils/CommonUtils'
import { getDayResult, getMaxStartDate, getMinEndDate } from '../../../utils/DateUtils'
import { useEffect, useState } from 'react'
import { useForm, yupResolver } from '@mantine/form'
import { useInsuranceFormStyles } from './HeroForm.styles'
import DatePicker from '../../input/date-picker/DatePicker'
import Select from '../../input/select/Select'
import Toggle from '../../input/toggle/Toggle'
import useInsuranceFlowContext from '../../../context/insurance-flow-context/useInsuranceFlowContext'

const typeData: SelectProps = [
    { value: 'SHORT_TERM', label: 'Krátkodobé poistenie' },
    { value: 'LONG_TERM', label: 'Dlhodobé poistenie' }
]

const packageData: SelectProps = [
    { value: 'BASIC', label: 'Základný balík' },
    { value: 'EXPANDED', label: 'Rozšírený balík' },
    { value: 'EXTRA', label: 'Extra balík' }
]

const additionalData: SelectProps = [
    { value: 'CANCEL_TRIP', label: 'Storno cesty' },
    { value: 'SPORT_ACTIVITY', label: 'Športové aktivity' }
]

const personData: SelectProps = [
    { value: 'ONE_PERSON', label: 'Jedna osoba' },
    { value: 'TWO_PERSON', label: 'Dve osoby' },
    { value: 'THREE_PERSON', label: 'Tri osoby' }
]

const HeroForm = () => {
    const { classes } = useInsuranceFormStyles()

    const { setFinalValue } = useInsuranceFlowContext()

    const [packageValue, setPackageValue] = useState<number>(1.2)
    const [personValue, setPersonValue] = useState<number>(1)
    const [additionalValue, setAdditionalValue] = useState<number>(1)

    const form = useForm<InsuranceFormInput>({
        initialValues: {
            insuranceType: 'SHORT_TERM',
            insuranceStart: '',
            insuranceEnd: '',
            insurancePackage: 'BASIC',
            insuranceAdditional: '',
            insurancePerson: 'ONE_PERSON'
        },
        validate: yupResolver(formValidationScheme)
    })

    useEffect(() => {
        const currentType = form.values.insuranceType
        const currentPackage = form.values.insurancePackage
        const currentAdditional = form.values.insuranceAdditional
        const currentPerson = form.values.insurancePerson

        setPackageValue(getPackageValue(currentType, currentPackage))
        setAdditionalValue(getAdditionalValue(currentType, currentAdditional))
        setPersonValue(getPersonValue(currentPerson))
    }, [form.values])

    // Setting insuranceType to empty string
    useEffect(() => {
        if (form.values.insuranceType === 'LONG_TERM') {
            form.setValues({
                insuranceEnd: ''
            })
        }
    }, [form.values.insuranceType])

    // Submitting form with obtained data
    const onFormSubmit = (data: InsuranceFormInput) => {
        let mainResult = 0

        if (data.insuranceType === 'SHORT_TERM') {
            mainResult = (personValue * packageValue * additionalValue * getDayResult(data.insuranceStart, data.insuranceEnd, data.insuranceType))
        }

        if (data.insuranceType === 'LONG_TERM') {
            mainResult = (personValue * packageValue * additionalValue)
        }

        setFinalValue(mainResult.toFixed(2))
    }

    return (
        <Box className={classes.root}>
            <form onSubmit={form.onSubmit(onFormSubmit)}>
                <Stack mt='sm'>
                    <Toggle
                        data={typeData}
                        {...form.getInputProps('insuranceType')}
                    />

                    <DatePicker
                        required
                        minDate={new Date()}
                        maxDate={getMaxStartDate(form.values.insuranceEnd)}
                        label='Začiatok poistenia'
                        placeholder='Vyberte dátum'
                        {...form.getInputProps('insuranceStart')}
                    />

                    {form.values.insuranceType === 'SHORT_TERM' && (
                        <DatePicker
                            required
                            minDate={getMinEndDate(form.values.insuranceStart)}
                            label='Koniec poistenia'
                            placeholder='Vyberte dátum'
                            {...form.getInputProps('insuranceEnd')}
                        />
                    )}

                    <Select
                        required
                        label='Balík'
                        data={packageData}
                        {...form.getInputProps('insurancePackage')}
                    />

                    <Select
                        clearable
                        placeholder='Pripoistenie'
                        label='Pripoistenie'
                        data={additionalData}
                        {...form.getInputProps('insuranceAdditional')}
                    />

                    <Select
                        required
                        label='Počet osôb'
                        data={personData}
                        {...form.getInputProps('insurancePerson')}
                    />

                    <Button type='submit'>
                        Vypočítať
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default HeroForm
