import { createStyles } from '@mantine/core'

export const useHeroContentStyles = createStyles((theme) => ({
    content: {
        maxWidth: '50%',

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            paddingLeft: 0
        }
    },

    title: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '8px 12px'
    }
}))
