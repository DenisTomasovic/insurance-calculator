import { createStyles } from '@mantine/core'

export const useClipPathStyles = createStyles((theme) => ({
    root: {
        position: 'absolute',
        left: 0,
        right: 0
    },

    shape: {
        fill: theme.colors.blue[7]
    }
}))
