import { createStyles } from '@mantine/core'

export const useInputStyles = createStyles((theme) => ({
    root: {
        position: 'relative'
    },

    input: {
        height: 'auto',
        paddingTop: 18
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        color: theme.colors.dark[3],
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1
    }
}))
