import { DatePickerProps, DatePicker as ExternalDatePicker } from '@mantine/dates'
import { useInputStyles } from '../Input.styles'

const DatePicker = ({ ...props }: DatePickerProps) => {
    const { classes } = useInputStyles()

    return (
        <ExternalDatePicker {...props} classNames={classes} />
    )
}

export default DatePicker
