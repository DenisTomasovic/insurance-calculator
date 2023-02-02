import { createStyles } from '@mantine/core'

export const useInsuranceFormStyles = createStyles((theme) => ({
    root: {
        width: '50%',

        [theme.fn.smallerThan('sm')]: {
            width: '100%'
        }
    }
}))
