import { createStyles } from '@mantine/core'

export const useHeroSectionStyles = createStyles((theme) => ({
    outer: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 3,

        [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xl
        }
    },

    inner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        [theme.fn.smallerThan('sm')]: {
            alignItems: 'center',
            flexDirection: 'column-reverse'
        }
    }
}))
