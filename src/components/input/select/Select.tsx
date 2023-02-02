import { Select as ExternalSelect, SelectProps } from '@mantine/core'
import { useInputStyles } from '../Input.styles'

const Select = ({ ...props }: SelectProps) => {
    const { classes } = useInputStyles()

    return (
        <ExternalSelect {...props} classNames={classes} />
    )
}

export default Select
